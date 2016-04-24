<?php get_header(); ?>

<!-- Breadcrumb begin -->
    	<?php include (TEMPLATEPATH . '/breadcrumb.php'); ?>
        <!-- Breadcrumb end -->

<!-- JiaThis Button BEGIN -->
<div class="jiathis_share_slide jiathis_share_32x32" id="jiathis_share_slide">
<div class="jiathis_share_slide_top" id="jiathis_share_title"></div>
<div class="jiathis_share_slide_inner">
<div class="jiathis_style_32x32">
<a class="jiathis_button_weixin"></a>
<a class="jiathis_button_tsina"></a>
<a class="jiathis_button_tqq"></a>
<a class="jiathis_button_renren"></a>
<a class="jiathis_button_qzone"></a>
<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
<script type="text/javascript">
var jiathis_config = {
	slide:{
		divid:'container1',//设定分享按钮的位置在哪个DIV的边缘，一般是主体内容的外层DIV框架ID,
		pos:'left',
		gt:'true'
	}
};
</script>
<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=1394804956105599" charset="utf-8"></script>	
<script type="text/javascript" src="http://v3.jiathis.com/code/jiathis_slide.js" charset="utf-8"></script>
</div></div></div>
<!-- JiaThis Button END -->


<div class="container1">
<!-- Content begin -->
<div class="content1">	

   <!-- SinglePost begin -->
	<div class="single">
	<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
            <h1><?php the_title(); ?></h1>
            <div class="meta singlemeta">
            	<span><?php the_time('Y-m-d H:i'); ?></span>
                <span>编辑: <?php the_author_posts_link(); ?></span>
            <!--    <span>来源: <?php if ( get_post_meta($post->ID, 'from_site_name', true) && get_post_meta($post->ID, 'from_site_url', true) ) { ?>
                    	<a href="<?php echo get_post_meta($post->ID, "from_site_url", true); ?>" target="_blank"><?php echo get_post_meta($post->ID, "from_site_name", true); ?></a>
                    <?php } elseif ( get_post_meta($post->ID, 'from_site_name', true) && get_post_meta($post->ID, 'from_site_url', false) ) {?>
                    	<a href="#" target="_blank"><?php echo get_post_meta($post->ID, "from_site_name", true); ?></a>
					<?php } elseif ( get_post_meta($post->ID, 'from_site_name', false) && get_post_meta($post->ID, 'from_site_url', true) ) {?>
						<a href="<?php echo get_post_meta($post->ID, "from_site_url", true); ?>" target="_blank">网络</a>
					<?php } else {?>
                    	<a href="<?php bloginfo('siteurl');?>/">本站</a></a>
                    <?php } ?>
                </span>
			-->	
                <span>浏览: <?php if(function_exists('the_views')) { the_views(); } ?></span>
                <span class="cmts"><a href="#addcomment"> </a></a><?php comments_popup_link('', '(1条)', '(%条)'); ?></span>
                 
				<?php edit_post_link('编辑本文', '', ''); ?>
            </div>     




<!-- PostContent begin -->
            <div class="entry">
            	<?php if ( get_option('wpyou_if_excerpt') == '0' ) { ?>
                	<p class="summary"><strong>摘要</strong>: <?php echo wpyou_strimwidth(strip_tags(apply_filters('the_content', $post->post_content)), 0, 130,"..."); ?></p>
                <?php } ?>
            	<div class="entrycontent">
                <!-- SingleAd begin -->
					<?php if (get_option('wpyou_ad_single01')) { ?>
                        <div class="ad_single <?php if (get_option('wpyou_ad_single01_align') == '1') { ?>ad_singleleft<?php } elseif (get_option('wpyou_ad_single01_align') == '2') { ?>ad_singleright<?php } else { ?><?php } ?>" <?php if (get_option('wpyou_ad_single01_width')) { ?>style="width:<?php echo get_option('wpyou_ad_single01_width') ?>px;"<?php } ?>>
                            <?php echo get_option('wpyou_ad_single01'); ?>
                            <div class="clear"></div>
                        </div>
                    <?php } ?>
                <!-- SingleAd end -->
                <?php the_content(''); ?>            

                <!-- SingleAd begin -->
				<?php if (get_option('wpyou_ad_single02')) { ?>
                    <div class="ad_single ad_singlebtm <?php if (get_option('wpyou_ad_single02_align') == '1') { ?>ad_singleleft<?php } elseif (get_option('wpyou_ad_single02_align') == '2') { ?>ad_singleright<?php } else { ?><?php } ?>">
                        <?php echo get_option('wpyou_ad_single02'); ?>
                        <div class="clear"></div>
                    </div>
                <?php } ?>
                <!-- SingleAd end -->
            	</div>
            </div>
            <!-- PostContent end -->

            <!-- ContactInfo Begin -->
            <div id="contactInfo">
                <?php $fields = get_fields($post->ID);echo $fields['contactinfo'];?>
            </div>
            <!-- ContactInfo End -->

            <!-- PostFunction begin -->  
            <div class="postmeta">
            	<div class="wpyouvote"><?php if(function_exists('DisplayVotes')) { DisplayVotes(get_the_ID()); } ?></div>
                <div class="clear"></div>
                <?php the_tags('<strong>标签:</strong> ', ', ', ''); ?><br />
                <strong>本文链接:</strong> <a href="<?php the_permalink() ?>" class="underline"><?php the_title(); ?></a><br />
                <strong>版权所有:</strong> 非特殊声明均为本站原创文章，转载请注明出处：<a href="<?php echo get_settings('home'); ?>" class="underline"><?php bloginfo('name'); ?></a><br />
            	<strong>订阅更新:</strong> 您可以通过<a href="<?php if (get_option('wpyou_feed_url')) { ?><?php echo get_option('wpyou_feed_url'); ?><?php } else { ?><?php bloginfo('rss2_url'); } ?>" title="订阅更新" target="_blank" class="underline">RSS订阅我们的内容更新</a>
            </div>
            <!-- PostFunction end -->
            
            <!-- PostTool begin -->
            <div class="posttool">
            	<a href="javascript:void(0)" class="print">打印</a>
                
		<a class="share" href="javascript:void((function(s,d,e){try{}catch(e){}var%20f='http://v.t.sina.com.cn/share/share.php?',u=d.location.href,p=['url=',e(u),'&title=',e(d.title),'&appkey=1392530042'].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));">分享到新浪微博</a>

               <a class="share" href="javascript:void(0)" onclick="{ var _t = encodeURI(document.title);  var _url = encodeURI(window.location); var _appkey = '333cf198acc94876a684d043a6b48e14'; var _site = encodeURI; var _pic = ''; var _u = 'http://v.t.qq.com/share/share.php?title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic; window.open( _u,'转播到腾讯微博', 'width=700, height=580, top=180, left=320, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );  };" >分享到腾讯微博</a>		


				
                <a href="<?php if (get_option('wpyou_feed_url')) { ?><?php echo get_option('wpyou_feed_url'); ?><?php } else { ?><?php bloginfo('rss2_url'); } ?>" title="订阅更新" target="_blank" class="subscribe">RSS订阅</a>
                <a href="javascript:void()" onclick="copyLink('<?php the_permalink() ?>'); return false;" class="copylink" title="复制链接转发分享给更多的朋友">复制链接</a>
            </div>
            <!-- PostTool end -->

            <!-- PageNavigation begin -->
            <div class="clear"></div>
            <div class="postnavi">
                <div class="previous_post"><?php previous_post_link('上一篇: %link') ?></div>
                <div class="next_post"><?php next_post_link('下一篇: %link') ?></div>
            </div>
            <!-- PageNavigation end -->
        <?php endwhile; ?>
    <?php else : ?>
        <!-- Error begin -->
        <div class="error">
            <h4>没有找到您要访问的页面</h4>
            <ol>
                <li>请检查您输入的网址是否正确。</li>
                <li>确认无误有可能我们的页面正在升级或维护。</li>
                <li>您可以尝试访问以下链接。</li>
            </ol>
        </div>
        <!-- Error end -->
    <?php endif; ?>
    </div>
    <!-- SinglePost end -->
    <!-- PostComment begin -->
    	<div class="postcomment"><?php comments_template(); ?></div>
    <!-- PostComment end -->
</div>  
<!-- Content end --> 

<!-- Sidebar begin -->
<?php include (TEMPLATEPATH . '/sidebar.php'); ?>
<!-- Sidebar end -->

</div> 

<?php get_footer(); ?>