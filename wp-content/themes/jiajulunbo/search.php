<?php get_header(); ?>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny1.css" type="text/css" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny2.css" type="text/css" />



<div class="ny1_1">
          <div style="background:url(<?php bloginfo('template_url'); ?>/images/ss_5.jpg) no-repeat;" class="i1">
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
               <div class="ys1"><span class="STYLE1">
                    <?php if (get_option('mytheme_tel2')!=""): ?>                                  <!--判断语句-->
                         <?php echo get_option('mytheme_tel2'); ?>                                 <!--输出语句-->
                    <?php else : ?>                                                                 <!--否定语句-->
                         0731
                    <?php endif; ?>   
               </span><br />
                    <?php if (get_option('mytheme_tel3')!=""): ?>                                  <!--判断语句-->
                         <?php echo get_option('mytheme_tel3'); ?>                                 <!--输出语句-->
                    <?php else : ?>                                                                 <!--否定语句-->
                         85787193
                    <?php endif; ?> 
               </div>
          </div>
          <div class="i4">
             Web search
          </div>
          <div class="ym1_8">
              <div class="ss1">Search</div>
              <form action="<?php bloginfo('siteurl'); ?>" id="searchform" method="get">
              <div>
                   <label for="s" class="screen-reader-text">Search for:</label>
                   <input type="text" id="s" name="s" value="输入关键字" />
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
         <div class="s1">
              <?php $posts = query_posts($query_string . '&orderby=date&showposts=5'); ?>
              <?php if (have_posts()) : ?>
              <div class="s2"><img src="<?php bloginfo('template_url'); ?>/images/ss_1.jpg" /></div>
		      <?php while (have_posts()) : the_post(); ?>
              <div class="s3" id="post-<?php the_ID(); ?>">
                   <div class="s4"><a href="<?php the_permalink() ?>" target="_blank"><?php the_post_thumbnail('thumbnail'); ?></a></div>
                   <div class="s5">
                       <h2><a href="<?php the_permalink() ?>" target="_blank"><?php echo mb_strimwidth(get_the_title(), 0, 64,"...") ?></a></h2>
                       <div class="s6">
                            <div class="s7">更新时间:<?php the_time('20y年m月d日 H:i')?>　　发布者:<?php the_author(); ?></div>
                                <div class="s8"><a href="<?php the_permalink() ?>">—— View details ——</a></div>
                       </div>
                       <div class="entry">
				        <?php echo mb_strimwidth(strip_tags($post->post_content), 0,410,"..."); ?>
                       </div>
                   </div>
              </div>
              <div class="s9"></div>
			  <?php endwhile; ?>
			  <?php else : ?>
              <h2 class="s10">没有找到相应结果</h2>
			  <?php endif; ?>
              <div class="pager">   <?php par_pagenavi(); ?>  </div>
              
         </div>
         <div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>
     </div>
</div>


<?php get_footer(); ?>
