<?php get_header(); ?>
<!-- Content begin -->
<div class="content">
	<!-- Breadcrumb begin -->
    	<?php include (TEMPLATEPATH . '/breadcrumb.php'); ?>
    <!-- Breadcrumb end -->
    <!-- SinglePost begin -->
	<div class="single page">
	<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
            <h2><?php the_title(); ?></h2>
            <div class="meta singlemeta"> </div>
            <div class="entry">
                <?php the_content(''); ?>



            </div>
        <?php endwhile; ?>
    <?php else : ?>
        <!-- Error begin -->
        <div class="single">
            <h4>没有找到您要访问的页面</h4>
            <p>抱歉, 没有找到对应的文章, 请您 <a href="<?php bloginfo('siteurl');?>/" class="underline"><strong>返回首页</strong></a> 或在搜索中查找所需的信息.</p>
        </div>
        <!-- Error end -->
    <?php endif; ?>
    </div>
    <!-- SinglePost end -->
</div>   
<!-- Content end --> 
<!-- Sidebar begin -->
<?php include (TEMPLATEPATH . '/sidebar.php'); ?>
<!-- Sidebar end -->
<?php get_footer(); ?>
