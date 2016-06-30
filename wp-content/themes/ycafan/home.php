<?php
/**
 * Template Name: 首页
 **/
get_header();
//扩展字段
$_ex_field = 'cache-index-expire';
$fields = $Cache->_get('cache-index-field', $_ex_field);
$fields = $fields ? $fields : $Cache->_set('cache-index-field', get_fields(_param('indexid')), $_ex_field);
//最新文章$_push_1，$_push_2，$_push_3三个推荐位
$_push_1 = 4;
$_push_2 = 4;
$_push_3 = 4;
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
                <i class="iycar2015 iycar2015-live">
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
                        <li class="iycar-recommend-item">
                            <div class="post-mask post-mask-top">
                            </div>
                            <div class="post-mask post-mask-bottom">
                            </div>
                            <div itemprop="url" href="<?php echo $val['banner_post'] ?>" class="iycar-recommend-items">
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
                                                                <meta itemscope="thumbnailUrl" content="http://images.iycar.cn/wp-content/uploads/2016/03/DIY-3.jpg" />
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
        <div id="iycar-post-collections" class="clearfix">
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
                                <i class="iycar2015 iycar2015-pinglun"></i><?php echo $p['comments'] ?>
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
              <i class="iycar2015 iycar2015-dasheng">
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
                                <i class="iycar2015 iycar2015-pinglun"></i><?php echo $p['comments'] ?>
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
        <div class="iycar-sudu-border">
        </div>
        <div id="iycar_side_jiong_widget-81" class="widget-container widget_iycar_jiong_new clearfix">
            <div class="iycar-text-content">
                <a id="video" rel="external" href="<?php bloginfo('url') ?>/?cat=1">
                    <img src="<?php echo get_option('site-info') ?>"/>
                </a>
            </div>
        </div>
        <div id="iycar_widget_buzz-2" class="widget-container widget_iycar_widget_buzz clearfix">
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
                        
                        <!-- buzz item -->
                        <li class="loading js-loading">
                            <img src="<?php bloginfo('template_url') ?>/images/loadingb.gif"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="iycar_side_data_widget-4" class="widget-container widget-data clearfix" >
            <?php foreach($fields['books_area'] as $book): ?>
                <div class="widget-data-content">
                    <div class="widget-data-content-bg">
                    </div>
                    <h4>
                        <a class="yth-about-link" href="<?php bloginfo('url') ?>/?cat=1221" target="_blank">
                            好书推荐
                        </a>
                    </h4>
                    <a class="widget-body"  rel="external" href="<?php echo get_permalink($Tool->_value($book['books_area_post'][0], 0)) ?>">
                      <span class="widget-data-num num font-luzsans">
                            <img  src="<?php echo $Tool->_value($book['books_area_img']) ?>">
                      </span>
                      <span class="widget-data-text">
                        <?php echo $Tool->_value($book['books_area_title']) ?>
                      </span>
                    </a>
                </div>
            <?php endforeach ?>
        </div>

        <?php if(intval(get_option('comment-open')) == 1):?>
            <div id="iycar_widget_buzz-3" class="widget-container widget_iycar_widget_buzz clearfix" style="display: none">
                <div class="widget-buzz-container">
                    <div class="o-widget__header c-hot-comment-widget-header">
                        <h1 class="o-widget__header__title c-hot-comment-widget-header__title">最近评论</h1>
                    </div>
                    <div class="nano buzz-list-container js-nano">
                        <ul class="buzz-list nano-content js-buzz-list"
                            category="<?php echo $Tool->_value($fields['right_recommend'][0]['right_recommend_cat'], 'special')  ?>">
                            <!-- buzz item -->

                            <!-- buzz item -->
                            <li class="loading js-loading">
                                <img src="<?php bloginfo('template_url') ?>/images/loadingb.gif"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        <?php endif ?>

        <div id="mail-subscribe" class="widget-yth yth-subscribe widget-container clearfix hide">
            <div id="mc_embed_signup" class="clearfix">
                <form action=""
                      method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                      class="validate" target="_blank">
                    <div class="widget-header">
                        <label for="mce-EMAIL">
                            少年中国评论消息 | Exploring Leading Tech
                        </label>
                    </div>
                    <div class="widget-contents clearfix">
                        <p>
                            和那些醒着的要进步的人们一道，向着光明的地方行进。
                        </p>
                        <div class="yth-input-group">
                            <input type="email" value="" name="EMAIL" class="yth-input email-input"
                                   id="mce-EMAIL" placeholder="填写邮箱，订阅我们">
                            <input ga-track="event" ga-action="click" ga-event-category="button" ga-event-label="Subscribe"
                                   type="submit" value="订阅" name="subscribe" id="mc-embedded-subscribe" class="yth-input email-submit">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
<div class="video-wrapper" style="display: none">
    <div class="video-container">
        <div class="video-feature-container js-video-container" data-video-ythame="<ythame src='http://player.youku.com/embed/XMTQ4NTg0MzY4OA==' frameborder=0 allowfullscreen></ythame>"
             ga-track="event" ga-action="click" ga-event-category="video" ga-event-label="少年中国视频">
            <div class="mask video-mask">
            </div>
            <div class="bg-img" style="background-image:url('<?php echo $Tool->_value($fields['video_area'][0]['video_cover']['url']) ?>')">
            </div>
            <div class="video-play-button js-play-btn">
                <i class="iycar2015 iycar2015-shipin">
                </i>
            </div>
            <div class="feature-item-container">
                <div class="tag-label">
                    <a class="tag" itemprop="keywords" href="http://www.iycar.com/video">
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
                <a class="list-item-container js-list-video" href="http://www.iycar.com/video/626463"
                   data-video-ythame="<ythame src='<?php echo $video['video_link'] ?>' frameborder=0 allowfullscreen></ythame>"
                   ga-track="event" ga-action="click" ga-event-category="video" ga-event-label="少年中国视频">
                    <div class="mask video-mask-black">
                    </div>
                    <div class="mask video-play-mask">
                        <i class="iycar2015 iycar2015-bofang">
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

<!--推荐广告位一-->
<div id="mindstore-container" class="mindstore-container" style="background-image: url('<?php echo $Tool->_value($fields['ad_area_first'][0]['ad_area_first_img']['url']) ?>');">
    <a href="<?php echo $Tool->_value($fields['ad_area_first'][0]['ad_area_first_link']) ?>" target="_blank">
        <div class="mindstore-articles-container" >

        </div>
    </a>
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
                                    <i class="iycar2015 iycar2015-pinglun"></i><?php echo $p['comments'] ?>
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
                <img src="<?php bloginfo('template_url') ?>/images/loadingb.gif"/>
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