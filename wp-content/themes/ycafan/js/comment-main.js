(function ($, rcGlobal) {
    var comment =  function(){
        self = this;
        self.params = {
            post_id: $('#publish_form').find('input[name=post_id]').val(),
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
            this.bind();
            this.load(self.params.post_id);
        },
        load: function(post_id){
            var self = this;
            $._ajax(self.params.url, {post_id: post_id, action: 'load_comments'}, 'POST', 'JSON', function(json){
                if(json.code > 0){
                    var tree = json.ret.tree || [];
                    var list = json.ret.list || [];
                    var html = '';
                    $.each(tree, function(i, v){
                        html += self.tpl.template_comment(list[i]);
                        $(".js-comments-list").html('');
                        $(html).appendTo(".js-comments-list");
                        var rp_html = '';
                        if(v.length > 0){
                            $.each(v, function(j, n){
                                rp_html += self.tpl.template_reply(list[n])
                            });
                            setTimeout(function(){
                                $("#reply-content-" + list[i].comment_id).html(rp_html);
                            }, 0);
                        }
                    });
                    setTimeout(function(){
                        self.bind();
                    }, 0);
                }else{
                }
            });
        },
        bind: function(){
            var self = this;
            $('.js-submit-comment').on('click', function(){
                self.publish(this);
            });
            $('.js-reply-comment').off('click').on('click', function(){
                var _this = this;
                self.modal_show();
                $('.js-reply-comment').show();
                $(_this).hide();

                $("#reply_modal").appendTo("#comment-cont-"+ $(_this).data().comment_id +"").show();
                $("#reply_modal")._clear_form(true);
                $("#reply_modal_submit").off('click').on('click', function(){
                    self.reply(_this);
                });
                $("#reply_modal_close").off('click').on('click', function(){
                    self.modal_show();
                    $('.js-reply-comment').show();
                });

            });
        },
        publish: function(dom){
            var self = this;
            var param = $._get_form_json(self.dom.pform);
            var extend = {
                action : 'add_comment'
            };
            if($._check_form(self.dom.pform)){
                $._ajax(self.params.url, $.extend({}, param, extend), 'POST', 'JSON', function(json){
                    if(json.code > 0){
                        $(self.dom.pform)._clear_form(false);

                        //$("#comment-1014334").find('.js-vote-up').after(self.tpl.template_modal({}));
                        $(".js-comments-list").prepend(self.tpl.template_comment($.extend({}, param, json.ret)));
                        //$("#reply-content-1014329").append(self.tpl.template_reply({}));
                        self.bind();
                    }else{
                        $._alert('提示', '添加失败');
                    }
                });
            }else{

            }
        },
        reply: function(dom){
            var self = this;
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
                    $._alert('提示', '添加失败');
                }
            });
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
                '        <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">'+ vote_down +'</button>'+
                '        <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">'+ vote_up +'</button>'+
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
                '           <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">'+ vote_down +'</button>'+
                '           <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">'+ vote_up +'</button>'+
                '       </div>'+
                '   </li>';
            return html;
        }
    };
    (new comment).run();
})(jQuery, rcGlobal)