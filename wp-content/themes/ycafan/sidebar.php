<?php wp_reset_query(); ?>
<div class="sidebar">
    <ul>
        <?php if ( get_option('wpyou_mostviews_mode') == '0' ) { ?>
            <li class="mostviews archivemostviews">
            <h3><?php _e('最多关注'); ?><span><?php _e('全部'); ?></span><span><?php _e('本月'); ?></span><span class="mon"><?php _e('本周'); ?></span></h3>
            <ul id="mostall">
                <?php query_posts("v_sortby=views&caller_get_posts=1&orderby=date&v_orderby=desc&showposts=10") ?>
                  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                      <li><a href="<?php the_permalink() ?>" title="<?php the_title() ?>" 
                      target="_blank"><?php the_title() ?></a></li>
                  <?php endwhile; ?>
                <?php endif; ?>
            </ul>
            <ul id="mostmonth">
                <?php function mostmonth($where = '') {
                    //posts in the last 30 days
                    $where .= " AND post_date > '" . date('Y-m-d', strtotime('-30 days')) . "'";
                    return $where;
                  }
                add_filter('posts_where', 'mostmonth'); ?>
                <?php query_posts("v_sortby=views&caller_get_posts=1&orderby=date&v_orderby=desc&showposts=10") ?>
                  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                      <li><a href="<?php the_permalink() ?>" title="<?php the_title() ?>" target="_blank"><?php the_title() ?></a></li>
                  <?php endwhile; ?>
                <?php endif; ?>
            </ul>
            <ul id="mostweek">
                <?php function mostweek($where = '') {
                    //posts in the last 30 days
                    $where .= " AND post_date > '" . date('Y-m-d', strtotime('-7 days')) . "'";
                    return $where;
                  }
                add_filter('posts_where', 'mostweek'); ?>
                <?php query_posts("v_sortby=views&caller_get_posts=1&orderby=date&v_orderby=desc&showposts=10") ?>
                  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                      <li><a href="<?php the_permalink() ?>" title="<?php the_title() ?>" target="_blank"><?php the_title() ?></a></li>
                  <?php endwhile; ?>
                <?php endif; ?>
            </ul>
        </li>
        <?php } ?>
        <?php wp_reset_query(); ?>
        <?php if ( function_exists('dynamic_sidebar')&& dynamic_sidebar(3)) : else : ?>
            <li>
                <h3><?php _e('最新文章'); ?></h3>
                <ul>
                    <?php
                     global $post;
                     $recentposts = get_posts('caller_get_posts=1&numberposts=10');
                     foreach($recentposts as $post) :
                    ?>
                        <li><a href="<?php the_permalink(); ?>" title="<?php the_title() ?>" 
                        target="_blank"><?php the_title(); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </li>
            <li>
                <h3><?php _e('推荐'); ?></h3>
                <ul>
                    <?php
                        global $post;
                        $sticky = get_option('sticky_posts');
                        rsort( $sticky );
                        $sticky = array_slice( $sticky, 0, 10);
                        $stickypost = array( 'post__in' => $sticky,'caller_get_posts' => 1,'numberposts' => 10,'orderby'=>date,'order'=>DESC );
                        $stickyposts = get_posts($stickypost);
                        foreach($stickyposts as $post) :
                    ?>
                        <li><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" 
                        target="_blank"><?php the_title(); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </li>
            <li class="widget_recent_comments">
                <h3><?php _e('最新评论'); ?></h3>
                <?php
                    global $wpdb;
                    $sql = "SELECT DISTINCT ID, post_title, post_password, comment_ID,
                    comment_post_ID, comment_author, comment_date_gmt, comment_approved,
                    comment_type,comment_author_email,comment_author_url,
                    SUBSTRING(comment_content,1,30) AS com_excerpt
                    FROM $wpdb->comments
                    LEFT OUTER JOIN $wpdb->posts ON ($wpdb->comments.comment_post_ID =
                    $wpdb->posts.ID)
                    WHERE comment_approved = '1' AND comment_type = '' AND
                    post_password = ''
                    ORDER $wpdb comment_date_gmt DESC
                    LIMIT 10";
                    $comments = $wpdb->get_results($sql);
                    $output = $pre_HTML;
                    $output .= "\n<ul>";
                    foreach ($comments as $comment) {
                    $output .= "\n<li><a href=\"" . $comment->comment_author_url . "\" alt=\"" .
                    strip_tags($comment->comment_author) . "\" title=\"" .
                    strip_tags($comment->comment_author) . "\">" . get_avatar( $comment->comment_author_email , '30' )
                    ."</a> " . "<a href=\"" . $comment->comment_author_url . "\" alt=\"" .
                    strip_tags($comment->comment_author) . "\" title=\"" .
                    strip_tags($comment->comment_author) . "\"><strong>" . strip_tags($comment->comment_author)
                    ."</strong></a><br />" . "<a href=\"" . get_permalink($comment->ID) .
                    "#comment-$comment->ID" . $comment->comment_content . "\" title=\"" .
                    $comment->post_title . "\">" . strip_tags($comment->com_excerpt)
                    ."</a></li>";
                    }
                    $output .= "\n</ul>";
                    $output .= $post_HTML;
                    echo $output;
                ?>
            </li>
            <li class="widget_text widget_tag_cloud">
                <h3><?php _e('标签云'); ?></h3>
                <div><?php wp_tag_cloud('smallest=12&largest=16&number=40&unit=px&orderby=count&order=DESC'); ?></div>
            </li>
           <!-- <li class="widget_text">
                <h3><?php _e('网站统计'); ?></h3>
                <div class="statlist">
                    <strong>会员总数</strong>: <?php $users = $wpdb->get_var("SELECT COUNT(ID) FROM $wpdb->users"); echo $users; ?> 位<br />
                    <strong>文章总数</strong>: <?php $count_posts = wp_count_posts();echo $published_posts = $count_posts->publish;?> 篇<br />
                    <strong>评论总数</strong>: <?php $count_comments = get_comment_count();echo $count_comments['approved'];?> 个<br />
                </div>
            </li>  -->
        <?php endif; ?>
    </ul>
</div>
<?php wp_reset_query(); ?>