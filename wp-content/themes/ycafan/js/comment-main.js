(function ($, rcGlobal) {
    var comment =  function(){
        self = this;
        self.params = {
            post_id: $('#publish_form').find('input[name=post_id]').val(),
            orderby: 'created_at asc',
            expire: rcGlobal.commentExpire,//缓存评论者信息
            url: rcGlobal.wpAjaxUrl + "/wp-admin/admin-ajax.php?timestamp=" + new Date().getTime(),
        };
        self.dom = {
            pform: '#publish_form'
        };
        self.params = $.extend({}, self.params, rcGlobal);
        self.tpl = (new template());
    };
    comment.prototype = {
        run: function(){
            var self = this;
            //this.bind();
            this.bindEvt();
            this.loadCommenter('#publish_form');
            this.load(self.params.post_id, self.params.orderby);
        },
        load: function(post_id, sort){
            var self = this;
            $._ajax(self.params.url, {post_id: post_id,sort: sort, action: 'load_comments'}, 'POST', 'JSON', function(json){
                if(json.code > 0){
                    var tree = json.ret.tree || [];
                    var list = json.ret.list || [];
                    var html = '';
                    $("#comment_number").text(list.length);
                    $.each(tree, function(i, v){
                        html += self.tpl.template_comment(list[i]);
                        $(".js-comments-list").html('');
                        $(html).appendTo(".js-comments-list");
                        self.updateCommentNum(1);
                        var rp_html = '';
                        if(v.length > 0){
                            $.each(v, function(j, n){
                                rp_html += self.tpl.template_reply(list[n])
                            });
                            setTimeout(function(){
                                $("#reply-content-" + list[i].comment_id).html(rp_html);
                            }, 10);
                        }
                    });
                    setTimeout(function(){
                        self.bind();
                    }, 10);
                }else{
                }
            });
        },
        bind: function(){
            var self = this;

            $('.js-reply-comment').off('click').on('click', function(){
                var _this = this;
                self.modal_show();
                $('.js-reply-comment').show();
                $(_this).hide();

                $("#reply_modal").appendTo("#comment-cont-"+ $(_this).data().comment_id +"").show();
                $("#reply_modal")._clear_form(true);
                self.loadCommenter('#reply_modal');
                $("#reply_modal_submit").off('click').on('click', function(){
                    self.reply(_this);
                });
                $("#reply_modal_close").off('click').on('click', function(){
                    self.modal_hide();
                    $('.js-reply-comment').show();
                });
            });

            $(".js-vote-up, .js-vote-down").on('click', function(){
                self.vote(this);
            });
        },
        bindEvt: function(){
            var self = this;
            $('.js-submit-comment').on('click', function(){
                self.publish(this);
            });
            $(".js-comments-sorting").on('click', function(){
                var _this = $(this);
                var timeArr = ['created_at asc', 'created_at asc'];
                var voteArr = ['vote_up desc', 'vote_up desc'];
                var sort = '';
                var num = parseInt(_this.attr('num'));
                if(_this.data().commentSort == 'time'){
                    var num = parseInt(_this.attr('num'));
                    sort = timeArr[num%2];
                }else{
                    sort = voteArr[num%2];
                }
                _this.attr('num', num+1);
                self.load(self.params.post_id, sort);
            });
        },
        loadCommenter: function(dom){
            var email = $._cache.get('email');
            var author = $._cache.get('author');
            if(email != undefined && author != undefined){
                $(dom).find('input[name=from_email]').val(email);
                $(dom).find('input[name=from_author]').val(author);
            }else{
                $(dom).find('input[name=from_email]').val('');
                $(dom).find('input[name=from_author]').val('');
            }
        },
        validate: function(el){
            var self = this;
            //验证邮箱
            var pat = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            var email = $.trim($(el).find('input[name=from_email]').val());
            var from_author = $.trim($(el).find('input[name=from_author]').val());
            var comment = $.trim($(el).find('textarea[name=comment]').val());
            if(email == '' || !email.match(pat)){
                alert('请填写正确邮箱');
                return false;
            }
            if(from_author == '' ){
                alert('请填写您的昵称');
                return false;
            }
            if(comment == '' ){
                alert('请填写评论内容');
                return false;
            }
            if($._str_len(comment) > 1000){
                alert('评论内容超过字数限制');
                return false;
            }
            $._cache.set('author', from_author, self.params.expire);
            $._cache.set('email', email, self.params.expire);
            return true;
        },
        publish: function(dom){
            var self = this;
            if(!self.validate('#publish_form')){
                return false;
            };
            var param = $._get_form_json(self.dom.pform);
            var extend = {
                action : 'add_comment'
            };
            if($._check_form(self.dom.pform)){
                $._ajax(self.params.url, $.extend({}, param, extend), 'POST', 'JSON', function(json){
                    if(json.code > 0){
                        $(self.dom.pform)._clear_form(false);
                        self.updateCommentNum(1);
                        self.loadCommenter('#publish_form');
                        //$("#comment-1014334").find('.js-vote-up').after(self.tpl.template_modal({}));
                        $(".js-comments-list").append(self.tpl.template_comment($.extend({}, param, json.ret)));
                        //$("#reply-content-1014329").append(self.tpl.template_reply({}));
                        self.bind();
                    }else{
                        $._alert('提示', json.msg);
                    }
                });
            }else{

            }
        },
        reply: function(dom){
            var self = this;
            if(!self.validate('#reply_modal')){
                return false;
            };
            var to_pm = $(dom).data();
            var to_param = {
                post_id: to_pm.post_id,
                to_author: to_pm.author,
                to_email: to_pm.email,
                comment_id: to_pm.comment_id
            };
            var from_param = $._get_form_json("#reply_modal");
            var extend = {
                action : 'add_comment'
            };
            var param = $.extend({}, to_param, from_param, extend);
            $._ajax(self.params.url, param, 'POST', 'JSON', function(json){
                if(json.code > 0){
                    self.modal_hide();
                    var ul = $(dom).parents('.c-article-comments-item').find('ul.js-child-comments') || $(dom).parents('ul.js-child-comments');
                    ul.append(self.tpl.template_reply($.extend({}, param, json.ret)));
                    self.bind();
                }else{
                    $._alert('提示', json.msg);
                }
            });
        },
        vote: function(dom){
            _this = $(dom);

            var type = _this.hasClass('js-vote-up') ? 1 : 2;
            var comment_id = _this.attr('comment_id');
            var vistor = $._cache.get('VISTOR') || Math.random().toString(36).substr(2);
            var can_vote = $._cache.get(vistor + comment_id);
            if(can_vote == 1){
                alert('您已经投过票了，请勿重复投票！');
                return false;
            }

            var param = param || {};
            param = {
                action: 'vote',
                comment_id: comment_id,
                type: type
            };
            $._ajax(self.params.url, param, 'POST', 'JSON', function(json){
                if(json.code > 0){
                    var vote_num = parseInt(_this.text());
                    _this.text(vote_num + 1);
                    $._cache.set(vistor + comment_id, 1, 24*60*60);
                }else{
                    $._alert('提示', json.msg);
                }
            });
        },
        updateCommentNum: function(n){
            var num = parseInt($('#comment_number').text());
            $('#comment_number').text(num + n);
        },
        modal_hide: function(){
            $("#reply_modal")._clear_form(true);
            $("#reply_modal").hide();

        },
        modal_show: function(){
            $("#reply_modal")._clear_form(true);
            $("#reply_modal").show();
        },
    };

    var template = function(){};
    template.prototype = {
        template_modal: function(param){
            var to_email = param.email || '';
            var to_author = param.author || '';
            var post_id = param.post_id || 0;
            var comment_parent = param.comment_id || 0;
            var html =
                '<form id="reply_modal" class="c-article-comments-form is-unauthenticated js-article-comments-post-form c-article-comments-form--reply" data-replied="@'+ to_author +' ">'+
                '    <div class="c-article-comments-form__headline">回复'+
                '        <button type="button" class="c-article-comments-form__close js-close-reply-form"></button>'+
                '    </div>'+
                '    <input class="c-article-comments-form__input c-article-comments-form__user" type="email" name="email" placeholder="你的邮箱*" required="">'+
                '    <input class="c-article-comments-form__input c-article-comments-form__user" type="text" name="author" placeholder="你的昵称*" required="">'+
                '    <div class="c-article-comments-form__textarea ">'+
                '        <textarea class="c-article-comments-form__input c-article-comments-form__input--textarea" name="comment" placeholder="你有什么看法呢"></textarea>'+
                '    </div>'+
                '    <label class="c-article-comments-form__notifier" for="comment-email-notifier">'+
                '    <input type="checkbox" id="comment-email-notifier">回复邮件通知</label>'+
                '    <input type="hidden" name="comment_post_ID" value="'+ post_id +'" id="comment_post_ID">'+
                '    <input type="hidden" name="comment_parent" id="comment_parent" value="'+ comment_parent +'">'+
                '    <input type="hidden" name="post_id" value="'+ post_id +'">'+
                '    <input type="hidden" name="cmt_hidden_js" value="oh">'+
                '    <button type="button" id="reply_modal_submit" class="c-article-comments-form__submit js-submit-comment">回复评论</button>'+
                '</form>';
            return html;
        },
        template_comment: function(param){
            var email = param.from_email || '';
            var author = param.from_author || '';
            var post_id = param.post_id || 0;
            var comment_id = param.comment_id || 0;
            var avarta = param.avarta || '';
            var content = param.content || '';
            var vote_up = param.vote_up || 0;
            var vote_down = param.vote_down || 0;
            var publish_time = param.publish_time || '';
            var html =
                '<li id="comment-'+ comment_id +'" class="c-article-comments-item">'+
                '    <img class="c-article-comments-item__avatar" src="'+ avarta +'" alt="'+ author +'">'+
                '    <div id="comment-cont-'+ comment_id +'" class="c-article-comments-item__info  js-single-comment" data-comment-username="'+ author +'" data-comment-id="'+ comment_id +'">'+
                '        <span class="c-article-comments-item__name">'+ author +'</span>'+
                '        <span class="c-article-comments-item__meta">'+ publish_time +'</span>'+
                '        <span class="c-article-comments-item__hint js-show-comment">*评分过低，点击显示隐藏评论*</span>'+
                '        <div class="c-article-comments-item__content"><p>'+ content +'</p></div>'+
                '        <button class="c-article-comments-item__reply js-reply-comment" data-post_id="'+ post_id +'" data-author="'+ author +'" data-email="'+ email +'" data-comment_id="'+ comment_id +'">回复</button>'+
                '        <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down" comment_id="'+ comment_id +'">'+ vote_down +'</button>'+
                '        <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up" comment_id="'+ comment_id +'">'+ vote_up +'</button>'+
                '        </div>'+
                '        <ul id="reply-content-'+ comment_id +'" class="c-article-comments-replies c-article-comments-item__info js-child-comments">'+
                '        </ul>'+
                '   </li>';
            return html;
        },
        template_reply: function(param){
            var from_email = param.from_email || '';
            var from_author = param.from_author || '';
            var to_email = param.to_email || '';
            var to_author = param.to_author || '';
            var post_id = param.post_id || 0;
            var comment_id = param.comment_id || 0;
            var avarta = param.avarta || '';
            var content = param.content || '';
            var vote_up = param.vote_up || 0;
            var vote_down = param.vote_down || 0;
            var publish_time = param.publish_time || '';
            var html =
                '<li id="comment-'+ comment_id +'" class="c-article-comments-replies__item  js-single-comment" data-comment-username="'+ from_author +'" data-comment-id="'+ comment_id +'">'+
                '    <div id="comment-cont-'+ comment_id +'" class="c-article-comments-replies__item__wrapper reply_item_li">'+
                '           <span class="c-article-comments-item__name">'+
                '           '+ from_author +': <a class="comment-at" href="#comment-'+ comment_id +'" "="">@'+ to_author +'</a></span>'+
                '           <span class="c-article-comments-item__meta">'+ publish_time +'</span>'+
                '           <div class="c-article-comments-item__hint c-article-comments-item__hint--secondary js-show-comment">'+
                '               <span>评分过低，点击显示隐藏评论</span>'+
                '           </div>'+
                '           <div class="c-article-comments-item__content">'+
                '               <p>'+ content +'</p>'+
                '           </div>'+
                '           <button class="c-article-comments-item__reply c-article-comments-replies__reply js-reply-comment" data-post_id="'+ post_id +'" data-author="'+ from_author +'" data-email="'+ from_email +'" data-comment_id="'+ comment_id +'">回复</button>'+
                '           <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down" comment_id="'+ comment_id +'">'+ vote_down +'</button>'+
                '           <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up" comment_id="'+ comment_id +'">'+ vote_up +'</button>'+
                '       </div>'+
                '   </li>';
            return html;
        }
    };
    (new comment).run();
})(jQuery, rcGlobal)