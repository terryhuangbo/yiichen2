<!-- 获取头部 -->
<?php get_header();
$cat = array_shift(get_the_category());
$args = [
    'post_type' => 'post',
    'offset' => 0,
    'posts_per_page' => 10,
    'post_status' => 'publish',
    'orderby'=>'post_date',
    'tax_query' => [
        [
            'taxonomy' => 'category',
            'field'    => 'id',
            'terms'    => $cat->term_id,
        ],
    ]
];

?>

<div id="content-outer" class="content-outer clearfix fix-header-height">
    <div id="content" class="content clearfix">

        <div class="content-header-archive" style="background-image:url(http://images.ifanr.cn/wp-content/uploads/2015/02/product.jpg);">
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
        <?php
        $query = new WP_Query($args);
        if($query->have_posts()){
            while($query->have_posts()){
                $query->the_post();
        ?>
            <article itemscope itemtype="http://schema.org/Article" id="post-<?php the_ID() ?>" class="row post-item-container">
                <div class="new-post-item-content">
                    <a rel="canonical" class="news-pic" itemprop="thumbnailUrl"  href="<?php the_permalink() ?>" style="background-image:url('<?php echo $Tool->_get_img_from_html(get_the_content()) ?>')"></a>

                    <h2>
                        <a rel="external" href="<?php the_permalink() ?>" title="Permalink to <?php the_title() ?>">
                            <span itemprop="headline"><?php echo $Tool->_str_cut(get_the_title(), 0, 20, false) ?></span>
                        </a>
                        <div class="comment-count new-comment-count">
                            <a rel="canonical" class="comment-count-container" href="http://www.ifanr.com/coolbuy/644413#comments" ga-track="event" ga-action="click" ga-event-category="button" ga-event-label="CommentCount">
                                <i class="ifanr2015 ifanr2015-pinglun"></i>
                                <?php comments_number() ?>
                            </a>
                            <meta itemprop="commentCount" content="<?php comments_number() ?>" />
                        </div>
                    </h2>

                    <p itemprop="description" class="js-excerpt" data-clamp="2"><?php echo get_the_excerpt(); ?></p>

                    <div class="tag-label">
                        <a class="tag" itemprop="keywords" href="http://www.ifanr.com/coolbuy/"><?php echo $cat->name ?></a>
                        <span class="seperator">|</span>
                        <span class="author"><a href="http://www.ifanr.com/author/coolbuy" title="Posts by <?php echo $cat->name ?>" rel="author"><?php echo $cat->name ?></a></span>
                        <meta itemprop="author" content="<?php echo $cat->name ?>" />
                        <span class="date" itemprop="datePublished" datetime="2016-04-13T03:50:35+0000"><?php echo $Tool->_get_diff_date(strtotime(get_the_time('Y-m-d H:i:s'))) ?></span>
                    </div>

                </div>

            </article>
            <?php } ?>
        <?php } ?>
        <?php  wp_reset_postdata(); ?>
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
                        <img src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/loader/loadingb.gif"/>
                    </div>
                </div>  </div>
        </div>

    </div><!--end content-->
</div><!--end content-outer -->

<!-- 底部 -->
<?php get_footer(); ?>