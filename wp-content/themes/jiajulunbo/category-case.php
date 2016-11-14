<?php 
get_header();
$fields = get_fields(416);

?>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny1.css" type="text/css" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny2.css" type="text/css" />

<div class="ny1_1">
      <?php if (getVal($fields['case_detail_background']['url'])): ?>                                  <!--判断语句-->
            <div style="background:url(<?php echo getVal($fields['case_detail_background']['url']); ?> ) no-repeat;" class="i1">                                 <!--输出语句-->
      <?php else : ?>                                                                 <!--否定语句-->
            <div style="background:url(<?php bloginfo('template_url'); ?>/images/cp_1.jpg) no-repeat;" class="i1">
      <?php endif; ?>  
           <div class="i2">
                <div class="j1">
                <?php echo getVal($fields['case_detail_entitle'], 'PRODUCT SHOW'); ?>  
        </div>
                <div class="j2">
           <?php echo getVal($fields['case_detail_title'], '产品中心'); ?> 
                </div>
           </div>
           <div class="i3">
              <?php echo getVal($fields['case_detail_desc']); ?> 
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
               <?php echo getVal($fields['case_detail_entitle'], 'PRODUCT SHOW'); ?>  
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
          <div class="o1">
               <div class="o2"><img src="<?php bloginfo('template_url'); ?>/images/al1_1.jpg" /></div>
          </div>
          <div class="q1"></div>
          <div class="q2">
               <?php $posts = query_posts($query_string . '&orderby=date&showposts=9'); ?>
               <?php if( $posts ) : ?>                                        
                         <ul>
                            <?php foreach( $posts as $post ) : setup_postdata( $post ); ?>      
                                   <div class="q3">
                                        <a href="<?php echo the_permalink() ?>" target="blank" class="case_img">
                                          <?php the_post_thumbnail('medium'); ?>
                                        </a>
                                        <div class="q4"><h1><a href="<?php echo the_permalink() ?>" target="blank"><?php echo mb_strimwidth(get_the_title(), 0, 38,"...") ?></a></h1></div>
                                   </div>
							               <?php endforeach; ?>                                           
                          </ul>
                    <?php endif; ?> 
                <div class="pager">   <?php par_pagenavi(); ?>  </div>
          </div>
         
         <div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>
     </div>
</div>



<?php get_footer(); ?>


