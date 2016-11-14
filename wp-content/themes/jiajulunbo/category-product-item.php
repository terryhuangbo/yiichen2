<?php 
/**
 * Template Name: 产品列表页
 * Description: 
 *
 * @package WordPress
 */

get_header(); 
$fields = get_fields(575);
?>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny1.css" type="text/css" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny2.css" type="text/css" />



<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny1.css" type="text/css" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny2.css" type="text/css" />

<div class="ny1_1">
      <?php if (getVal($fields['product_detail_background']['url'])): ?>                                  <!--判断语句-->
            <div style="background:url(<?php echo getVal($fields['product_detail_background']['url']); ?> ) no-repeat;" class="i1">                                 <!--输出语句-->
      <?php else : ?>                                                                 <!--否定语句-->
            <div style="background:url(<?php bloginfo('template_url'); ?>/images/cp_1.jpg) no-repeat;" class="i1">
      <?php endif; ?>  
           <div class="i2">
                <div class="j1">
                <?php echo getVal($fields['product_detail_entitle'], 'PRODUCT SHOW'); ?>  
        </div>
                <div class="j2">
           <?php echo getVal($fields['product_detail_title'], '产品中心'); ?> 
                </div>
           </div>
           <div class="i3">
              <?php echo getVal($fields['product_detail_desc']); ?> 
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
               <?php echo getVal($fields['product_detail_entitle'], 'PRODUCT SHOW'); ?>  
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
     <div class="ny1_5">
         <div class="i7">
              <div class="j3"><a href="<?php bloginfo('url'); ?>" target="_top">首页</a> > 
                  <?php if (get_option('mytheme_Product2')!=""): ?>                                  <!--判断语句-->
                        <?php echo get_option('mytheme_Product2'); ?>                                 <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                       产品中心
                   <?php endif; ?> > <?php wp_title(''); ?>
              </div>
              <div class="ny3_1" style="background:url(<?php if (get_option('mytheme_Product5')!=""): ?>
        <?php echo get_option('mytheme_Product5'); ?>                             
                   <?php else : ?>                                                                 
                       <?php bloginfo('template_url'); ?>/images/cp_2.jpg
                   <?php endif; ?>);">
                   <div class="n1">
                   <?php if (get_option('mytheme_Product2')!=""): ?>                                  <!--判断语句-->
                        <?php echo get_option('mytheme_Product2'); ?>                                 <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                       产品中心
                   <?php endif; ?>
                   </div>
              </div>
              <div class="ny3_2">
                   <h1><?php wp_title(''); ?></h1>
                   <p><?php echo category_description(); ?></p>
              </div>
              <div class="ny3_3">
          <?php $posts = query_posts($query_string . '&orderby=date&showposts=9'); ?>
                  <?php if( $posts ) : ?>                                        <!--------判断如果有文章-------->
                         <ul>
                            <?php foreach( $posts as $post ) : setup_postdata( $post ); ?>      <!-------------循环开始----------->
                                   <div class="n2">
                                        <div class="n3"><a href="<?php the_permalink() ?>" target="_blank"><?php the_post_thumbnail('thumbnail'); ?></a></div>
                                        <h2 class="n4">
                                            <a href="<?php the_permalink() ?>" target="_blank">
                                               <?php echo mb_strimwidth(get_the_title(), 0, 25,"...") ?>
                                            </a>
                                        </h2>
                                   </div>
                              <?php endforeach; ?>                                        <!----------结束循环-------------->
                              
                          </ul>
                    <?php endif; ?> 
                    <div class="pager">   <?php par_pagenavi(); ?>  </div>
              </div>
              
         </div>
         
         <div class="i8">
              <div class="k1">                                                            <!--否定语句-->
                 <?php if (get_option('mytheme_Product2')!=""): ?>                                  <!--判断语句-->
                        <?php echo get_option('mytheme_Product2'); ?>                                 <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                       产品中心
                   <?php endif; ?>  
               </div>
               <div class="k2">
                   <?php if (get_option('mytheme_Product1')!=""): ?>                                  <!--判断语句-->
                        <?php echo get_option('mytheme_Product1'); ?>                                 <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                       Product display
                   <?php endif; ?>  
               </div>
               <div class="k3">
                    <?php
                    $cat=get_category_by_slug('company-product'); //获取分类别名为 wordpress 的分类数据
                    $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                    echo  wp_list_categories("child_of=".$cat->term_id."&depth=0&hide_empty=0&title_li=");
                    ?>
               </div>
               <div class="k4">
                    <?php
                    $cat=get_category_by_slug('company-case'); //获取分类别名为 wordpress 的分类数据
                    $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                    ?> 
                    <div class="l1">
                           <?php if (get_option('mytheme_yczs_1')!=""): ?>                                  <!--判断语句-->
                                <?php echo get_option('mytheme_yczs_1'); ?>                                 <!--输出语句-->
                           <?php else : ?>                                                                 <!--否定语句-->
                                默认标题
                           <?php endif; ?>  
                    </div>
                    <div class="l2"><a href="<?php echo $cat_links; ?>" target="_blank"><img src="<?php bloginfo('template_url'); ?>/images/about_11.jpg" /></a></div>
               </div>
               <div class="k5">
                    <?php if (get_option('mytheme_yczs_2')!=""): ?>                                  <!--判断语句-->
                        <?php echo get_option('mytheme_yczs_2'); ?>                                 <!--输出语句-->
                    <?php else : ?>                                                                 <!--否定语句-->
                        这是示范文字。为介绍说明文字，它的位置已经设置好，请您可以再后台输入与您相对应的说明文字，自动替换这段文字。
                     <?php endif; ?>  
               </div>
               <div class="k9">
                    <?php
                    $cat=get_category_by_slug('company-case'); //获取分类别名为 wordpress 的分类数据
                    $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                    ?>
                    <?php $posts = get_posts( "category=($cat->term_id)&numberposts=6" ); ?>       <!----------4为分类ID，1为调用数量--------------> 
                         <?php if( $posts ) : ?>                                        <!--------判断如果有文章-------->
                              <ul>
                                 <?php foreach( $posts as $post ) : setup_postdata( $post ); ?>      <!-------------循环开始----------->
                                     <div class="v1">
                                          <a href="<?php global $post; echo   $url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>" rel="lightbox[set_3]" class="case_img">
                      <?php the_post_thumbnail('medium'); ?>
                                          </a>
                                     </div>
                   <?php endforeach; ?>                                        <!----------结束循环-------------->
                                 <?php else : ?>
                                     <div class="v1">
                                          <a href="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" rel="lightbox[set_3]" class="case_img">
                      <img src="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" />
                                          </a>
                                     </div>
                                     <div class="v1">
                                          <a href="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" rel="lightbox[set_3]" class="case_img">
                      <img src="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" />
                                          </a>
                                     </div>
                                     <div class="v1">
                                          <a href="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" rel="lightbox[set_3]" class="case_img">
                      <img src="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" />
                                          </a>
                                     </div>
                                     <div class="v1">
                                          <a href="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" rel="lightbox[set_3]" class="case_img">
                      <img src="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" />
                                          </a>
                                     </div>
                                     <div class="v1">
                                          <a href="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" rel="lightbox[set_3]" class="case_img">
                      <img src="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" />
                                          </a>
                                     </div>
                                     <div class="v1">
                                          <a href="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" rel="lightbox[set_3]" class="case_img">
                      <img src="<?php bloginfo('template_url'); ?>/images/cp/al1.jpg" />
                                          </a>
                                     </div>
                             </ul>
                    <?php endif; ?> 
               </div>
               <div class="k10">
                      <?php 
                      $name = 'contact'; //page别名
                      global $wpdb;
                      $page_id = $wpdb->get_var("SELECT ID FROM $wpdb->posts WHERE post_name = '$name'");
                      $page_data = get_page( $page_id )->post_content;
                      ?><a href="<? echo get_page_link( $page_id ); ?>"><img src="<?php bloginfo('template_url'); ?>/images/about_12.jpg" /></a>
                      </div>
         </div>
         
         
         <div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>
     </div>
</div>



<?php get_footer(); ?>
