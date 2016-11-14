<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<?php
$seo = getSeo($post->ID);
if(is_single()) { // 如果是首页和文章列表页面
  $seo['seo_title'] = $post->post_title . '-' . $seo['seo_title'];
}
?>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head profile="http://gmpg.org/xfn/11">
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
	<meta name="keywords" content="<?php echo $seo['seo_keywords']; ?>" />
	<meta name="description" content="<?php echo $seo['seo_description'] ; ?>" />
	<meta property="og:image" content="http://www.yiichen.cn/wp-content/uploads/2016/03/yichenbaidu.jpg" />
	<meta name="twitter:image" content="http://www.yiichen.cn/wp-content/uploads/2016/03/yichenbaidu.jpg" />
	<meta name="baidu-site-verification" content="HvD2BREIow" />
    <meta name="baidu-tc-verification" content="ac6092a8f0a3708f7f89c25a3ef79aeb" />
	<title><?php echo $seo['seo_title']; ?></title>
	
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" />
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/zdy1.css" type="text/css" />
    
    <?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?><?php wp_head(); ?>
    <!--分割线---->
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery-1.3.1.js"></script> 	
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/alixixi_jquery.min.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/script.js"></script>
     <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery-1.4.4.min.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/slides.min.jquery.js"></script> 
    <script type="text/javascript"  charset=utf-8 src="<?php bloginfo('template_url'); ?>/js/lrscroll.js"></script>
    
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/pngFix/jquery.pngFix.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/pngFix/pluginpage.js"></script>
    <script type="text/javascript"> 
    $(document).ready(function(){ 
    $(document).pngFix(); 
     }); 
    </script>   
    <script>
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "//hm.baidu.com/hm.js?7176c0f267b41a644408aedffc133f60";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
    </script>

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

	<?php wp_head(); ?>
	
</head>

<body <?php body_class(); ?>>
	
	<div id="page-wrap">

		<div id="header">
            <div class="top_1">
            	<div class="top_2">
					 <?php if (get_option('mytheme_logo1')!=""): ?>                                  <!--判断语句-->
                        <a href="http://www.yiichen.cn" ><img src=" <?php echo get_option('mytheme_logo1'); ?>" /> </a>                   <!--输出语句-->
                     <?php else : ?>                                                                 <!--否定语句-->
                        <a href="http://www.yiichen.cn" ><img src=" <?php bloginfo('template_url'); ?>/images/logo.jpg" /></a> 
                     <?php endif; ?>                                                                 <!--结束语句-->
                </div>
                <div id="navigation" ><?php wp_nav_menu(array( 'theme_location' => 'header-menu' ) ); ?></div><!--nav-->
            </div>
		</div>

