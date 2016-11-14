<?php get_header(); 
?>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny1.css" type="text/css" />
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny2.css" type="text/css" />



<div class="ny1_1">
      <?php if (get_option('mytheme_news_4')!=""): ?>                                  <!--判断语句-->
            <div style="background:url(<?php echo get_option('mytheme_news_4'); ?>) no-repeat;" class="i1">                                 <!--输出语句-->
      <?php else : ?>                                                                 <!--否定语句-->
            <div style="background:url(<?php bloginfo('template_url'); ?>/images/new_1.jpg) no-repeat;" class="i1">
      <?php endif; ?>  
           <div class="i2">
                <div class="j1">
				   <?php if (get_option('mytheme_news_1')!=""): ?>                                  <!--判断语句-->
                        <?php echo get_option('mytheme_news_1'); ?>                                 <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                       COMPANY NEWS
                   <?php endif; ?>  
				</div>
                <div class="j2">
				   <?php if (get_option('mytheme_news_2')!=""): ?>                                  <!--判断语句-->
                        <?php echo get_option('mytheme_news_2'); ?>                                 <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                       新闻动态
                   <?php endif; ?>  
                </div>
           </div>
           <div class="i3">
                <?php if (get_option('mytheme_case3')!=""): ?>  
                         <?php echo get_option('mytheme_case3'); ?>
                <?php else : ?> 
                     这是示范页面。页面说明文字，它的位置已经设置好，请您在此输入说明文字控制字数。
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
               <?php if (get_option('mytheme_news_1')!=""): ?>                                  <!--判断语句-->
                    <?php echo get_option('mytheme_news_1'); ?>                                 <!--输出语句-->
               <?php else : ?>                                                                 <!--否定语句-->
                    COMPANY NEWS
               <?php endif; ?>  
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
                    > <?php wp_title(''); ?></div>
              <div class="j4">
                   <?php if (get_option('mytheme_news_5')!=""): ?>                                  <!--判断语句-->
                        <img src="<?php echo get_option('mytheme_news_5'); ?>" />                                 <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                       <img src="<?php bloginfo('template_url'); ?>/images/new_2.jpg" />
                   <?php endif; ?> 
              </div>
              <div class="j5">
                   <?php $posts = query_posts($query_string . '&orderby=date&showposts=10'); ?>
                   <?php if( $posts ) : ?>                                        <!--------判断如果有文章-------->
                         <ul>
                            <?php foreach( $posts as $post ) : setup_postdata( $post ); ?>      <!-------------循环开始----------->
                                      <div class="ny2_1">
                                           <div class="m1">
                                                <div class="m2">
                                                     <a href="<?php the_permalink() ?>" target="_blank">
                                                     <?php echo mb_strimwidth(get_the_title(), 0, 60,"...") ?>
                                                     </a>
                                                </div>
                                                <div class="m3"><?php the_time('20y-m-d')?></div>
                                                <div class="m4">
                                                     <a href="<?php the_permalink() ?>" target="_blank">
                                                     <?php echo mb_strimwidth(strip_tags($post->post_content), 0,150,"..."); ?>
                                                     </a>
                                                </div>
                                           </div>
                                      </div>
							  <?php endforeach; ?>                                           <!----------结束循环-------------->
                              <?php else : ?> 
                                      <div class="ny2_1">
                                           <div class="m1">
                                                <div class="m2">
                                                     <a href="#" target="_blank">
                                                     神九天宫24日进行手控交会对接 由男航天员执行
                                                     </a>
                                                </div>
                                                <div class="m3">2012-01-01</div>
                                                <div class="m4">
                                                     <a href="#" target="_blank">
                                                     中国网6月22日讯 6月24日，神舟九号飞船将与天宫一号(微博)实施手控交会对接。这是中国在太空中第一次人工对飞行器运动姿态进行控制，也是神九发射任务的...
                                                     </a>
                                                </div>
                                           </div>
                                      </div>
                                      <div class="ny2_1">
                                           <div class="m1">
                                                <div class="m2">
                                                     <a href="#" target="_blank">
                                                     神九天宫24日进行手控交会对接 由男航天员执行
                                                     </a>
                                                </div>
                                                <div class="m3">2012-01-01</div>
                                                <div class="m4">
                                                     <a href="#" target="_blank">
                                                     中国网6月22日讯 6月24日，神舟九号飞船将与天宫一号(微博)实施手控交会对接。这是中国在太空中第一次人工对飞行器运动姿态进行控制，也是神九发射任务的...
                                                     </a>
                                                </div>
                                           </div>
                                      </div>
                                      <div class="ny2_1">
                                           <div class="m1">
                                                <div class="m2">
                                                     <a href="#" target="_blank">
                                                     神九天宫24日进行手控交会对接 由男航天员执行
                                                     </a>
                                                </div>
                                                <div class="m3">2012-01-01</div>
                                                <div class="m4">
                                                     <a href="#" target="_blank">
                                                     中国网6月22日讯 6月24日，神舟九号飞船将与天宫一号(微博)实施手控交会对接。这是中国在太空中第一次人工对飞行器运动姿态进行控制，也是神九发射任务的...
                                                     </a>
                                                </div>
                                           </div>
                                      </div>
                                      <div class="ny2_1">
                                           <div class="m1">
                                                <div class="m2">
                                                     <a href="#" target="_blank">
                                                     神九天宫24日进行手控交会对接 由男航天员执行
                                                     </a>
                                                </div>
                                                <div class="m3">2012-01-01</div>
                                                <div class="m4">
                                                     <a href="#" target="_blank">
                                                     中国网6月22日讯 6月24日，神舟九号飞船将与天宫一号(微博)实施手控交会对接。这是中国在太空中第一次人工对飞行器运动姿态进行控制，也是神九发射任务的...
                                                     </a>
                                                </div>
                                           </div>
                                      </div>
                                      <div class="ny2_1">
                                           <div class="m1">
                                                <div class="m2">
                                                     <a href="#" target="_blank">
                                                     神九天宫24日进行手控交会对接 由男航天员执行
                                                     </a>
                                                </div>
                                                <div class="m3">2012-01-01</div>
                                                <div class="m4">
                                                     <a href="#" target="_blank">
                                                     中国网6月22日讯 6月24日，神舟九号飞船将与天宫一号(微博)实施手控交会对接。这是中国在太空中第一次人工对飞行器运动姿态进行控制，也是神九发射任务的...
                                                     </a>
                                                </div>
                                           </div>
                                      </div>
                              
                          </ul>
                    <?php endif; ?> 

                    <div class="pager">   <?php par_pagenavi(); ?>  </div>
              </div>
         </div>
         
         <div class="i8">
              <div class="k1">
                   产品展示
               </div>
               <div class="k2">
                   PRODUCT SHOW
               </div>
               <div class="k3">
                    <?php
                    $cat=get_category_by_slug('company-product'); 
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
