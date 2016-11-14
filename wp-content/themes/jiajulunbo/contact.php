<?php  
/* 
Template Name:contact
*/  
?> 



<?php get_header(); ?>
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/ny1.css" type="text/css" />



<div class="ny1_1">
      <?php if (get_post_meta($post->ID, "页面顶部大图",true)): ?>                                  <!--判断语句-->
          <div style="background:url(<?php echo get_post_meta($post->ID, "页面顶部大图",true);?>) no-repeat;" class="i1">                           <!--输出语句-->
      <?php else : ?>                                                                 <!--否定语句-->
          <div style=" background:url(<?php bloginfo('template_url'); ?>/images/contact_1.jpg) no-repeat;" class="i1">
      <?php endif; ?>  
           <div class="i2">
                <div class="j1">
				   <?php if (get_post_meta($post->ID, "页面英文名称",true)): ?>                                  <!--判断语句-->
                        <?php echo get_post_meta($post->ID, "页面英文名称",true);?>                               <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                        contact us
                   <?php endif; ?>  
				</div>
                <div class="j2">
				   <?php if (get_post_meta($post->ID, "页面中文名称",true)): ?>                                  <!--判断语句-->
                        <?php echo get_post_meta($post->ID, "页面中文名称",true);?>                           <!--输出语句-->
                   <?php else : ?>                                                                 <!--否定语句-->
                        联系我们
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
                    contact us
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
                      <img src="<?php bloginfo('template_url'); ?>/images/contact_2.jpg" />
                   <?php endif; ?> 
              </div>
              <div class="r1">
                   <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                          <div class="entry">
                         <?php the_content(); ?>
                         <?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
                         </div>
                    <?php endwhile; endif; ?>
              </div>
              <div class="r2"><?php comments_template(); ?></div>
              <div class="r6"></div>
              
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
                       contact us
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
               <div class="r7"></div>
               <div class="r8">
                    <h3>公司地址:</h3>
                    <p>
                        <?php if (get_option('mytheme_add')!=""): ?>                                  <!--判断语句-->
                                <?php echo get_option('mytheme_add'); ?>                                 <!--输出语句-->
                           <?php else : ?>                                                                 <!--否定语句-->
                                湖南省长沙市雨花区劳动中路大华宾馆后门 5楼
                           <?php endif; ?> 
                    </p>
                    <h3>公司电话:</h3>
                    <p>
					    <?php if (get_option('mytheme_tel')!=""): ?>                                  <!--判断语句-->
                                <?php echo get_option('mytheme_tel'); ?>                                <!--输出语句-->
                           <?php else : ?>                                                                 <!--否定语句-->
                                0731-85787193
                        <?php endif; ?>     
                    </p>
                    <h3>公司传真:</h3>
                    <p>
                         <?php if (get_option('mytheme_contact1')!=""): ?>                                  <!--判断语句-->
                                <?php echo get_option('mytheme_contact1'); ?>                                 <!--输出语句-->
                           <?php else : ?>                                                                 <!--否定语句-->
                                0731-12345678 0731-14785236
                           <?php endif; ?> 
                    </p>
                    <h3>公司邮箱:</h3>
                    <p>
                           <?php if (get_option('mytheme_contact2')!=""): ?>                                  <!--判断语句-->
                                <?php echo get_option('mytheme_contact2'); ?>                                 <!--输出语句-->
                           <?php else : ?>                                                                 <!--否定语句-->
                                online@xxxxxx.com.cn
                           <?php endif; ?> 
                    </p>
               </div>
               <div class="r7"></div>
               <div class="r8">
                    <div class="r9"><img src="<?php bloginfo('template_url'); ?>/images/lyb_5.jpg" /></div>
                    <div class="r10">AM09:00-PM17:30周末双休</div>
               </div>
               <div class="r11">
                    <div class="r12">在线客服</div>
                    <?php if (get_option('mytheme_service1')!=""): ?>                                  <!--判断语句-->
                    <div class="r13">
                         <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=<?php echo get_option('mytheme_service1'); ?>&amp;site=qq&amp;menu=yes" target="_blank">
                              <img src="<?php bloginfo('template_url'); ?>/images/qq2.jpg" />
                         </a>
                    </div>
                    <?php else : ?>                                                                 <!--否定语句-->
                    <div class="r13">
                         <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=289132406&amp;site=qq&amp;menu=yes" target="_blank">
                              <img src="<?php bloginfo('template_url'); ?>/images/qq2.jpg" />
                         </a>
                    </div>
                    <?php endif; ?> 
                    
                    <?php if (get_option('mytheme_service2')!=""): ?>                                  <!--判断语句-->
                    <div class="r14">
                         <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=<?php echo get_option('mytheme_service2'); ?>&amp;site=qq&amp;menu=yes" target="_blank">
                              <img src="<?php bloginfo('template_url'); ?>/images/qq2.jpg" />
                         </a>
                    </div>
                    <?php else : ?>                                                                 <!--否定语句-->
                    <?php endif; ?> 
                    
                    <?php if (get_option('mytheme_service3')!=""): ?>                                  <!--判断语句-->
                    <div class="r15">
                         <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=<?php echo get_option('mytheme_service3'); ?>&amp;site=qq&amp;menu=yes" target="_blank">
                              <img src="<?php bloginfo('template_url'); ?>/images/qq2.jpg" />
                         </a>
                    </div>
                    <?php else : ?>                                                                 <!--否定语句-->
                    <?php endif; ?> 
                    
                    <?php if (get_option('mytheme_service4')!=""): ?>                                  <!--判断语句-->
                    <div class="r13">
                         <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=<?php echo get_option('mytheme_service4'); ?>&amp;site=qq&amp;menu=yes" target="_blank">
                              <img src="<?php bloginfo('template_url'); ?>/images/qq2.jpg" />
                         </a>
                    </div>
                    <?php else : ?>                                                                 <!--否定语句-->
                    <?php endif; ?> 
               </div>
               <div class="r7"></div>
               <div class="r16">
                    <?php if (get_option('mytheme_contact3')!=""): ?>                                  <!--判断语句-->
                    <div class="r13">
                        <a href="http://map.baidu.com/?newmap=1&s=s%26wd%3D<?php echo get_option('mytheme_contact3'); ?>%26c%3D131/?iframe=true&amp;width=80%&amp;height=100%" rel="prettyPhoto[iframe]">
                           <img src="<?php bloginfo('template_url'); ?>/images/lyb_6.jpg" />
                        </a>
                    </div>
                    <?php else : ?>                                                               <!--否定语句-->
                        <a href="http://map.baidu.com/?newmap=1&s=s%26wd%3D湖南省长沙市雨花区劳动西华都%26c%3D131/?iframe=true&amp;width=80%&amp;height=100%" rel="prettyPhoto[iframe]">
                           <img src="<?php bloginfo('template_url'); ?>/images/lyb_6.jpg" />
                        </a>
                    <?php endif; ?> 
                    <script type="text/javascript">
						 $(document).ready(function() {
						 $("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false});
						 });
			        </script>
               </div>
         </div>
         
         
         <div style="font: 0px/0px sans-serif;clear: both;display: block"> </div>
     </div>
</div>



<?php get_footer(); ?>
