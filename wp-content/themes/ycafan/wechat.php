<?php
/**
 * Template Name: 微信
 **/

get_header();
?>
<div class="weixin-caontainer-bg">
    <ol class="weixin-container">
        <li class="weixin-item">
            <img class="app-logo"
                 src="<?php bloginfo('template_url'); ?>/images/wechat-logo.jpg">

            <div class="app-name">少年中国评论</div>
            <div class="app-weixin-code">公众号：少年中国评论</div>
            <img class="app-qrcode-image"
                 src="<?php bloginfo('template_url'); ?>/images/wechat.jpg">

            <div class="app-slogan">面对现实，忠于理想</div>
        </li>
<!--        <li class="weixin-item">-->
<!--            <img class="app-logo"-->
<!--                 src="http://ifanr-cdn.b0.upaiyun.com/wp-content/themes/doge/static/images/app-qrcodes/appso.jpg">-->
<!---->
<!--            <div class="app-name">AppSolution</div>-->
<!--            <div class="app-weixin-code">公众号：appsolution</div>-->
<!--            <img class="app-qrcode-image"-->
<!--                 src="http://ifanr-cdn.b0.upaiyun.com/wp-content/themes/doge/static/images/app-qrcodes/appsoQR.jpg">-->
<!---->
<!--            <div class="app-slogan">你唯一需要的数字生活解决方案</div>-->
<!--        </li>-->
    </ol>
</div>

<div class="u-clearfix"></div>
<!-- 底部 -->
<?php get_footer(); ?>