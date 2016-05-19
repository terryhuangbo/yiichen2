<?php
/**
 * Template Name: 关于我们
 **/

get_header();
$fields = get_fields($post->ID);
the_post();

?>

<div id="container" class="container">
    <div id="container-inner" class="container-inner clearfix">
    <div id="content-outer" class="content-outer clearfix fix-header-height">
    <div id="content" class="content clearfix">
    <section class="ifr-about-container" id="ifr-page-our-team">
        <section class="ifr-about-jumbotron" style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about_bg_1.jpg')">
            <h1 class="ifr-about-no-display">关于少年中国学会</h1>
            <img class="ifr-about-logo" src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about_title.png" alt="ifanr">
            <img class="ifr-about-description-main" src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/about/about_title_2.png">
            <div class="ifr-about-description-sub-container">
                <p class="ifr-about-description-sub">和那些醒着的要进步的人们一道，向着光明的地方行进。</p>
                <p class="ifr-about-description-sub">让我们面对现实，让我们忠于理想</p>
        </section>
        <section class="ifr-about-products">
            <h2 class="ifr-about-title ifr-about-products-title">公众号 / Wechat</h2>
            <div class="ifr-about-decoration">
                <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
            </div>
            <ul class="ifr-about-products-btn-group">
                <li class="ifr-about-products-btn ifr-about-products-btn-ifanr ifr-about-products-btn-active" data-product-id="ifanr">
                    <b>少年中国评论</b>
                    <div class="ifr-about-qr-code-background">
                        <img width="150px" src="<?php bloginfo('template_url'); ?>/images/wechat.jpg">
                        <p>面对现实，忠于理想</p>
                    </div>
                </li>
                <li class="ifr-about-products-btn ifr-about-products-btn-appsolution" data-product-id="appso">
                    <b>保马</b>
                    <div class="ifr-about-qr-code-background">
                        <img width="150px" src="<?php bloginfo('template_url'); ?>/images/baoma-wechat.jpg">
                        <p>保卫马克思</p>
                    </div>
                </li>
                <li class="ifr-about-products-btn ifr-about-products-btn-appsolution" data-product-id="appso">
                    <b>破土</b>
                    <div class="ifr-about-qr-code-background">
                        <img width="150px" src="<?php bloginfo('template_url'); ?>/images/potu-wechat.png">
                        <p>面对现实，忠于理想</p>
                    </div>
                </li>
                <li class="ifr-about-products-btn ifr-about-products-btn-appsolution" data-product-id="appso">
                    <b>新汉之声</b>
                    <div class="ifr-about-qr-code-background">
                        <img width="150px" src="<?php bloginfo('template_url'); ?>/images/xinhan-wechat.jpg">
                        <p>面对现实，忠于理想</p>
                    </div>
                </li>
            </ul>
    <!--        <div class="ifr-about-products-intro-container">-->
    <!--            <div class="ifr-about-products-intro" id="intro-ifanr" style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/about/ifanr.png')">-->
    <!--                <p class="ifr-about-products-intro-description">爱范儿连接全球创新者及消费者，跨界技术、文化、消费及创新，致力消费科技领域的产业评论、产品报道及社群连接，创造高品质的消费乐趣。</p>-->
    <!--            </div>-->
    <!---->
    <!--        </div>-->
        </section>

        <section class="ifr-about-team" >
            <h2 class="ifr-about-title ifr-about-team-title">网站简介 / Introduction</h2>
            <div class="ifr-about-decoration">
                <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
            </div>
            <div class="ifr-about-team-description" style="width: 1000px;text-align: left;margin:auto;">
                <p><?php echo str_repeat('&nbsp;', 8) ?>
                    少年中国评论，一个简单的文摘系统。毛主席说世界是我们的，等待着我们去创造。但是为着创造的目的，我们必须首先认识这个世界，也就是说，必须先研究社会。鉴于目前教育的巨大失败，事实上研究必须从一些最基本的事实开始。但不要紧，因为青年人拥有的最宝贵的财富就是时间。只要我们努力，我们都能够成为“理论家”。对于初学者而言，除了自身的努力之外，有良师从旁指导也是非常重要，所以我们热切期望那些对社会有深入思考的朋友能到这里来留下他们的智慧，以飨后来之人。同时我们会提供大量的优秀文章，以节约大家从一堆文字垃圾中掏取资料的时间。
                </p>
            </div>
        </section>

        <section class="ifr-about-team" >
            <h2 class="ifr-about-title ifr-about-team-title">愿景 / Prospect</h2>
            <div class="ifr-about-decoration">
                <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
            </div>
            <div class="ifr-about-team-description" style="width: 1000px;text-align: center;margin:auto;">
                <p>少年中国的愿景是：和那些醒着的要进步的人们一道，向着光明的地方行进。</p>
            </div>
        </section>

        <section class="ifr-about-team" id="joinus">
            <h2 class="ifr-about-title ifr-about-team-title">加入我们 / Join Us</h2>
            <div class="ifr-about-decoration">
                <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
            </div>
            <div class="ifr-about-team-description" style="width: 1000px;text-align: center;margin:auto;">
                <p>投稿、合作、咨询、建议</p>
                <p>请发信至： <a href="mailto:contact@youngchina.org" target="_blank">contact@youngchina.org</a> </p>
                <p>新浪微博： <a href="http://weibo.com/youngchina" target="_blank">http://weibo.com/youngchina</a></p>
            </div>
        </section>

        <section class="ifr-about-contact" style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about_bg_2.jpg')">
            <h2 class="ifr-about-title ifr-about-contact-title">联系我们 / Contact Us</h2>
            <div class="ifr-about-contact-detail-container">
                <div class="ifr-about-contact-social-network">
                    <h3 class="ifr-about-contact-title">关注我们</h3>
                    <table>
                        <tr>
                            <td>微信号</td>
                            <td class="ifr-about-sign">:</td>
                            <td>@少年中国学会</td>
                        </tr>
                        <tr>
                            <td>微博</td>
                            <td class="ifr-about-sign">:</td>
                            <td>
                                <a class="ifr-about-link" href="http://weibo.com/youngchina" target="_blank">@少年中国学会</a>
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="ifr-about-contact-location">
                    <h3 class="ifr-about-contact-title">联系我们 / Contact us</h3>
                    <table>
                        <tr>
                            <td>邮箱</td>
                            <td class="ifr-about-sign">:</td>
                            <td>
                                <a class="ifr-about-link" href="contact@youngchina.org">contact@youngchina.org</a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="ifr-about-decoration">
                    <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
                </div>
            </div>
        </section>

        <section class="ifr-about-team" >
            <h2 class="ifr-about-title ifr-about-team-title">版权声明 / Copyright</h2>
            <div class="ifr-about-decoration">
                <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
            </div>
            <div class="ifr-about-team-description" style="width: 1000px;text-align: left;margin:auto;">
                <p><?php echo str_repeat('&nbsp;', 8) ?>
                    我们采用 知识共享Attribution 3.0 Unported License 版权协议。这意味着您可以自由：复制、发行、展览、表演、放映、广播或通过信息网络传播，创作演绎本站作品，惟需注明本站链接。
                    本网站属非谋利性质，旨在传播马克思主义，和诸位青年一道成长。凡刊登的著作文献文章侵犯了作者、译者或版权持有人权益的，可来信联系我站删除。阅读我站文章时，如发现文字错漏或疑点，敬请读者告知我站，以便我们更正。深表感谢！
                </p>
            </div>
        </section>

        <section class="ifr-about-team" >

        </section>

    </section>
    </div>
<!--end content-->
</div>
<!--end content-outer -->
<div class="hide"></div>


<!-- 底部 -->
<?php get_footer(); ?>