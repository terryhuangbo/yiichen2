<?php
/**
 * Template Name: 首页
 * Description: 
 *
 * @package WordPress
 */
get_header();
//获取当前文章 
$post = get_post(); 
$fields = get_fields($post->ID);
$product_list = getVal($fields['index_product_zone']);
$case_list = getVal($fields['index_case_zone']);
$banner_list = getVal($fields['index_banner_zone'], []);
$news = array_shift(getVal($fields['index_news_zone'], []));
$video = getVal($fields['index_video_zone']);
//首页显示字符
$caralen = 36;
?>
<!--全屏轮播---->
<script src="<?php bloginfo('template_url'); ?>/qplb/cufon-yui.js" type="text/javascript"></script>
<script src="<?php bloginfo('template_url'); ?>/qplb/ChunkFive_400.font.js" type="text/javascript"></script>
<script src="<?php bloginfo('template_url'); ?>/qplb/jquery.easing.1.3.js"  type="text/javascript"></script>
<script src="<?php bloginfo('template_url'); ?>/qplb/qplbjs.js" type="text/javascript"></script>
<script type="text/javascript">
$(function() {
  var $pxs_container  = $('#pxs_container');
  $pxs_container.parallaxSlider();
});
</script>
        
<div id="pxs_container" class="pxs_container">
   <div class="pxs_loading">Loading images...</div>
      <div class="pxs_slider_wrapper">
        <ul class="pxs_slider">
          <?php foreach( $banner_list as $banner ) :  ?>  
                  <!------ 背景图-------->
                  <li style="background:url(<?php echo getVal($banner['index_banner_background']['url']); ?>) center repeat-x;">
                  
                  <!-- 焦点图 -->
                  <a href="<?php echo getVal($banner['index_banner_link']); ?>" target="black" title="<?php echo getVal($banner['index_banner_alt']); ?>">
                    <img src="<?php echo getVal($banner['index_banner_focus']['url']); ?>" />
                  </a>
                </li>                  
          <?php endforeach ?>  
                     
        </ul>
        <div class="pxs_navigation">
          <span class="pxs_next"></span>
          <span class="pxs_prev"></span>
        </div>
        <div class="ys11">
          <ul class="pxs_thumbnails" style="display: none;">
          <?php foreach( $banner_list as $banner ) :  ?>  
            <li class="ys1"><img src="<?php bloginfo('template_url'); ?>/images/b/bx1.gif"/></li>
          <?php endforeach ?>  
          </ul>
        </div>
      </div>
</div>
<div class="ym1_1">    
     
     <div class="ym1_2">
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
          <div class="ym1_8">
              <div class="ss1"></div>
              <form action="<?php bloginfo('siteurl'); ?>" id="searchform" method="get">
              <div>
                   <label for="s" class="screen-reader-text">Search for:</label>
                   <input type="text" id="s" name="s" placeholder="输入关键字" value="" />
              </div>
              </form>
          </div>
     </div>
     <div class="ym1_9">
          <div class="b1"><img src="<?php bloginfo('template_url'); ?>/images/sy1_3.gif" /></div>
          <div class="b2"></div>
          <div class="b1"><img src="<?php bloginfo('template_url'); ?>/images/sy1_4.gif" /></div>
     </div>
     <div class="ym1_10">
          <div class="b3">
          
               <div class="c1">
               
                 <div class="c2">
                         <div class="c3"><a class="z1">LATEST NEWS</a><a class="z2">新闻动态</a></div>
                         <div class="c4"><img src="<?php bloginfo('template_url'); ?>/images/sy1_9.jpg" /></div>
                 </div>
                 <div class="c5">
                     <?php if (getVal($news['index_news_cover']['url'])!=""): ?>                                  <!--判断语句-->
                        <img src=" <?php echo getVal($news['index_news_cover']['url']); ?>" />                    <!--输出语句-->
                     <?php else : ?>                                                                 <!--否定语句-->
                        <img src="<?php bloginfo('template_url'); ?>/images/t1.jpg" />
                     <?php endif; ?>    
                 </div>
                    <div class="c6">
                    <?php
                    $cat=get_category_by_slug('reco-index'); //获取分类别名为 wordpress 的分类数据
                    $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                    ?>
                         <?php if( $posts ) : ?>                                        <!--------判断如果有文章-------->
                              <ul>
                                 <?php foreach( getVal($news['index_news_post'], []) as $post ) : setup_postdata( $post ); ?>      <!-------------循环开始----------->
                                     <li>
                                       <h1 class="c7">
                                        <a href="<?php the_permalink() ?>" target="_blank"><?php echo mb_strimwidth(get_the_title(), 0, 34,"...") ?></a>
                                       </h1>
                                       <p class="c8"><?php echo mb_strimwidth(strip_tags($post->post_content), 0,110,"..."); ?></p>
                                       <p class="c9"><a href="<?php the_permalink() ?>" target="_blank">——查看</a></p> 
                                     </li>
                   <?php endforeach; ?>                                                <!----------结束循环-------------->
                                 <?php else : ?>
                                     <li>
                                       <h1 class="c7">
                                        <a href="#" target="_blank">神九航天员在轨健康状况良好</a>
                                       </h1>
                                       <p class="c8">　　昨日6时18分，在北京航天飞行控制中心的精确控制下，天宫一号(微博)与神舟九号组合体在太空中进行了第一次姿态调整...</p>
                                       <p class="c9"><a href="#" target="_blank">——查看</a></p> 
                                     </li>
                             </ul>
                    <?php endif; ?> 
                 </div>
               </div>
               <div class="c10">
                    <div class="c11" style="background:url(<?php echo getVal($news['index_news_toppic']['url']); ?>)  no-repeat scroll 0% 0%;">
                       <?php
                       $cat=get_category_by_slug('company-news'); //获取分类别名为 wordpress 的分类数据
                       $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                       ?>
                       <a href="<?php echo $cat_links; ?>" target="_blank">更多详情</a>
                    </div>
                    
                   <?php $posts = get_posts( "category=($cat->term_id&numberposts=5" ); ?>      
                         <?php if( $posts ) : ?>                                        
                              <ul>
                                 <?php foreach( $posts as $post ) : setup_postdata( $post ); ?>      <!-------------循环开始----------->
                                      <div class="c12"><li><a href="<?php the_permalink() ?>"target="_blank">
                       <?php echo mb_strimwidth(get_the_title(), 0, 38,"...") ?><br />
                                         时间：<?php the_time('20y-m-d')?>
                                      </a></li></div>
                   <?php endforeach; ?>                                           <!----------结束循环-------------->
                                 <?php else : ?> 
                                      <div class="c12"><li><a href="#"target="_blank">神九将搭载三人升空 在轨十天无太空行...<br />时间：2012-06-15</a></li></div>
                                      <div class="c12"><li><a href="#"target="_blank">神九将搭载三人升空 在轨十天无太空行...<br />时间：2012-06-15</a></li></div>
                                      <div class="c12"><li><a href="#"target="_blank">神九将搭载三人升空 在轨十天无太空行...<br />时间：2012-06-15</a></li></div>
                                      <div class="c12"><li><a href="#"target="_blank">神九将搭载三人升空 在轨十天无太空行...<br />时间：2012-06-15</a></li></div>
                                      <div class="c12"><li><a href="#"target="_blank">神九将搭载三人升空 在轨十天无太空行...<br />时间：2012-06-15</a></li></div>
                             </ul>
                    <?php endif; ?> 
                    <div class="c13">01<br />02<br />03<br />04<br />05</div>
                    
               </div>  
               
          </div>
          
          <div class="b4">
               <div class="d1">
                    <div class="z3">
                          <?php
                          $cat=get_category_by_slug('company-case'); //获取分类别名为 wordpress 的分类数据
                          $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                          ?>
                          <a href="<?php echo $cat_links; ?>" target="_blank">查看我们的案例>></a>
                    </div>
               </div>
               
               <div class="d2">
                    <?php if ($video!=""): ?>                                  <!--判断语句-->
                        <embed src="<?php echo $video ; ?>" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="263" height="184"></embed>                  <!--输出语句-->
                     <?php else : ?>  
                        <embed src="http://www.tudou.com/v/erkBKFcFKDQ/&resourceId=0_04_05_99/v.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="263" height="184"></embed>
                     <?php endif; ?>   
               </div>
          </div>
     </div>

     <!-- 案例展示 -->
    <div class="ym1_11">
          <div class="e1">
               <li class="z4">CASE INTRODUCTION</li>
               <li class="t1"><img src="<?php bloginfo('template_url'); ?>/images/sy1_18.jpg" /></li>
               <li class="z5">案例介绍</li>
          </div>
          <div class="e2">
                <?php
                          $cat=get_category_by_slug('company-product'); //获取分类别名为 wordpress 的分类数据
                          $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                ?>
               <a href="<?php echo $cat_links; ?>" target="_blank"><img border="0" src="<?php bloginfo('template_url'); ?>/images/sy1_19.jpg" /></a>
          </div>
     </div>
     <div class="ym1_12">
          <div class="e3">
               <?php
               $cat=get_category_by_slug('company-product'); //获取分类别名为 wordpress 的分类数据
               $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
               ?> 
               <div class="e4">                   
                 <?php foreach( array_slice($case_list, 0, 5) as $post ) : setup_postdata( $post ); ?>      
                                      <li>
                                          <a href="<?php the_permalink() ?>" target="_blank"><?php the_post_thumbnail('thumbnail'); ?></a>
                                          <div class="e5"><a href="<?php the_permalink() ?>" target="_blank"><?php echo mb_strimwidth(get_the_title(), 0, $caralen,"...") ?></a></div>
                                          <div class="e6"></div>
                                     </li>
                 <?php endforeach; ?>                                            
             </ul>
           </div>
          </div>
     </div>
     <?php if(count(array_slice($case_list, 5, 5))):?>
     <div class="ym1_12">
          <div class="e3">
               <?php
               $cat=get_category_by_slug('company-product'); //获取分类别名为 wordpress 的分类数据
               $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
               ?> 
               <div class="e4">                   
                 <?php foreach( array_slice($case_list, 5, 5) as $post ) : setup_postdata( $post ); ?>      
                                      <li>
                                          <a href="<?php the_permalink() ?>" target="_blank"><?php the_post_thumbnail('thumbnail'); ?></a>
                                          <div class="e5"><a href="<?php the_permalink() ?>" target="_blank"><?php echo mb_strimwidth(get_the_title(), 0, $caralen,"...") ?></a></div>
                                          <div class="e6"></div>
                                     </li>
                 <?php endforeach; ?>                                            
             </ul>
           </div>
          </div>
     </div>
    <?php endif ;?>
    <?php if(count(array_slice($case_list, 10, 5))):?>
     <div class="ym1_12">
          <div class="e3">
               <?php
               $cat=get_category_by_slug('company-product'); //获取分类别名为 wordpress 的分类数据
               $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
               ?> 
               <div class="e4">                   
                 <?php foreach( array_slice($case_list, 10, 5) as $post ) : setup_postdata( $post ); ?>      
                                      <li>
                                          <a href="<?php the_permalink() ?>" target="_blank"><?php the_post_thumbnail('thumbnail'); ?></a>
                                          <div class="e5"><a href="<?php the_permalink() ?>" target="_blank"><?php echo mb_strimwidth(get_the_title(), 0, $caralen,"...") ?></a></div>
                                          <div class="e6"></div>
                                     </li>
                 <?php endforeach; ?>                                            
             </ul>
           </div>
          </div>
     </div>
     <?php endif ;?>

      <!-- 产品展示 -->   
     <div class="ym1_11">
          <div class="e1">
               <li class="z4">PRODUCT DISPLAY</li>
               <li class="t1"><img src="<?php bloginfo('template_url'); ?>/images/sy1_18.jpg" /></li>
               <li class="z5">产品展示</li>
          </div>
          <div class="e2">
                <?php
                          $cat=get_category_by_slug('company-product'); //获取分类别名为 wordpress 的分类数据
                          $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
                ?>
               <a href="<?php echo $cat_links; ?>" target="_blank"><img border="0" src="<?php bloginfo('template_url'); ?>/images/sy1_19.jpg" /></a>
          </div>
     </div>
     <div class="ym1_12">
          <div class="e3">
               <?php
               $cat=get_category_by_slug('company-product'); //获取分类别名为 wordpress 的分类数据
               $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
               ?> 
               <div class="e4">                   
                 <?php foreach( array_slice($product_list, 0, 5) as $post ) : setup_postdata( $post ); ?>      
                                      <li>
                                          <a href="<?php the_permalink() ?>" target="_blank"><?php the_post_thumbnail('thumbnail'); ?></a>
                                          <div class="e5"><a href="<?php the_permalink() ?>" target="_blank"><?php echo mb_strimwidth(get_the_title(), 0, $caralen,"...") ?></a></div>
                                          <div class="e6"></div>
                                     </li>
                 <?php endforeach; ?>                                            
             </ul>
           </div>
          </div>
     </div>

     <?php if(count(array_slice($product_list, 5, 5))):?>
     <div class="ym1_12">
          <div class="e3">
               <?php
               $cat=get_category_by_slug('company-product'); //获取分类别名为 wordpress 的分类数据
               $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
               ?> 
               <div class="e4">                   
                 <?php foreach( array_slice($product_list, 5, 5) as $post ) : setup_postdata( $post ); ?>      
                                      <li>
                                          <a href="<?php the_permalink() ?>" target="_blank"><?php the_post_thumbnail('thumbnail'); ?></a>
                                          <div class="e5"><a href="<?php the_permalink() ?>" target="_blank"><?php echo mb_strimwidth(get_the_title(), 0, $caralen,"...") ?></a></div>
                                          <div class="e6"></div>
                                     </li>
                 <?php endforeach; ?>                                            
             </ul>
           </div>
          </div>
     </div>
     <?php endif ;?>
    <?php if(count(array_slice($product_list, 10, 5))):?>
     <div class="ym1_12">
          <div class="e3">
               <?php
               $cat=get_category_by_slug('company-product'); //获取分类别名为 wordpress 的分类数据
               $cat_links=get_category_link($cat->term_id); // 通过$cat数组里面的分类id获取分类链接
               ?> 
               <div class="e4">                   
                 <?php foreach( array_slice($product_list, 10, 5) as $post ) : setup_postdata( $post ); ?>      
                                      <li>
                                          <a href="<?php the_permalink() ?>" target="_blank"><?php the_post_thumbnail('thumbnail'); ?></a>
                                          <div class="e5"><a href="<?php the_permalink() ?>" target="_blank"><?php echo mb_strimwidth(get_the_title(), 0, $caralen,"...") ?></a></div>
                                          <div class="e6"></div>
                                     </li>
                 <?php endforeach; ?>                                            
             </ul>
           </div>
          </div>
     </div>
    <?php endif ;?>
    
    



</div>


<?php get_footer(); ?>
