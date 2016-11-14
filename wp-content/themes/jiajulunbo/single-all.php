<?php get_header();>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny1.css" type="text/css" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny2.css" type="text/css" />



<div class="ny1_1">
      <?php if (get_option('mytheme_Product4')!=""): ?>                                  <!--ÅÐ¶ÏÓï¾ä-->
            <div style="background:url(<?php echo get_option('mytheme_Product4'); ?>) no-repeat;" class="i1">                                 <!--Êä³öÓï¾ä-->
      <?php else : ?>                                                                 <!--·ñ¶¨Óï¾ä-->
            <div style="background:url(<?php bloginfo('template_url'); ?>/images/cp_1.jpg) no-repeat;" class="i1">
      <?php endif; ?>  
           <div class="i2">
                <div class="j1">
				   <?php if (get_option('mytheme_Product1')!=""): ?>                                  <!--ÅÐ¶ÏÓï¾ä-->
                        <?php echo get_option('mytheme_Product1'); ?>                                 <!--Êä³öÓï¾ä-->
                   <?php else : ?>                                                                 <!--·ñ¶¨Óï¾ä-->
                       Product display
                   <?php endif; ?>  
				</div>
                <div class="j2">
				   <?php if (get_option('mytheme_Product2')!=""): ?>                                  <!--ÅÐ¶ÏÓï¾ä-->
                        <?php echo get_option('mytheme_Product2'); ?>                                 <!--Êä³öÓï¾ä-->
                   <?php else : ?>                                                                 <!--·ñ¶¨Óï¾ä-->
                       ²úÆ·ÖÐÐÄ
                   <?php endif; ?>  
                </div>
           </div>
           <div class="i3">
                <?php if (get_option('mytheme_case3')!=""): ?>  
                         <?php echo get_option('mytheme_case3'); ?>
                <?php else : ?> 
                     ÕâÊÇÊ¾·¶Ò³Ãæ¡£Ò³ÃæËµÃ÷ÎÄ×Ö£¬ËüµÄÎ»ÖÃÒÑ¾­ÉèÖÃºÃ£¬ÇëÄúÔÚ´ËÊäÈëËµÃ÷ÎÄ×Ö¿ØÖÆ×ÖÊý¡£
                <?php endif; ?>  
           </div>
      </div>
</div>
<div class="ny1_2">
     <div class="ny1_3">
          <div class="ym1_3">
                    <div class="ym1_4">CONTACT US</div>
                    <div class="ym1_5">TELEPHONE</div>
          </div>
          <div class="ym1_6"><img src="<?php bloginfo('template_url'); ?>/images/sy1_1.gif" /></div>
          <div class="ym1_7">
               <div class="ys1">
                <span class="STYLE1"><?php echo get_option('mytheme_tel'); ?><br><?php echo get_option('mytheme_mobile'); ;?></span>
               </div>
          </div>
          <div class="i4">
               <?php if (get_option('mytheme_news_1')!=""): ?>                                  <!--ÅÐ¶ÏÓï¾ä-->
                    <?php echo get_option('mytheme_news_1'); ?>                                 <!--Êä³öÓï¾ä-->
               <?php else : ?>                                                                 <!--·ñ¶¨Óï¾ä-->
                    Product display
               <?php endif; ?>  
          </div>
          <div class="ym1_8">
              <div class="ss1">Search</div>
              <form action="<?php bloginfo('siteurl'); ?>" id="searchform" method="get">
              <div>
                   <label for="s" class="screen-reader-text">Search for:</label>
                   <input type="text" id="s" name="s" value="ÊäÈë¹Ø¼ü×Ö" />
              </div>
              </form>
          </div>
     </div>
     
     <div class="ny1_4">
          <div class="i5"><img src="<?php bloginfo('template_url'); ?>/images/sy1_3.gif" /></div>
          <div class="i6"></div>
          <div class="i5"><img src="<?php bloginfo('template_url'); ?>/images/sy1_4.gif" /></div>
     </div>
     <div class="ny4_1">
          <div class="o1">
               <div class="o2"><img src="<?php bloginfo('template_url'); ?>/images/cp_3.jpg" /></div>
               <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
               <p>
               <?php the_content(); ?>
               <?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
               </p>
               <?php endwhile; endif; ?>
               <div class="o3">
                    <div class="o4"><?php the_post_thumbnail('large'); ?></div>
                    <div class="o6">
                         <div class="o7"><?php the_title(); ?></div>
                         <?php if (get_post_meta($post->ID, "Ï¸½Ú1",true)): ?>                                  <!--ÅÐ¶ÏÓï¾ä-->
                               <div class="o8"><img src="<?php echo get_post_meta($post->ID, "Ï¸½Ú1",true);?>" /></div>   <!--Êä³öÓï¾ä-->
                         <?php else : ?>                                                                 <!--·ñ¶¨Óï¾ä-->
                         <?php endif; ?>  
                         <?php if (get_post_meta($post->ID, "Ï¸½Ú2",true)): ?>                                  <!--ÅÐ¶ÏÓï¾ä-->
                               <div class="o8"><img src="<?php echo get_post_meta($post->ID, "Ï¸½Ú2",true);?>" /></div>   <!--Êä³öÓï¾ä-->
                         <?php else : ?>                                                                 <!--·ñ¶¨Óï¾ä-->
                         <?php endif; ?> 
                         <?php if (get_post_meta($post->ID, "Ï¸½Ú3",true)): ?>                                  <!--ÅÐ¶ÏÓï¾ä-->
                               <div class="o8"><img src="<?php echo get_post_meta($post->ID, "Ï¸½Ú3",true);?>" /></div>   <!--Êä³öÓï¾ä-->
                         <?php else : ?>                                                                 <!--·ñ¶¨Óï¾ä-->
                         <?php endif; ?>  
                         <?php if (get_post_meta($post->ID, "Ï¸½Ú4",true)): ?>                                  <!--ÅÐ¶ÏÓï¾ä-->
                               <div class="o8"><img src="<?php echo get_post_meta($post->ID, "Ï¸½Ú4",true);?>" /></div>   <!--Êä³öÓï¾ä-->
                         <?php else : ?>                                                                 <!--·ñ¶¨Óï¾ä-->
                         <?php endif; ?>  
                         <div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>
                    </div>
               </div>
               <div class="o5"></div>
          </div>
         
         
         <div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>
     </div>
</div>




<?php get_footer(); ?>