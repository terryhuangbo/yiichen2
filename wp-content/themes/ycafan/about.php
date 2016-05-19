<?php
/**
 * Template Name: 关于我们
 **/

get_header();
$fields = get_fields($post->ID);
the_post();

?>

<div id="content-outer" class="content-outer clearfix fix-header-height">
<div id="content" class="content clearfix">

    <section class="ifr-about-container" id="ifr-page-our-team">

    <section class="ifr-about-jumbotron"
             style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about_bg_1.jpg')">
        <h1 class="ifr-about-no-display">关于ifanr 爱范儿</h1>
        <img class="ifr-about-logo"
             src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about_title.png" alt="ifanr">
        <img class="ifr-about-description-main"
             src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/about/about_title_2.png">

        <div class="ifr-about-description-sub-container">
            <p class="ifr-about-description-sub">
                国内聚焦创新及消费科技领域的线上第一媒体，
            </p>

            <p class="ifr-about-description-sub">
                通过消费市场切入点影响创业社区，在垂直细分领域建立立体化优势，形成强势的
            </p>

            <p class="ifr-about-description-sub">
                创业及消费媒体影响力。
            </p>
        </div>
    </section>


    <section class="ifr-about-products">
        <h2 class="ifr-about-title ifr-about-products-title">我们的产品 / Our Products</h2>

        <div class="ifr-about-decoration">
            <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
        </div>
        <ul class="ifr-about-products-btn-group">
            <li class="ifr-about-products-btn ifr-about-products-btn-ifanr ifr-about-products-btn-active"
                data-product-id="ifanr">
                <div class=""
                <b>爱范儿</b>

                <div class="ifr-about-qr-code-background">
                    <img src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/ifanrqrcode.jpg">

                    <p>关注微信公众号</p>
                </div>
            </li>
            <li class="ifr-about-products-btn ifr-about-products-btn-appsolution" data-product-id="appso">
                <b>AppSolution</b>

                <div class="ifr-about-qr-code-background">
                    <img src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/appsoqrcode.jpg">

                    <p>关注微信公众号</p>
                </div>
            </li>
            <li class="ifr-about-products-btn ifr-about-products-btn-coolbuy" data-product-id="coolbuy">
                <b>玩物志</b>

                <div class="ifr-about-qr-code-background">
                    <img
                        src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/coolbuyqrcode.jpg">

                    <p>关注微信公众号</p>
                </div>
            </li>
            <li class="ifr-about-products-btn ifr-about-products-btn-mindstore" data-product-id="mindstore">
                <b>MindStore</b>

                <div class="ifr-about-qr-code-background">
                    <img
                        src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/mindstoreqrcode.jpg">

                    <p>关注微信公众号</p>
                </div>
            </li>
            <li class="ifr-about-products-btn ifr-about-products-btn-socialbase" data-product-id="socialbase">
                <b>SocialBase</b>

                <div class="ifr-about-qr-code-background">
                    <img
                        src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/socialbaseqrcode.jpg">

                    <p>关注微信公众号</p>
                </div>
            </li>
        </ul>
        <div class="ifr-about-products-intro-container">
            <div class="ifr-about-products-intro" id="intro-ifanr"
                 style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/about/ifanr.png')">
                <p class="ifr-about-products-intro-description">
                    爱范儿连接全球创新者及消费者，跨界技术、文化、消费及创新，致力消费科技领域的产业评论、产品报道及社群连接，创造高品质的消费乐趣。</p>
            </div>
            <div class="ifr-about-products-intro ifr-about-no-display" id="intro-appso"
                 style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/about/appsolution.png')">
                <p class="ifr-about-products-intro-description">AppSolution 是 AppSo
                    旗下专业服务，提供最好的「移动互联网+」服务，连接设计师、开发者及品牌资源，聚焦移动开发领域高品质的整合营销及孵化服务。</p>
            </div>
            <div class="ifr-about-products-intro ifr-about-no-display" id="intro-coolbuy"
                 style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/about/coolbuy.png')">
                <p class="ifr-about-products-intro-description">玩物志，就是让你乱花钱。关注这个品牌的人会获得两样东西，一个是懂得了生活的腔调，另一个是养成了乱花钱的坏习惯。从
                    2013 年发展至今，蜕变成拥有海量精准高端粉丝，集合腔调资讯媒体、轻奢电商及浪手玩家的品味平台。有人说，装逼装不好，玩物看得少。</p>
            </div>
            <div class="ifr-about-products-intro ifr-about-products-intro-smallbackground ifr-about-no-display"
                 id="intro-mindstore"
                 style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/about/mindstore.png')">
                <p class="ifr-about-products-intro-description">MindStore
                    是爱范儿重点打造的发现新酷产品的社区，由产品爱好者提交、分享优秀的新产品，并进行集中讨论。MindStore 也是一个与优秀创业团队进行线上活动，实现粉丝互动，品牌宣传的高质量渠道。</p>
            </div>
            <div class="ifr-about-products-intro ifr-about-no-display" id="intro-socialbase"
                 style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/about/socialbase.png')">
                <p class="ifr-about-products-intro-description">SocialBase 是国内最先进的基于微信公众账号的 SocialCRM
                    管理平台，是微信官方认证的第三方合作伙伴。</p>
            </div>
        </div>
    </section>


    <section class="ifr-about-partners">
        <h2 class="ifr-about-title ifr-about-partners-title">合作伙伴 / Partners</h2>

        <div class="ifr-about-decoration">
            <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
        </div>
        <div class="ifr-about-partners-description">
            <p>
                爱范儿的媒体矩阵覆盖 TMT 全产业链，
            </p>

            <p>
                致力消费科技领域的产业评论、产品报道及社群连接，服务于消费科技产品的创业及创新，
            </p>

            <p>
                为其提供产品宣传推广、销售渠道及投融资支持等服务。
            </p>
        </div>
        <div class="ifr-about-partners-logos-container">
            <div class="ifr-about-row-5 ifr-about-logos-row">
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/qualcomm.png"
                         alt="QUALCOMM">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/intel.png"
                         alt="英特尔">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/samsung.png"
                         alt="三星">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/xiaomi.png"
                         alt="小米">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/smartisan.png"
                         alt="锤子">
                </div>
            </div>
            <div class="ifr-about-row-5 ifr-about-logos-row">
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/microsoft.png"
                         alt="微软">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/kindle.png"
                         alt="Kindle">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/meizu.png"
                         alt="魅族">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/weixin.png"
                         alt="微信">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/lenovo.png"
                         alt="联想">
                </div>
            </div>
            <div class="ifr-about-row-5 ifr-about-logos-row">
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/huawei.png"
                         alt="华为">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/htc.png"
                         alt="HTC">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/jeep.png"
                         alt="Jeep">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/ford.png"
                         alt="福特">
                </div>
                <div class="ifr-about-partner-logo ifr-about-col">
                    <img class="ifr-about-partner-logo-img"
                         src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/partner-logo/volvo.png"
                         alt="沃尔沃">
                </div>
            </div>
        </div>
    </section>


    <section class="ifr-about-contact"
             style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about_bg_2.jpg')">
        <h2 class="ifr-about-title ifr-about-contact-title">联系我们 / Contact Us</h2>

        <div class="ifr-about-contact-detail-container">
            <div class="ifr-about-contact-social-network">
                <h3 class="ifr-about-contact-title">关注我们</h3>
                <table>
                    <tr>
                        <td>微信号</td>
                        <td class="ifr-about-sign">:</td>
                        <td>ifanr</td>
                    </tr>

                    <tr>
                        <td>微博</td>
                        <td class="ifr-about-sign">:</td>
                        <td><a class="ifr-about-link" href="http://weibo.com/ifanr">@爱范儿</a></td>
                    </tr>

                    <tr>
                        <td>Twitter</td>
                        <td class="ifr-about-sign">:</td>
                        <td><a class="ifr-about-link" href="https://twitter.com/ifanr">@ifanr</a></td>
                    </tr>

                    <tr>
                        <td>邮箱</td>
                        <td class="ifr-about-sign">:</td>
                        <td><a class="ifr-about-link" href="mailto:info@ifanr.com">info@ifanr.com</a></td>
                    </tr>
                </table>
            </div>
            <div class="ifr-about-contact-location">
                <h3 class="ifr-about-contact-title">我们在这里</h3>
                <table>
                    <tr>
                        <td>广州地址</td>
                        <td class="ifr-about-sign">:</td>
                        <td>海珠区新港中路 397 号 TIT 创意园品牌街 5 号</td>
                    </tr>
                    <tr>
                        <td>北京地址</td>
                        <td class="ifr-about-sign">:</td>
                        <td>北京市朝阳区工体北路 8 号院三里屯 SOHO</td>
                    </tr>
                </table>
                <a class="ifr-about-contact-link ifr-about-link" href="mailto:info@ifanr.com">商务合作</a>
                <a class="ifr-about-contact-link ifr-about-link" href="http://www.ifanr.com/about/contribute">寻求报道</a>
            </div>
            <div class="ifr-about-decoration">
                <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
            </div>
        </div>
    </section>


    <section class="ifr-about-team">
    <h2 class="ifr-about-title ifr-about-team-title">我们团队 / Our Team</h2>

    <div class="ifr-about-decoration">
        <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
    </div>
    <div class="ifr-about-team-description">
        <p>
            我们是一个深思熟虑、紧密团结的团队，致力于实现雄心壮志的构想，
        </p>

        <p>
            我们的团队主要由编辑、设计、创意、开发组成，我们热爱我们现在所做的，并且我们努力把最好的资讯
        </p>

        <p>
            推送给热爱我们的人
        </p>
    </div>

    <div class="ifr-about-team-members-container">
    <div class="ifr-about-team-members-container-inner">

    <div class="ifr-about-team-members-row">

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/chen-hao.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>陈昊</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/chen-hao.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>陈昊</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>视频总监</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    Less is more
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/chen-hao-jie.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>陈浩杰</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/chen-hao-jie.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>陈浩杰</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>视频编导</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    坚持运动，为了不成为公司的又一个胖子。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/chen-yi-bin.png">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>陈一斌</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/chen-yi-bin.png">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>陈一斌</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>高级编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    创业生态负责人。于不可能处发现可能。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/gao-chen.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>高晨</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/gao-chen.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>高晨</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>高级编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    高级编辑、视频策划兼御用主播，码字、跳脱、拍片儿、奇思妙想，不知道接下来还会折腾什么。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/huang-mei-jing.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>黄美菁</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/huang-mei-jing.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>黄美菁</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>高级编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    文艺的理性主义者。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/he-zong-cheng.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>何宗丞</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/he-zong-cheng.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>何宗丞</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>主编</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    热爱 News Feed 与 Menu，正在努力让每天处理的信息量超过脂肪摄入量。
                </div>
            </div>
        </div>

    </div>

    <div class="ifr-about-team-members-row">

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/li-gen.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>李庚</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/li-gen.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>李庚</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>高级编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    一名冷静的科技旁观者。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/li-mou.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>李谋</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/li-mou.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>李谋</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    不努力健身的码字民工不是能拍出好照片的客村金城武。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/liang-meng-lin.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>梁梦麟</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/liang-meng-lin.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>梁梦麟</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    一枚热爱文字、快门成瘾的数码控。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/liu-xue-wen.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>刘学文</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/liu-xue-wen.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>刘学文</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>常务副主编</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    不知名段子手，喜欢看烂片和吐槽，现实中其实是个人畜无害的人。因萌和反应迟钝被同事黑得最多。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/mai-wei-qi.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>麦玮琪</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/mai-wei-qi.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>麦玮琪</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>运营编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    小众数码产品爱好者，关注产品背后的商业逻辑，反对“苹果、Google 至上”的定论。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/ou-di.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>欧狄</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/ou-di.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>欧狄</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    阳光总在风雨后，然而北京霾太大。
                </div>
            </div>
        </div>

    </div>

    <div class="ifr-about-team-members-row">

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/qiu-lei.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>邱雷</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/qiu-lei.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>邱雷</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>高级编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    有一种很能吃的气质。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/shi-yin-zhi.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>施颖芝</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/shi-yin-zhi.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>施颖芝</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>运营编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    一直在磨练一个大幅提升生活幸福感的技能：快速分辨一件事是否值得在意。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/wang-fei.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>王飞</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/wang-fei.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>王飞</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>高级编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    出去开会喜欢坐在第一排，工作人员经常会跑过来翻白眼：媒体朋友请你坐到媒体区好么？
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/wu-yin.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>吴垠</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/wu-yin.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>吴垠</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>高级编辑</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    写点好玩的。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/yang-jing-xin.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>杨婧鑫</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/yang-jing-xin.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>杨婧鑫</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>主编助理</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    北京大管家，经常在团队深夜奋战之时，裸着大长腿跑去工体给编辑们批发煎饼果子中的爱马仕。
                </div>
            </div>
        </div>

        <div class="ifr-about-team-member">
            <img class="ifr-about-team-member-avatar"
                 src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/zhuang-wei-hong.jpg">

            <div class="ifr-about-team-member-text ifr-about-team-member-name">
                <b>庄伟宏</b>
            </div>
            <div class="ifr-about-team-member-info">
                <img class="ifr-about-team-member-avatar"
                     src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/team/zhuang-wei-hong.jpg">

                <div class="ifr-about-team-member-text ifr-about-team-member-name">
                    <b>庄伟宏</b>
                </div>
                <div class="line"></div>
                <div class="ifr-about-team-member-text ifr-about-team-member-title">
                    <b>主笔</b>
                </div>
                <div class="ifr-about-team-member-text ifr-about-team-member-details">
                    Odin 是個傻瓜，因為只有傻瓜才會花時間寫文章。
                </div>
            </div>
        </div>

    </div>

    </div>
    </div>
    </section>


    <section class="ifr-about-join">
        <h2 class="ifr-about-title ifr-about-join-title">加入我们 / Join Us</h2>

        <div class="ifr-about-join-detail-container">
            <div class="ifr-about-row-3">
                <div class="ifr-about-col">
                    <div class="ifr-about-join-img"
                         style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about-office-1.jpg')"></div>
                </div>
                <div class="ifr-about-col">
                    <div class="ifr-about-join-main">
                        <p>我们正在快速成长</p>

                        <p>希望你能加入我们</p>

                        <div class="ifr-about-decoration-small">
                            <i class="ifanr2015 ifanr2015-anonymous-iconfont ifr-about-decoration-icon"></i>
                        </div>
                        <a class="ifr-about-join-btn" href="http://www.lagou.com/gongsi/j25623.html">了解职位</a>
                    </div>
                </div>
                <div class="ifr-about-col">
                    <div class="ifr-about-join-img"
                         style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about-office-2.jpg')"></div>
                </div>
            </div>
            <div class="ifr-about-row-2">
                <div class="ifr-about-col">
                    <div class="ifr-about-join-img"
                         style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about-office-3.png')"></div>
                </div>
                <div class="ifr-about-col">
                    <div class="ifr-about-join-img"
                         style="background-image: url('http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/about-office-4.png')"></div>
                </div>
            </div>
        </div>
    </section>

    </section>

</div>
<!--end content-->
</div><!--end content-outer -->

<div class="hide">
  </div>

<!-- 底部 -->
<?php get_footer(); ?>