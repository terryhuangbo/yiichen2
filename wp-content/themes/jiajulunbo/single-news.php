<?php
/**
 * Template Name: 新闻详情页
 * Description: 
 *
 * @package WordPress
 */
get_header();
$fields = get_fields(496);
?>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny1.css" type="text/css" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny2.css" type="text/css" />
	
<div class="ny1_1">
      <?php if (getVal($fields['news_detail_background']['url'])): ?>                                  <!--判断语句-->
            <div style="background:url(<?php echo getVal($fields['news_detail_background']['url']); ?> ) no-repeat;" class="i1">                                 <!--输出语句-->
      <?php else : ?>                                                                 <!--否定语句-->
            <div style="background:url(<?php bloginfo('template_url'); ?>/images/cp_1.jpg) no-repeat;" class="i1">
      <?php endif; ?>  
           <div class="i2">
                <div class="j1">
                <?php echo getVal($fields['news_detail_entitle'], 'COMPANY NEWS'); ?>  
        </div>
                <div class="j2">
           <?php echo getVal($fields['news_detail_title'], '新闻动态'); ?> 
                </div>
           </div>
           <div class="i3">
              <?php echo getVal($fields['news_detail_desc']); ?> 
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
               <?php echo getVal($fields['news_detail_entitle'], 'COMPANY NEWS'); ?>  
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
                  <?php if (get_option('mytheme_news_2')!=""): ?>                                  <!--判断语句-->
                        <?php echo get_option('mytheme_news_2'); ?>                                 <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                       新闻动态
                   <?php endif; ?>
                    > <?php wp_title(''); ?>
                </div>
                
                <div class="ny2_2">
                     <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                     <div <?php post_class() ?> id="post-<?php the_ID(); ?>">
                           <h2 class="m5"><?php the_title(); ?></h2>
			               <div class="m6">
                                <div class="m7">更新时间：<?php the_time('20y年m月d日 H:i')?></div>
                                <div class="m7">作者：<?php the_author(); ?> </div>
                                <div class="m8">分享：</div>
                                <div class="m9">
                                    <!-- JiaThis Button BEGIN -->
                                    <div id="ckepop">
	                                     <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt" target="_blank">
                                             <img src="http://v3.jiathis.com/code_mini/images/btn/v1/jiathis1.gif" border="0" />
                                         </a>
	                                     <a class="jiathis_counter_style_margin:3px 0 0 2px"></a>
                                    </div>
                                    <script type="text/javascript" src="http://v3.jiathis.com/code_mini/jia.js?uid=1336540570341423" charset="utf-8"></script>
                                <!-- JiaThis Button END -->
                                </div>
                           </div>
                           <div class="entry">
                                <?php the_content(); ?>
                                <?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
                           </div>
                           <div class="m10">
                           <?php if (get_next_post($categoryIDS)) { next_post_link('上一篇: %link','%title',true);} else { echo '上一篇：已是最新文章';} ?>
                           </div>
                           <div class="m10">
                           <?php if (get_previous_post($categoryIDS)) { previous_post_link('下一篇: %link','%title',true);} else { echo '下一篇：已是最后文章';} ?>
                           </div>
                     </div>
                     <?php endwhile; endif; ?>
                </div>
         </div>
         
         <div class="i8">
              <div class="k1">
			             新闻动态
               </div>
               <div class="k2">
                   COMPANY NEWS 
               </div>
               <div class="k3">
                    <?php
                    $cat=get_category_by_slug('company-news'); 
                    $cat_links=get_category_link($cat->term_id); 
                    ?>
                    <?php $posts = get_posts( "category=($cat->term_id)&numberposts=6" ); ?>     
                         <?php if( $posts ) : ?>                                       
                             <?php foreach( $posts as $post ) : setup_postdata( $post ); ?>      
                                <li class="cat-item cat-item-12"><a href="<?php echo get_permalink($post->ID) ?>" target="blank"><?php echo $post->post_title  ?></a></li>
                             <?php endforeach; ?>                                        
                    <?php endif; ?> 
               </div>
               <div class="k4">
                    <?php
                    $cat=get_category_by_slug('company-case'); //获取分类别名为 wordpress 的分类数据
                    $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                    ?> 
                    <div class="l1">
                        案例展示
                    </div>
                    <div class="l2"><a href="<?php echo $cat_links; ?>" target="_blank"><img src="<?php bloginfo('template_url'); ?>/images/about_11.jpg" /></a></div>
               </div>
               <div class="k5">
                    随着更加显示技术愈加完善，以及市场需求不断开拓，拼接屏已经成为液晶屏在电视市场之外的重要增长点。而IPS硬屏的巨大优势，在短时间内也无法被其他竞品所撼动，这也使其成为引领行业发展的风向标。
               </div>
               <div class="k9">
                    <?php
                    $cat=get_category_by_slug('company-case'); //获取分类别名为 wordpress 的分类数据
                    $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                    ?>
                    <?php $posts = get_posts( "category=($cat->term_id)&numberposts=6" ); ?>     
                         <?php if( $posts ) : ?>                                       
                              <ul>
                                 <?php foreach( $posts as $post ) : setup_postdata( $post ); ?>      
                                     <div class="v1">
                                          <a href="<?php echo get_permalink($post->ID) ;?>"  class="case_img" target="blank">
										                      <?php the_post_thumbnail('medium'); ?>
                                          </a>
                                     </div>
							                   <?php endforeach; ?>                                        
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