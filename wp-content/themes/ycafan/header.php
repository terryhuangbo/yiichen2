<?php
date_default_timezone_set('Asia/Shanghai');
$Tool = new Tools();
$Cache = new Cache();
?>
<!DOCTYPE html>
<html xmlns:wb="http://open.weibo.com/wb">
<head>
    <meta charset="utf-8">
    <script type="text/javascript"></script>
    <meta property="og:site_name" content="少年中国评论"/>
    <meta property="og:url" content="http://www.ifanr.com"/>
    <title>少年中国评论 · 面对现实，忠于理想</title>
    <meta name="keywords" content="少年中国学会,少年中国,马克思主义,阿尔都塞,葛兰西,YCA,邵钟萍,杨钗娜"/>
    <meta name="description" content="少年中国学会,少年中国,马克思主义,阿尔都塞,葛兰西,YCA,邵钟萍,杨钗娜"/>

    <!-- BEGIN Metadata added by Add-Meta-Tags WordPress plugin -->
    <link rel='stylesheet' href='<?php bloginfo('template_url'); ?>/css/main.desktop.auto_create.css' type='text/css' />
    <link rel='stylesheet' href='<?php bloginfo('template_url'); ?>/css/buzz.auto_create.css' type='text/css'/>
    <link rel='stylesheet' href='<?php bloginfo('template_url'); ?>/css/create.css' type='text/css'/>
    <link rel='stylesheet' href='<?php bloginfo('template_url'); ?>/css/desktop.css' type='text/css' />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://www.ifanr.com/xmlrpc.php?rsd"/>
    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="xml/wlwmanifest.xml"/>
    <script type="text/javascript">
        var rcGlobal = {
            infoTemp: "%REVIEWER% 评论 %POST%",
            loadingText: "加载中...",
            noCommentsText: "No comments",
            newestText: "&laquo; 最新",
            newerText: "&laquo; 新一点",
            olderText: "旧一点 &raquo;",
            showContent: "",
            external: "1",
            avatarSize: "48",
            avatarPosition: "left",
            anonymous: "Anonymous",
            wpAjaxUrl: "<?php  bloginfo('url') ?>",
        };
    </script>
    <script type="text/javascript">
        /* Try to get out of frames! */
        if (window.top != window.self) {
            window.top.location = self.location.href
        }

        var ga = ga || function () {
                (ga.q = ga.q || []).push(arguments)
            };

        var ns = ns || {};
        var IFR = IFR || {};
        IFR.isMobile = 0;

        IFR.user = {};
        IFR.user.id = '';
        IFR.user.name = '';
        IFR.user.avatarUrl = '';

        // sso 用户中心 url 统一配置, 见 config
        ns.SSO_URL_MYACCOUNT = "";
        ns.SSO_URL_LOGIN = "";
        ns.SSO_URL_REGISTER = "";
        ns.SSO_URL_LOGOUT = "";

        ns.COMMENTER_EMAIL = 'commenter_email';
        ns.COMMENTER_NAME = 'commenter_name';

        IFR.api_url = "http://www.ifanr.com/api/v3.0/";
        IFR.theme_url = "http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0";
        IFR.blankImg_url = "http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static//images/grey.gif";
        IFR.apiNonce = {
            appkey: 'lI5287M8UyxBI98U2YKq',
            timestamp: '1457091133',
            sign: '9f8137583d662371139d8556e808f045'
        };
    </script>
    <!--[if lt IE 9]>
    <script src="<?php bloginfo('template_url'); ?>/js/html5.js" type="text/javascript"></script>
    <link rel="stylesheet"
          href="<?php bloginfo('template_url'); ?>/css/use-modern-browser.css"/>
    <![endif]-->
</head>

<body class="home blog">
<!-- [if lt IE9]>
<div class="use-modern-browser">
  <p>你正在使用低版本的 IE 浏览器，请升级 IE 浏览器或者通过 <a href="https://www.google.com/chrome/browser/desktop/index.html">Chrome</a>
     访问，以获得更好的阅读体验。</p>
</div>
<![endif] -->

<div id="container" class="container">
  <div id="container-inner" class="container-inner clearfix">


        <div id="header" class="header clearfix">
      <div class="header-inner">

        <!-- header-row -->
        <div class="header-row clearfix">
          <a class="logo js-logo" ga-track="event" ga-action="click" ga-event-category="logo" ga-event-label="Logo" href="<?php  bloginfo('url') ?>" title="少年中国评论">
            <img src="<?php bloginfo('template_url'); ?>/images/logo.png" alt="少年中国评论"/>
          </a>

          <div class="sns row js-sns">
            <a class="sns-item" target="_blank" href="<?php echo _get_page_url('wechat') ?>"><i class="ifanr2015 ifanr2015-weixin"></i></a>
            <a rel="nofollow" class="sns-item" target="_blank" href="http://weibo.com/youngchina"><i class="ifanr2015 ifanr2015-xinlangweibo"></i></a>
            <a rel="nofollow" class="sns-item" target="_blank" href="http://twitter.com/ifanr"><i class="ifanr2015 ifanr2015-twitter"></i></a>
            <a class="sns-item" target="_blank" href="http://www.ifanr.com/feed"><i class="ifanr2015 ifanr2015-rss"></i></a>
          </div>

          <div class="js-navbar-top-jiong-container navbar-top-jiong-container"></div>

        </div>
        <!-- end header-row -->

      </div>

      <!-- header-row -->
        <div class="header-row clearfix nav-fixed js-header js-nav-fixed">
          <div class="header-inner">
            <div class="nav">
              <ul class="nav-list">
                <li class="nav-item">
                  <a href="/">
                    <i class="ifanr2015 ifanr2015-home01 icon-home"></i>
                  </a>
                </li>
                <li class="nav-item js-nav-menu">
                  <a href="#menu">
                    <!-- <i class="ifanr2015 ifanr2015-menutou icon-font"></i> -->
                    MENU
                    <i class="ifanr2015 ifanr2015-jiantou icon-arrow-down"></i>
                  </a>
                </li>

                <li class="nav-item" cate="feature" data-count="4" data-action="featured">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="推荐" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=1028">
                    <!-- <i class="ifanr2015 ifanr2015-toutiao01 icon-font"></i> -->
                    推荐
                  </a>
                </li>
                <li class="nav-item" cate="younth" data-count="4" data-post-type="younth">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="青年之声" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=1106">
                    <!-- <i class="ifanr2015 ifanr2015-menuappso icon-font"></i> -->
                    青年之声
                  </a>
                </li>
                <li class="nav-item" cate="principle" data-count="4" data-post-type="principle">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="基本原理" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=3">
                    <!-- <i class="ifanr2015 ifanr2015-wanwuzhi icon-font"></i> -->
                    基本原理
                  </a>
                </li>
                <li class="nav-item" cate="principle" data-count="4" data-post-type="vision">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="理论视野" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=3">
                    <!-- <i class="ifanr2015 ifanr2015-wanwuzhi icon-font"></i> -->
                    理论视野
                  </a>
                </li>

                <li class="nav-item" cate="stream " data-count="4" data-post-type="stream">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="中流击水" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=9">
                    <!-- <i class="ifanr2015 ifanr2015-pingce icon-font"></i> -->
                    中流击水
                  </a>
                </li>
                <li class="nav-item" cate="international" data-count="4" data-post-type="international">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="国际观察" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=8">
                    <!-- <i class="ifanr2015 ifanr2015-pingce icon-font"></i> -->
                    国际观察
                  </a>
                </li>
                <li class="nav-item" cate="nowchina" data-count="4" data-post-type="nowchina">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="当代中国" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=5">
                    <!-- <i class="ifanr2015 ifanr2015-pingce icon-font"></i> -->
                    当代中国
                </a>
                </li>
                <li class="nav-item" cate="communist" data-count="4" data-post-type="communist">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="共运信息" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=6">
                    <!-- <i class="ifanr2015 ifanr2015-pingce icon-font"></i> -->
                    共运信息
                  </a>
                </li>
                <li class="nav-item" cate="history" data-count="4" data-post-type="history">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="史海钩沉" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=7">
                    <!-- <i class="ifanr2015 ifanr2015-pingce icon-font"></i> -->
                    史海钩沉
                  </a>
                </li>
                <li class="nav-item" cate="literature" data-count="4" data-post-type="literature">
                  <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="革命文艺" itemprop="url" class="product-item" href="<?php bloginfo('url') ?>/?cat=10">
                    <!-- <i class="ifanr2015 ifanr2015-pingce icon-font"></i> -->
                    革命文艺
                  </a>
                </li>
              </ul>
            </div>

            <div class="nav-user">
              <div class="nav-search js-nav-search" ga-track="event" ga-action="click" ga-event-category="button" ga-event-label="SearchButton" id="nav-search">
                <span id="search-button">
                  <i class="ifanr2015 ifanr2015-search icon-search"></i>
                </span>
              </div>

              <div class="js-login ifr-user-nav-menu hide">
                <div id="nav-user-button">
                  <div class="ifr-user-nav-menu">
                    <ul class="nav-user-subs ifr-user-dropdown-menu hide m-t-10" id="nav-user-subs">
                      <li class="sub-item"><a href="">个人中心</a></li>
                      <li class="sub-item"><a href="javascript:void(0);" class="js-logout">退出登录</a></li>
                    </ul>
                  </div>
                  <span class="user-name J_UserIdentity"></span>
                  <span class="ifanr2015 ifanr2015-xiala-small"></span>
                </div>
              </div>

              <!-- 未登录 -->
<!--              <div class="js-not-login not-login hide">-->
<!--                <a rel="nofollow" class="user-login" href="https://sso.ifanr.com/login/?next=http://www.ifanr.com">登录</a>-->
<!--                <a rel="nofollow" class="user-reg" href="https://sso.ifanr.com/register/?next=http://www.ifanr.com">注册</a>-->
<!--              </div>-->
            </div>
          </div>

          <!-- 栏目预览 -->
          <div class="items-preview js-items-preview js-slider">
            <span class="slider-arrow prev"><i class="ifanr2015 ifanr2015-shangyihua"></i></span>
            <span class="slider-arrow next"><i class="ifanr2015 ifanr2015-xiayihua"></i></span>
            <div class="header-inner items-flex" ></div>
          </div>
          <!-- 栏目预览 -->

          <!-- 导航 -->
          <div class="hide state-close ifr-nav-items-container js-nav-items">
            <div class="fullwidth">
              <div class="main">
                <!-- 分类与产品 -->
                <div class="items-wrapper js-clickable-wrapper">
                  <h2>栏目</h2>

                  <div itemscope itemtype="http://schema.org/SiteNavigationElement" class="nav-items-list row">
                    <div class="single-row">
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="首页" itemprop="url" href="<?php bloginfo('url') ?>"><span itemprop="name">首页</span></a>
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="ifanRank" itemprop="url" href="<?php bloginfo('url') ?>/?cat=3"><span itemprop="name">理论视野</span></a>
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="智能" itemprop="url" href="<?php bloginfo('url') ?>/?cat=3"><span itemprop="name">基本原理</span></a>
                    </div>
                    <div class="single-row">
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="评测" itemprop="url" href="<?php bloginfo('url') ?>/?cat=1106"><span itemprop="name">青年之声</span></a>
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="汽车" itemprop="url" href="<?php bloginfo('url') ?>/?cat=9"><span itemprop="name">中流击水</span></a>
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="商业" itemprop="url" href="<?php bloginfo('url') ?>/?cat=8"><span itemprop="name">国际观察</span></a>
                    </div>
                    <div class="single-row">
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="范品" itemprop="url" href="<?php bloginfo('url') ?>/?cat=5"><span itemprop="name">当代中国</span></a>
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="图记" itemprop="url" href="<?php bloginfo('url') ?>/?cat=6"><span itemprop="name">共运信息</span></a>
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="iSeed" itemprop="url" href="<?php bloginfo('url') ?>/?cat=7"><span itemprop="name">史海钩沉</span></a>
                    </div>
                    <div class="single-row">
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="观点" itemprop="url" href="<?php bloginfo('url') ?>/?cat=10"><span itemprop="name">革命文艺</span></a>
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="访谈" itemprop="url" href="<?php bloginfo('url') ?>/?cat=1029"><span itemprop="name">系列专题</span></a>
                      <a ga-track="event" ga-action="click" ga-event-category="nav-item" ga-event-label="饭点视频" itemprop="url" href="<?php bloginfo('url') ?>/?cat=1"><span itemprop="name">公告帮助</span></a>
                    </div>
                  </div>

                </div><!-- 分类与产品 -->

                <div class="menu-preview js-menu-preview">
                  <h2>快速预览</h2>
                  <div class="search-ifr preview-list">
                    <ul class="search-list"></ul>
                  </div>
                </div>

              </div>
            </div>
          </div><!-- 导航 -->

        </div>
        <!-- end header-row -->

    </div>