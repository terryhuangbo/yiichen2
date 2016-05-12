(function ($, rcGlobal) {
    var comment =  function(){
        _this = this;

    };
    comment.prototype = {
        run: function(){
            this.bind();
        },
        bind: function(){
            $('.js-submit-comment').on('click', function(){
                _this.publish(this)
            });
            $('.js-reply-comment').on('click', function(){
                _this.reply(this)
            });
        },
        publish: function(dom){
            var p_f = '#publish_form';
            var param = $._get_form_json(p_f);
            param.action = 'add_comment';
            var extend = {
                action : 'add_comment',
            };
            if($._check_form('p_f')){
                var url = rcGlobal.wpAjaxUrl + "/wp-admin/admin-ajax.php?timestamp=" + new Date().getTime();
                $._ajax(url, $.extend({}, param, extend), 'POST', 'JSON', function(json){
                    if(json.code > 0){
                        $._alert('提示', '添加成功');
                        $(p_f)._clear_form(false);
                    }else{
                        $._alert('提示', '添加失败');
                    }
                });
            }else{

            }
            console.log(param);
        },
        reply: function(dom){
            alert(dom);
        },



    };



    (new comment).run();
})(jQuery, rcGlobal)