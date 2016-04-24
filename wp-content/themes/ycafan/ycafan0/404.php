<?php get_header(); ?>
<!-- Error begin -->
<div class="error">
	<!-- Breadcrumb begin -->
    	<?php include (TEMPLATEPATH . '/breadcrumb.php'); ?>
    <!-- Breadcrumb end -->
    <!-- Errorinfo begin -->
    <div class="errorinfo">
        <h4>抱歉，您访问的网站页面不存在!</h4>
        <span>The requested URL was not found on this server. </span>
        <strong>您可以尝试以下操作：</strong>
        <ol>
            <li>检查您输入的网址拼写是否正确。</li>
            <li>进入<a href="<?php bloginfo('siteurl');?>/" title="<?php bloginfo('description'); ?>" class="underline"><?php bloginfo('name');?></a>首页，浏览更多精彩内容。</li>
            <li>使用站内搜索，查找您要的内容。</li>
        </ol>
        <!-- Search begin -->
        <form method="get" class="errorsearch" action="<?php bloginfo('url'); ?>/">
           <input class="searchInput" type="text" value="" name="s" id="ls"/>
           <input class="searchBtn" type="submit" id="searchsubmit" title="搜索" value="搜 索"/>
        </form>
        <!-- Search end -->
    </div>
    <!-- Errorinfo end -->
</div>
<!-- Error end -->
<?php get_footer(); ?>