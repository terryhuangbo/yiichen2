<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/footcss.css" type="text/css" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/prettyPhoto.css" type="text/css" media="screen" />
<script src="<?php bloginfo('template_url'); ?>/js/jquery.prettyPhoto.js" type="text/javascript"></script>
		
        
        
        <div id="footer">
            <div class="db1_1"><img src="<?php bloginfo('template_url'); ?>/images/db1_1.jpg" /></div>
            <div class="db1_2">
                 <div class="f1">
                      <div class="g1">CONTACT US</div>
                      <div class="g2">
                           <?php if (get_option('mytheme_tel')!=""): ?>                                  <!--判断语句-->
                                <?php echo get_option('mytheme_tel'); ?>                                <!--输出语句-->
                           <?php else : ?>                                                                 <!--否定语句-->
                                0731-85787193
                           <?php endif; ?>                                                                 <!--结束语句-->
                     </div>
                      <div class="g3">Address:
                           <?php if (get_option('mytheme_add')!=""): ?>                                  <!--判断语句-->
                                <?php echo get_option('mytheme_add'); ?>                                 <!--输出语句-->
                           <?php else : ?>                                                                 <!--否定语句-->
                                湖南省长沙市雨花区劳动中路大华宾馆后门 5楼
                           <?php endif; ?>                                                                 <!--结束语句-->
                      </div>
                 </div>
                 <div class="f2">
                      <div class="g4">SERVICE</div>
                      <div class="g5">
                           <?php if (get_option('mytheme_time')!=""): ?>                                  <!--判断语句-->
                                <?php echo get_option('mytheme_time'); ?>                                 <!--输出语句-->
                           <?php else : ?>                                                                 <!--否定语句-->
                                AM09:00-PM17:30 周末双休
                           <?php endif; ?>   
                      </div>
                      <div class="g6">
                           <?php if (get_option('mytheme_service1')!=""): ?>                                  <!--判断语句-->
                                <div class="q1">
                                <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=<?php echo get_option('mytheme_service1'); ?>&amp;site=qq&amp;menu=yes" target="_blank">     <!--输出语句-->
                                <img src="<?php bloginfo('template_url'); ?>/images/db1_6.jpg" /></a> 
                                </div>
                           <?php else : ?>                                                                 <!--否定语句-->
                                <div class="q1"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=289132406&amp;site=qq&amp;menu=yes" target="_blank">
                                <img src="<?php bloginfo('template_url'); ?>/images/db1_6.jpg" /></a>
                                </div>
                           <?php endif; ?> 
                           
                           <?php if (get_option('mytheme_service2')!=""): ?>                                  <!--判断语句-->
                                <div class="q2">
                                <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=<?php echo get_option('mytheme_service2'); ?>&amp;site=qq&amp;menu=yes" target="_blank">     <!--输出语句-->
                                <img src="<?php bloginfo('template_url'); ?>/images/db1_6.jpg" /></a> 
                                </div>
                           <?php else : ?>                                                                 <!--否定语句-->
                           <?php endif; ?> 
                           
                           <?php if (get_option('mytheme_service3')!=""): ?>                                  <!--判断语句-->
                                <div class="q3">
                                <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=<?php echo get_option('mytheme_service3'); ?>&amp;site=qq&amp;menu=yes" target="_blank">     <!--输出语句-->
                                <img src="<?php bloginfo('template_url'); ?>/images/db1_6.jpg" /></a> 
                                </div>
                           <?php else : ?>                                                                 <!--否定语句-->
                           <?php endif; ?> 
                           
                           <?php if (get_option('mytheme_service4')!=""): ?>                                  <!--判断语句-->
                                <div class="q4">
                                <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=<?php echo get_option('mytheme_service4'); ?>&amp;site=qq&amp;menu=yes" target="_blank">     <!--输出语句-->
                                <img src="<?php bloginfo('template_url'); ?>/images/db1_6.jpg" /></a> 
                                </div>
                           <?php else : ?>                                                                 <!--否定语句-->
                           <?php endif; ?> 
                      </div>
                 </div>
                 <div class="f3">
                      <div class="g7">ABOUT US</div>
                      <li  class="li_left">
                      <div class="g8">
					  <p>
					  <?php 
                              $name = 'about-us'; //page别名
                              global $wpdb;
                              $page_id = $wpdb->get_var("SELECT ID FROM $wpdb->posts WHERE post_name = '$name'");
                              $page_data = get_page( $page_id )->post_content;?>
                              <?php echo   mb_strimwidth(strip_tags($page_data), 0,80,"..."); ?>
                       <a href="<? echo get_page_link( $page_id ); ?>">更多..</a></p>
                      </div>
                 </div>
            </div>
            <div class="db1_3">
                 <div class="f4">
                     <?php if (get_option('mytheme_logo2')!=""): ?>                                  <!--判断语句-->
                        <img src=" <?php echo get_option('mytheme_logo2'); ?>" />                    <!--输出语句-->
                     <?php else : ?>                                                                 <!--否定语句-->
                        <img src="<?php bloginfo('template_url'); ?>/images/db1_8.jpg" />
                     <?php endif; ?>                                                                 <!--结束语句-->
                 </div>
                 <div class="f5 f_b">版权所有 Copyright@ 2012-<?php echo date("Y"); echo " "; bloginfo('name'); ?>                      
                    <br />

                 </div>
            </div>
            <div class="db1_4">
            <?php get_links_list(); ?> 
            </div>
            <div style=" width:940px; margin:auto;"><?php echo get_option('mytheme_analytics'); ?></div>

		</div>

	</div>

	
	<!-- Don't forget analytics -->
	
</body>

</html>
