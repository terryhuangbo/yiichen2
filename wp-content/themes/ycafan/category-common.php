<?php
/**
 * Template Name: 文章分类页
 **/
//获取头部
get_header();
$cat = array_shift(get_the_category());
$_ex_field = 'cache-category-expire';
$_cat_posts = $Cache->_get('cache-category-posts', $_ex_field);
$_cat_posts = $_cat_posts ? $_cat_posts
    : $Cache->_set('cache-category-posts', _get_category_posts($cat->slug), $_ex_field);
$fields = $Cache->_get('cache-category-banners', $_ex_field);
$fields = $fields ? $fields
    : $Cache->_set('cache-category-banners', get_template_fields('category-common.php'), $_ex_field);
$_cat_banner = $Tool->_value($fields['category_banners'][0]['category_banner_' . $cat->slug]['url'], '');
?>

<div id="content-outer" class="content-outer clearfix fix-header-height">
    <div id="content" class="content clearfix">

        <div class="content-header-archive" style="background-image:url(<?php echo $_cat_banner ?>);">
            <div class="overlay"></div>
            <h1 class="yahei fullwidth">
                <?php echo $cat->name ?><span class="slogan"></span>
            </h1>
            <div class="stat fullwidth">
                <p>10<span>WEEKLY</span></p>
                <p><?php  echo get_category($cat->term_id)->count; ?><span>TOTAL</span></p>
            </div>
        </div>

        <div class="fullwidth container-main row">
        <div class="main main-archive posts-list js-loading-posts-wrapper"><!--begin entry-->
            <?php foreach($_cat_posts as $p):   ?>
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
            <div class="sbl">
            </div>
        </div>

        <div class="fullwidth row">
            <div class="main">

                <div class="loading-posts" id="loading-more-container">
                    <a id="JS_loadMore" category="<?php echo $cat->slug ?>" class="no-ajax load-more-link" data-cat-id="<?php echo $cat->slug ?>" data-page="2" href="javascript:void(0);">
                        加载更多
                    </a>

                    <a id="no-articles" class="no-ajax no-articles hide" href="javascript:void(0);">
                        没有更多了
                    </a>

                    <div id="JS_loading" class="no-ajax loading loading-gif">
                        <img src="http://cdnzz.iycar.com/wp-content/themes/iycar-2.0/static/images/common/loader/loadingb.gif"/>
                    </div>
                </div>  </div>
        </div>

    </div><!--end content-->
</div><!--end content-outer -->

<!-- 底部 -->
<?php get_footer(); ?>