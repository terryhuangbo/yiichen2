<?php
/**
 * Template Name: 首页
 **/
get_header();
//扩展字段
$_ex_field = 'cache-index-expire';
$fields = $Cache->_get('cache-index-field', $_ex_field);
$fields = $fields ? $fields : $Cache->_set('cache-index-field', get_fields($post->ID), $_ex_field);
//最新文章$_push_1，$_push_2，$_push_3三个推荐位
$_push_1 = 3;
$_push_2 = 3;
$_push_3 = 3;
$_push_post_total = $_push_1 + $_push_2 + $_push_3;
$_index_posts = $Cache->_get('cache-index-latest-posts', $_ex_field);
$_index_posts = $_index_posts ? $_index_posts
    : $Cache->_set('cache-index-latest-posts', _get_index_posts($_push_post_total), $_ex_field);
//首页视频
$videos = $Cache->_get('cache-index-videos', $_ex_field);
$videos = $videos ? $videos : $Cache->_set('cache-index-videos', _get_index_videos(10), $_ex_field);
//专题文章区
$_special_slug = $Tool->_value($fields['right_recommend'][0]['right_recommend_cat'], 'special');
$_special_title = $Tool->_value($fields['right_recommend'][0]['right_recommend_title'], '专题');
$_special_num = $Tool->_value($fields['right_recommend'][0]['right_recommend_num'], 10);
$_special_posts = $Cache->_get('cache-index-special-posts', $_ex_field);
$_special_posts = $_special_posts ? $_special_posts
    : $Cache->_set('cache-index-special-posts', _get_index_specials($_special_slug, $_special_num), $_ex_field);
?>

<div id="content-outer" class="content-outer clearfix fix-header-height">
<div id="content" class="content clearfix">
<div class="header-notice-wrap header-notice-wrap-for-home">
    <div class="fullwidth">
        <div class="header-notice hide J_Notice">
            <a class="notice J_NoticeLink" href="#">
                <i class="ifanr2015 ifanr2015-live">
                </i>
          <span class="J_NoticeTitle">
          </span>
            </a>
            <a class="J_Close close reverse-icon" title="关闭">
                <i class="icon-remove">
                </i>
            </a>
        </div>
    </div>
</div>
<div id="recommend-post" class="clearfix">
    <div id="recommend-post-slider" class="recommend-holder clearfix">
        <div class="recommend-post-content clearfix">
            <div class="slider">
                <ul>
                    <?php foreach($Tool->_value($fields['banner_area'], []) as $key => $val): ?>
                        <li class="ifanr-recommend-item">
                            <div class="post-mask post-mask-top">
                            </div>
                            <div class="post-mask post-mask-bottom">
                            </div>
                            <div itemprop="url" href="<?php echo $val['banner_post'] ?>" class="ifanr-recommend-items">
                                <div class="item-content">
                                    <div class="bg-img" data-cmpt-parallax-bg id="recommend"
                                         style="background-image:url('<?php echo $val['banner_img']['url'] ?>')">
                                    </div>
                                    <div class="fullwidth">
                                        <div class="main recommend-post-wrapper row">
                                            <div class="post-item-container excerpt" itemscope
                                                 itemtype="http://schema.org/Article">
                                                <div class="fullwidth">
                                                    <div class="main row">
                                                        <div class="post-item-container title">
                                                            <div class="post-item-addon">
                                                            </div>
                                                            <div class="post-item-content" itemscope
                                                                 itemtype="http://schema.org/Article">
                                                                <meta itemscope="thumbnailUrl" content="http://images.ifanr.cn/wp-content/uploads/2016/03/DIY-3.jpg" />
                                                                <div class="tag-label">
                                                                    <a class="tag" itemprop="keywords"
                                                                       href="<?php echo $val['banner_post'] ?>">
                                                                        <?php echo $Tool->_value(explode('|', $val['banner_titie'])[0]) ?>
                                                                    </a>
                                                                  <span class="seperator">
                                                                    |
                                                                  </span>
                                                                  <span class="author">
                                                                    <a href="<?php echo $val['banner_post'] ?>" title=""
                                                                       rel="author">
                                                                        <?php echo $Tool->_value(explode('|', $val['banner_titie'])[1]) ?>
                                                                    </a>
                                                                  </span>
                                                                </div>
                                                                <h2 itemprop="headline">
                                                                    <a rel="canonical" itemprop="url"
                                                                       href="<?php echo $val['banner_post'] ?>"
                                                                       class="js-multiline">
                                                                        <div class="title-part-container">
                                                                          <span class="title-part">
                                                                            <?php echo $Tool->_value(explode('|', $val['banner_brief'])[0]) ?>
                                                                          </span>
                                                                        </div>
                                                                        <div class="title-part-container">
                                                                          <span class="title-part">
                                                                            <?php echo $Tool->_value(explode('|', $val['banner_brief'])[1]) ?>
                                                                          </span>
                                                                        </div>
                                                                    </a>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post-item-content post-item-excerpt">
                                                    <div itemprop="description" class="js-excerpt" data-clamp='3'>
                                                        <p><?php echo $val['banner_comment'] ?></p>
                                                    </div>
                                                </div>
                                                <div class="clearfix">
                                                </div>
                                            </div>
                                            <!-- post-item-container -->
                                        </div>
                                    </div>
                                    <!-- recommend-post-wrapper -->
                                </div>
                                <!-- item-content -->
                            </div>
                        </li>
                    <?php endforeach ?>
                </ul>
            </div>
            <!-- slider -->
        </div>
        <!-- recommend-post-content -->
    </div>
    <!-- recommend-post-slider -->
    <div class="fullwidth">
        <!-- 广告 -->
        <!-- 广告 -->
        <!-- 文章合集 -->
        <div id="ifanr-post-collections" class="clearfix">
            <div class="accordion-border">
                <!-- 只能有三个-->
                <?php foreach($Tool->_value($fields['banner_right_area'], []) as $key => $val): ?>
                    <a rel="canonical" class="accordion-item accordion-close" href="<?php echo get_permalink($Tool->_value($val['banner_right_post'][0]->ID), 1) ?>">
                        <?php echo $Tool->_value($val['banner_right_post'][0]->post_title) ?>
                        <div class="img-bg" style="background-image:url('<?php echo $val['banner_right_image'] ?>');">
                        </div>
                    </a>
                <?php endforeach ?>
            </div>
        </div>
        <!-- 文章合集 -->
    </div>
</div>
<!-- recommend-post -->
<div id="index-part-one" data-cmpt-autofixed-container class="fullwidth row top  js-index-part-one">
<div class="main">
    <div class="index-content-normal posts-list">
        <!-- 第一个推荐位，只能有三个-->
        <?php foreach(array_splice($_index_posts, 0, $_push_1) as $p):   ?>
            <article itemscope itemtype="http://schema.org/Article" id="post-<?php echo $p['ID'] ?>"
                     class="row post-item-container">
                <div class="new-post-item-content">
                    <a rel="canonical" class="news-pic" itemprop="thumbnailUrl" href="<?php echo $p['link'] ?>" target="_blank"
                       style="background-image:url('<?php echo $p["image"] ?>')">
                    </a>
                    <h2>
                        <a rel="external" href="<?php echo $p['link'] ?>" title="Permalink to <?php echo $p['title'] ?>">
                            <span itemprop="headline">
                              <?php echo $p['title'] ?>
                            </span>
                        </a>
                        <div class="comment-count new-comment-count">
                            <a rel="canonical" class="comment-count-container" href="<?php echo $p['link'] ?>#comments"
                               ga-track="event" ga-action="click" ga-event-category="button" ga-event-label="CommentCount">
                                <i class="ifanr2015 ifanr2015-pinglun"></i><?php echo $p['comments'] ?>
                            </a>
                            <meta itemprop="commentCount" content="<?php echo $p['comments'] ?>" />
                        </div>
                    </h2>
                    <p itemprop="description" class="js-excerpt" data-clamp="2">
                        <?php echo $p['introduce']  ?>
                    </p>
                    <div class="tag-label">
                        <a class="tag" itemprop="keywords" href="<?php echo $p['category_link']  ?>" target="_blank">
                            <?php echo $p['category']  ?>
                        </a>
                        <span class="seperator">
                            |
                        </span>
                        <span class="author">
                            <a href="javaScript:viod(0);" title="Posts by <?php echo $p['author']; ?>"
                               rel="author">
                                <?php echo $p['author']; ?>
                            </a>
                        </span>
                        <meta itemprop="author" content="<?php echo $p['author'] ;?>" />
                        <span class="date" itemprop="datePublished" datetime="<?php echo $p['pubDate'] ?>">
                            <?php echo $p['difDate'] ?>
                        </span>
                    </div>
                </div>
            </article>
        <?php  endforeach; ?>
        <div class="dasheng-wrapper">
            <div class="fullwidth row">
            <span class="dasheng-icon">
              <i class="ifanr2015 ifanr2015-dasheng">
              </i>
            </span>
                <div class="main">
                    <div class="post-item-container">
                        <div class="comment-count">
                            <div class="row-dasheng-title">
                                <span class="entry-dasheng-title">
                                  <a class="tag" href="<?php bloginfo('url') ?>/?cat=1219">
                                      语录
                                  </a>
                                </span>
                            </div>
                        </div>
                        <div class="post-item-content ">
                            <?php
                                $quot_id = $Tool->_value($fields['quotation_area']->ID, 1);
                                $quot_fields = get_fields($quot_id);
                            ?>
                            <a class="dasheng-index entry-dasheng clearfix" href="<?php echo get_permalink($quot_id) ?>">
                                <div class="entry-dasheng-inner clearfix">
                                    <div class="dasheng_content clearfix">
                                        <span>
                                          <?php echo $Tool->_value($quot_fields['quotation_brief']) ?>
                                        </span>
                                        <div class="dasheng_original text-right">
                                          <span>
                                            ― <?php echo $Tool->_value($quot_fields['quotation_author']) ?>
                                          </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 第二个推荐位，只能有三个-->
        <?php foreach(array_splice($_index_posts, $_push_1, $_push_2) as $p):   ?>
            <article itemscope itemtype="http://schema.org/Article" id="post-<?php echo $p['ID'] ?>"
                     class="row post-item-container">
                <div class="new-post-item-content">
                    <a rel="canonical" class="news-pic" itemprop="thumbnailUrl" href="<?php echo $p['link'] ?>" target="_blank"
                       style="background-image:url('<?php echo $p["image"] ?>')">
                    </a>
                    <h2>
                        <a rel="external" href="<?php echo $p['link'] ?>" title="Permalink to <?php echo $p['title'] ?>">
                            <span itemprop="headline">
                              <?php echo $p['title'] ?>
                            </span>
                        </a>
                        <div class="comment-count new-comment-count">
                            <a rel="canonical" class="comment-count-container" href="<?php echo $p['link'] ?>#comments"
                               ga-track="event" ga-action="click" ga-event-category="button" ga-event-label="CommentCount">
                                <i class="ifanr2015 ifanr2015-pinglun"></i><?php echo $p['comments'] ?>
                            </a>
                            <meta itemprop="commentCount" content="<?php echo $p['comments'] ?>" />
                        </div>
                    </h2>
                    <p itemprop="description" class="js-excerpt" data-clamp="2">
                        <?php echo $p['introduce']  ?>
                    </p>
                    <div class="tag-label">
                        <a class="tag" itemprop="keywords" href="<?php echo $p['category_link']  ?>" target="_blank">
                            <?php echo $p['category']  ?>
                        </a>
                        <span class="seperator">
                            |
                        </span>
                        <span class="author">
                            <a href="javaScript:viod(0);" title="Posts by <?php echo $p['author']; ?>"
                               rel="author">
                                <?php echo $p['author']; ?>
                            </a>
                        </span>
                        <meta itemprop="author" content="<?php echo $p['author'] ;?>" />
                        <span class="date" itemprop="datePublished" datetime="<?php echo $p['pubDate'] ?>">
                            <?php echo $p['difDate'] ?>
                        </span>
                    </div>
                </div>
            </article>
        <?php  endforeach; ?>
    </div>
</div>

<div class="sbl row">
    <div data-cmpt-autofixed data-autofixed-follow-to=".js-index-part-one"></div>
    <div>
        <div class="ifanr-sudu-border">
        </div>
        <div id="ifanr_side_jiong_widget-81" class="widget-container widget_ifanr_jiong_new clearfix">
            <div class="ifanr-text-content">
                <a id="video" rel="external" href="<?php echo _get_page_url('wechat') ?>">
                    <img src="<?php bloginfo('template_url'); ?>/images/info.jpg"/>
                </a>
            </div>
        </div>
        <div id="ifanr_widget_buzz-2" class="widget-container widget_ifanr_widget_buzz clearfix">
            <div class="widget-buzz-container">
                <div class="title-container">
                    <i class="iconfont iconfont-buzz">
                    </i>
                    <h1 class="widget-buzz-title">
                        <?php echo $_special_title ?>
                    </h1>
                </div>
                <div class="nano buzz-list-container js-nano">
                    <ul class="buzz-list nano-content js-buzz-list"
                        category="<?php echo $Tool->_value($fields['right_recommend'][0]['right_recommend_cat'], 'special')  ?>">
                        <!-- buzz item -->
                        <?php foreach($_special_posts as $p): ?>
                            <li class="buzz-item">
                                <div class="buzz-item-container">
                                    <h2 class="buzz-item-title" ga-track="event" ga-action="click" ga-event-category="widget"
                                        ga-event-label="ifanr-buzz">
                                        <a target="_blank" href="<?php echo $p['link'] ?>" data-source-url="<?php echo $p['link'] ?>"
                                           itemprop="url" class="buzz-item-link">
                                            <?php echo $p['title'] ?>
                                        </a>
                                    </h2>
                                    <div class="buzz-item-footer">
                                          <span class="buzz-item-date" itemprop="datePublished" datetime="<?php echo $p['post_modified'] ?>">
                                            <?php echo $p['difDate'] ?>
                                          </span>
                                    </div>
                                </div>
                            </li>
                        <?php endforeach ?>
                        <!-- buzz item -->
                        <li class="loading js-loading">
                            <img src="<?php bloginfo('template_url') ?>/images/loadingb.gif"
                                />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="ifanr_side_data_widget-4" class="widget-container widget-data clearfix">
            <div class="widget-data-content">
                <div class="widget-data-content-bg">
                </div>
                <h4>
                    <a href="http://www.ifanr.com/data/">
                        数读
                    </a>
                </h4>
                <a class="widget-body" rel="external" href="http://www.ifanr.com/data/628594">
              <span class="widget-data-num num font-luzsans">
                5.7
              </span>
              <span class="widget-data-percent yahei">
                %
              </span>
              <span class="widget-data-text">
                IDC：今年智能手机出货量将仅增长 5.7%
              </span>
                </a>
                <a id="widget-data-more" class="widget-data-more" href="http://www.ifanr.com/data/"
                   title="点击了解更多">
                    了解更多 &raquo;
                </a>
            </div>
        </div>
<!--        <div id="recentcomments2" class="widget-container widget_recentcomments ifr-post-list-widget  clearfix">-->
<!--            <div class="title">-->
<!--                <img class="ifanr2015" src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/desktop/latest-comments-icon.png"-->
<!--                     alt="" />-->
<!--                <h2>-->
<!--                    最近评论-->
<!--                </h2>-->
<!--            </div>-->
<!--            <ul>-->
<!--                <li class="rc-navi clearfix">-->
<!--              <span class="rc-loading">-->
<!--                Loading...-->
<!--              </span>-->
<!--                </li>-->
<!--                <li id="rc-comment-temp" class="rc-item rc-comment clearfix">-->
<!--                    <div class="rc-excerpt">-->
<!--                    </div>-->
<!--                    <div class="rc-info">-->
<!--                    </div>-->
<!--                    <div class="rc-timestamp">-->
<!--                    </div>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->

        <section class="o-widget c-hot-comment-widget" data-component="RecentCommentsWidget">
            <div class="o-widget__header c-hot-comment-widget-header">
                <h1 class="o-widget__header__title c-hot-comment-widget-header__title">最近评论</h1>
            </div>
            <ul class="o-widget__items c-hot-comment-widget-items js-recent-comment-items ps-container ps-theme-default ps-active-y"
                data-component="Scrollbar" data-ps-id="402e4162-f5c4-4434-c9f5-d809816da645">

                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px;">
                    <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px; height: 510px;">
                    <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 141px;"></div>
                </div>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/657816" target="_blank"><p
                            class="c-hot-comment-widget-item__main">接到要求，关闭网盘业务</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">未来后天就来，爱范儿告诉你为何今年 Google I/O 值得熬夜看</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">欧阳</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/2a35af8c62068558688f2aaa7fda3f3b?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/657816" target="_blank"><p
                            class="c-hot-comment-widget-item__main">Nexus 的系统体验很赞，就是没有哪台特好看</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">未来后天就来，爱范儿告诉你为何今年 Google I/O 值得熬夜看</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">李 谋</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/8df3c436790c8239753eefce779a9f99?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/657744" target="_blank"><p
                            class="c-hot-comment-widget-item__main">因为魅族起家于 MP3 播放器，所以本源普遍认为是在音乐播放领域</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">魅族在美国发了一款炫酷音箱，想要证明中国也有高端货</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">Kesen</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/e421b902014216b537bde82f6d0ac0a2?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/app/657565" target="_blank">
                        <p class="c-hot-comment-widget-item__main">题图这个广告我印象深刻啊，太棒了</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">没有乐器、不懂乐理也能玩音乐！苹果 GarageBand 为中国发布重大更新</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">异次元非骇客</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/23d47a15e3b9af8b17a186e3f5c63550?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/658268" target="_blank"><p
                            class="c-hot-comment-widget-item__main">的确不错</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">Facebook 拍摄的第一部 VR 视频什么样？</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">小峰峰</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/d298e6316349cdcec13bfc4711b0e585?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/app/655328" target="_blank">
                        <p class="c-hot-comment-widget-item__main">太好了，我的公众号「日纸」每天推送的壁纸很多都是从 unsplash 取材的。爱范儿么么哒</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">想要高清大图又不愿花钱？收下这 11 个超赞的摄影图库 | 领客专栏 · 電腦玩物</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">Kesen</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/e421b902014216b537bde82f6d0ac0a2?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/657744" target="_blank"><p
                            class="c-hot-comment-widget-item__main">诸位好像忘了一加当初是如何打入美国市场，再回归国内了。</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">魅族在美国发了一款炫酷音箱，想要证明中国也有高端货</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">诡马</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/f4f543de7b0ff9ae72c36fe32de05f06?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/658004" target="_blank"><p
                            class="c-hot-comment-widget-item__main">不要搞笑了，iphone6s
                            plus的屏幕分辨率和小米MAX一样，都是1920x1080，大家能显</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">小米 Max 评测：电量持久，有一个功能让 iPhone 望尘莫及</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">天音怒放</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/da327ef33c6edec50e2cd434052c54a7?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/658131" target="_blank"><p
                            class="c-hot-comment-widget-item__main">我服了爱范儿了，就不能买2个机器自己拆开分析么？这种文章也要转载，价值到底何在？</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">拆开看两大黑科技 HTC Vive 与 Oculus Rift 的同与不同</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">terry</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/c2cf98edeab057ab9c913da5d5543ea7?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/658228" target="_blank"><p
                            class="c-hot-comment-widget-item__main">
                            “黄丽表示第五季微信公开课上公布的新版会员卡“支付+会员”解决方案可以将顾客在微信支付的一瞬间直接转</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">“扫一扫”与会员升级，微信并没有想象中那么简单</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">erick_zhu</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/75026a4ef3f2c2846f1d6f3e27f45802?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/658228" target="_blank"><p
                            class="c-hot-comment-widget-item__main">实在看不出来这和公众号的作用有什么区别？</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">“扫一扫”与会员升级，微信并没有想象中那么简单</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">SNAIL.83</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/9ec33c4fb96e24cf82d083ba4cf608ff?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
                <li class="c-hot-comment-widget__items__item c-hot-comment-widget-item js-hot-comment-widget-item"><a
                        class="c-hot-comment-widget-item__wrap" href="http://www.ifanr.com/dasheng/658196"
                        target="_blank"><p class="c-hot-comment-widget-item__main">把政府的工作强加给企业，是我们的特色。</p>

                        <p class="c-hot-comment-widget-item__meta"><span
                                class="c-hot-comment-widget-item__meta__item-hint">评论于</span> <span
                                class="u-clamp-line--1 u-inline c-hot-comment-widget-item__meta__item-link">加入国际反假联盟遇挫，阿里招谁了？</span>
                        </p>

                        <div class="c-hot-comment-widget-item__user-info"><span
                                class="c-hot-comment-widget-item__user-info__username">SNAIL.83</span> <img
                                class="c-hot-comment-widget-item__user-info__avatar"
                                src="http://gravatar.ifanrx.com/avatar/9ec33c4fb96e24cf82d083ba4cf608ff?s=48&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg">
                        </div>
                    </a></li>
            </ul>
        </section>
        <div id="mail-subscribe" class="widget-ifr ifr-subscribe widget-container clearfix">
            <div id="mc_embed_signup" class="clearfix">
                <form action="http://ifanr.us2.list-manage.com/subscribe/post?u=f770959951cdcc1bba7ab56cb&amp;id=258559241a"
                      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                      class="validate" target="_blank">
                    <div class="widget-header">
                        <label for="mce-EMAIL">
                            爱范消息 | Exploring Leading Tech
                        </label>
                    </div>
                    <div class="widget-contents clearfix">
                        <p>
                            轻量、专注的消息，关注移动互联网、创投、智能设备的新鲜资讯。需各种邀请码，也请加入列表。
                        </p>
                        <div class="ifr-input-group">
                            <input type="email" value="" name="EMAIL" class="ifr-input email-input"
                                   id="mce-EMAIL" placeholder="填写邮箱，订阅我们">
                            <input ga-track="event" ga-action="click" ga-event-category="button" ga-event-label="Subscribe"
                                   type="submit" value="订阅" name="subscribe" id="mc-embedded-subscribe" class="ifr-input email-submit">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
<div class="video-wrapper">
    <div class="video-container">
        <div class="video-feature-container js-video-container" data-video-iframe="<iframe src='http://player.youku.com/embed/XMTQ4NTg0MzY4OA==' frameborder=0 allowfullscreen></iframe>"
             ga-track="event" ga-action="click" ga-event-category="video" ga-event-label="少年中国视频">
            <div class="mask video-mask">
            </div>
            <div class="bg-img" style="background-image:url('<?php echo $Tool->_value($fields['video_area'][0]['video_cover']['url']) ?>')">
            </div>
            <div class="video-play-button js-play-btn">
                <i class="ifanr2015 ifanr2015-shipin">
                </i>
            </div>
            <div class="feature-item-container">
                <div class="tag-label">
                    <a class="tag" itemprop="keywords" href="http://www.ifanr.com/video">
                        少年中国视频
                    </a>
                </div>
                <h2 class="title">
                    【少年中国出品】<?php echo $Tool->_value($fields['video_area'][0]['video_title']) ?>
                </h2>
                <p class="description">
                    <?php echo $Tool->_value($fields['video_area'][0]['video_brief']) ?>
                </p>
            </div>
        </div>
        <div class="video-list-container">
            <?php foreach($videos as $video): ?>
                <a class="list-item-container js-list-video" href="http://www.ifanr.com/video/626463"
                   data-video-iframe="<iframe src='<?php echo $video['video_link'] ?>' frameborder=0 allowfullscreen></iframe>"
                   ga-track="event" ga-action="click" ga-event-category="video" ga-event-label="少年中国视频">
                    <div class="mask video-mask-black">
                    </div>
                    <div class="mask video-play-mask">
                        <i class="ifanr2015 ifanr2015-bofang">
                        </i>
                        <span class="play-text">
                          播放中...
                        </span>
                    </div>
                    <div class="bg-img" style="background-image:url('<?php echo $video['video_cover'] ?>')">
                    </div>
                    <div class="video-info-container">
                        <div class="video-headline">
                            <?php echo $video['title'] ?>
                        </div>
                        <div class="video-time">
                            时长：<?php echo $video['video_duartion'] ?>
                        </div>
                        <div class="video-date">
                            <?php echo $video['difDate'] ?>
                        </div>
                    </div>
                </a>
            <?php endforeach ?>
        </div>
    </div>
    <div class="mask video-mask-left mask-bg-left">
    </div>
    <div class="mask video-list-mask mask-bg-right">
    </div>
</div>
<div id="index-part-two" data-cmpt-autofixed-container class="fullwidth row">
    <div class="main js-index-part-two">
        <div class="index-content-normal posts-list">
            <!-- 第三个推荐位，只能有六个-->
            <?php foreach(array_splice($_index_posts, $_push_1 + $_push_2, $_push_3) as $p):   ?>
                <article itemscope itemtype="http://schema.org/Article" id="post-<?php echo $p['ID'] ?>"
                         class="row post-item-container">
                    <div class="new-post-item-content">
                        <a rel="canonical" class="news-pic" itemprop="thumbnailUrl" href="<?php echo $p['link'] ?>" target="_blank"
                           style="background-image:url('<?php echo $p["image"] ?>')">
                        </a>
                        <h2>
                            <a rel="external" href="<?php echo $p['link'] ?>" title="Permalink to <?php echo $p['title'] ?>">
                            <span itemprop="headline">
                              <?php echo $p['title'] ?>
                            </span>
                            </a>
                            <div class="comment-count new-comment-count">
                                <a rel="canonical" class="comment-count-container" href="<?php echo $p['link'] ?>#comments"
                                   ga-track="event" ga-action="click" ga-event-category="button" ga-event-label="CommentCount">
                                    <i class="ifanr2015 ifanr2015-pinglun"></i><?php echo $p['comments'] ?>
                                </a>
                                <meta itemprop="commentCount" content="<?php echo $p['comments'] ?>" />
                            </div>
                        </h2>
                        <p itemprop="description" class="js-excerpt" data-clamp="2">
                            <?php echo $p['introduce']  ?>
                        </p>
                        <div class="tag-label">
                            <a class="tag" itemprop="keywords" href="<?php echo $p['category_link']  ?>" target="_blank">
                                <?php echo $p['category']  ?>
                            </a>
                        <span class="seperator">
                            |
                        </span>
                        <span class="author">
                            <a href="javaScript:viod(0);" title="Posts by <?php echo $p['author']; ?>"
                               rel="author">
                                <?php echo $p['author']; ?>
                            </a>
                        </span>
                            <meta itemprop="author" content="<?php echo $p['author'] ;?>" />
                        <span class="date" itemprop="datePublished" datetime="<?php echo $p['pubDate'] ?>">
                            <?php echo $p['difDate'] ?>
                        </span>
                        </div>
                    </div>
                </article>
            <?php  endforeach; ?>
        </div>
    </div>
    <div class="sbl row">
    </div>
    <div class="sbl row">
        <div data-cmpt-autofixed data-autofixed-follow-to=".js-index-part-two">
        </div>
    </div>
</div>

<div id="index-part-forth" data-cmpt-autofixed-container class="fullwidth row">
    <div class="main js-index-part-forth">
        <div class="index-content-normal posts-list js-loading-posts-wrapper">
            <!-- 第四个推荐位，只能有12个-->

        </div>
    </div>
    <div class="sbl row">
        <div data-cmpt-autofixed data-autofixed-follow-to=".js-index-part-forth">
        </div>
    </div>
</div>
<div class="fullwidth row">
    <div class="main">
        <div class="loading-posts" id="loading-more-container">
            <a id="JS_loadMore" class="no-ajax load-more-link" data-home="1" data-page="2"
               href="javascript:void(0);">
                加载更多
            </a>
            <a id="no-articles" class="no-ajax no-articles hide" href="javascript:void(0);">
                没有更多了
            </a>
            <div id="JS_loading" class="no-ajax loading loading-gif">
                <img src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/loader/loadingb.gif"
                    />
            </div>
        </div>
    </div>
</div>
</div>
<!--end content-->
</div>
<!--end content-outer -->
<!-- 底部 -->
<?php get_footer(); ?>