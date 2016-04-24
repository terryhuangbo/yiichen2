<?php get_header(); ?>
<!-- Content begin -->
<div class="content">
	<!-- Breadcrumb begin -->
    	<?php include (TEMPLATEPATH . '/breadcrumb.php'); ?>
    <!-- Breadcrumb end -->
    <!-- ArticleList begin -->
    <ul class="articleList">
    	<?php if ( get_option('wpyou_articlecats_perpage') ) { ?>
			<?php $articleperpage = stripslashes(get_option('wpyou_articlecats_perpage')); ?>
        <?php } else { ?>
            <?php $articleperpage = 20; ?>
        <?php } ?>
    	<?php query_posts("s=$s&showposts=$articleperpage&paged=$paged"); ?>
		<?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <li>
                    <a href="<?php the_permalink() ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a><span><?php the_time('Y-m-d'); ?></span>
               </li>
            <?php endwhile; ?>
        <?php else : ?>
            <!-- Error begin -->
            <li>
                <p>抱歉，您访问的网站页面不存在! </p>
            </li>
        	<!-- Error end -->
        <?php endif; ?>
    </ul>
    <!-- ArticleList end -->
    <!-- Page Navigation begin -->
    <div class="clear"></div>
    <div class="pagenavi"><?php if(function_exists('wpyou_pagenavi')) { wpyou_pagenavi(9); } ?></div>
    <!-- Page Navigation end -->
</div>   
<!-- Content end --> 
<!-- Sidebar begin -->
<?php include (TEMPLATEPATH . '/archivebar.php'); ?>
<!-- Sidebar end -->
<?php get_footer(); ?>