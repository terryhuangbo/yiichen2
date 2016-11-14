<?php get_header(); ?>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny1.css" type="text/css" />



<div class="ny1_1">
      <?php if (get_post_meta($post->ID, "页面顶部大图",true)): ?>                                  <!--判断语句-->
          <div style="background:url(<?php echo get_post_meta($post->ID, "页面顶部大图",true);?>) no-repeat;" class="i1">                           <!--输出语句-->
      <?php else : ?>                                                                 <!--否定语句-->
          <div style="background:url(<?php bloginfo('template_url'); ?>/images/about_2.jpg) no-repeat;" class="i1">
      <?php endif; ?>  
           <div class="i2">
                <div class="j1">
				   <?php if (get_post_meta($post->ID, "页面英文名称",true)): ?>                                  <!--判断语句-->
                        <?php echo get_post_meta($post->ID, "页面英文名称",true);?>                               <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                        Demonstration
                   <?php endif; ?>  
				</div>
                <div class="j2">
				   <?php if (get_post_meta($post->ID, "页面中文名称",true)): ?>                                  <!--判断语句-->
                        <?php echo get_post_meta($post->ID, "页面中文名称",true);?>                           <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                        演示页面
                   <?php endif; ?>  
                </div>
           </div>
           <div class="i3">
		        <?php if (get_post_meta($post->ID, "页面说明文字",true)): ?>                                  <!--判断语句-->
                     <?php echo mb_strimwidth (get_post_meta($post->ID, "页面说明文字",true), 0, 110,"...");?>                           <!--输出语句-->
                <?php else : ?>                                                                 <!--否定语句-->
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
               <?php if (get_post_meta($post->ID, "页面英文名称",true)): ?>                                  <!--判断语句-->
                    <?php echo get_post_meta($post->ID, "页面英文名称",true);?>                               <!--输出语句-->
               <?php else : ?>                                                                 <!--否定语句-->
                    Demonstration
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
                  <?php
                  if($post->post_parent) {
                  $parent_title = get_the_title($post->post_parent);
                  echo $parent_title;
                  } else {
                  wp_title('');
                  }
              ?> > <?php wp_title(''); ?></div>
              <div class="j4">
                   <?php if (get_post_meta($post->ID, "页面内容图片地址",true)): ?>                                  <!--判断语句-->
                      <img src="<?php echo get_post_meta($post->ID, "页面内容图片地址",true);?>" />                             <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                      <img src="<?php bloginfo('template_url'); ?>/images/about_6.jpg" />
                   <?php endif; ?> 
              </div>
              <div class="j5">
                   <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                          <div class="entry">
                         <?php the_content(); ?>
                         <?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
                         </div>
                    <?php endwhile; endif; ?>
              </div>
              <div class="j6">
                   <?php if (get_post_meta($post->ID, "简洁介绍图片1",true)): ?>                                  <!--判断语句-->
                   <div class="j7">
                       <div class="j9"><img src="<?php echo get_post_meta($post->ID, "简洁介绍图片1",true);?>" /></div>
                       <div class="j10"><?php echo get_post_meta($post->ID, "简洁介绍标题1",true);?></div>
                       <div class="12"><?php echo get_post_meta($post->ID, "简洁介绍文字1",true);?></div>
                   </div>                            <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                   <?php endif; ?> 
                   
                   <?php if (get_post_meta($post->ID, "简洁介绍图片2",true)): ?>                                  <!--判断语句-->
                   <div class="j8">
                       <div class="j9"><img src="<?php echo get_post_meta($post->ID, "简洁介绍图片2",true);?>" /></div>
                       <div class="j10"><?php echo get_post_meta($post->ID, "简洁介绍标题2",true);?></div>
                       <div class="12"><?php echo get_post_meta($post->ID, "简洁介绍文字2",true);?></div>
                   </div>                            <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                   <?php endif; ?> 
                   
                   <?php if (get_post_meta($post->ID, "简洁介绍图片3",true)): ?>                                  <!--判断语句-->
                   <div class="j8">
                       <div class="j9"><img src="<?php echo get_post_meta($post->ID, "简洁介绍图片3",true);?>" /></div>
                       <div class="j10"><?php echo get_post_meta($post->ID, "简洁介绍标题3",true);?></div>
                       <div class="12"><?php echo get_post_meta($post->ID, "简洁介绍文字3",true);?></div>
                   </div>                            <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                   <?php endif; ?> 
              </div>
              
         </div>
         <div class="i8">
              <div class="k1">
			      <?php
                  if($post->post_parent) {
                  $parent_title = get_the_title($post->post_parent);
                  echo $parent_title;
                  } else {
                  wp_title('');
                  }
                  ?>
               </div>
               <div class="k2">
			       <?php if (get_post_meta($post->ID, "页面英文名称",true)): ?>                                  <!--判断语句-->
                       <?php echo get_post_meta($post->ID, "页面英文名称",true);?>                               <!--输出语句-->
                   <?php else : ?>                                                                             <!--否定语句-->
                       Demonstration
                   <?php endif; ?>  
               </div>
               <div class="k3">
			       <?php
                    if($post->post_parent)
                    $children = wp_list_pages("title_li=&child_of=".$post->post_parent."&echo=0");
                    else
                    $children = wp_list_pages("title_li=&child_of=".$post->ID."&echo=0");
                    if ($children) {
                    echo '<ul>';
                    echo $children;
                    echo '</ul>';
                    } ?>
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
