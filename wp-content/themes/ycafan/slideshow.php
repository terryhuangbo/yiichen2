<div class="slideshow"> 
    <?php if (have_posts()) : ?>
        <div id="showimg">
        	<?php
				if (get_option('wpyou_sliderposts')) { $sliderposts = get_option('wpyou_sliderposts'); } else { $sliderposts = 6; }
					query_posts("caller_get_posts=1&showposts=$sliderposts&meta_key=slider&meta_value=1");
			?>
            <?php while (have_posts()) : the_post(); ?>
        		<?php
					if ( (function_exists('has_post_thumbnail')) && (has_post_thumbnail()) ) {
				?>
					<a href="<?php the_permalink() ?>" title="<?php the_title(); ?>" ><img src="<?php $image = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 294,332 ), false, '' ); echo $image[0];?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" /></a>
				<?php } else {?>
					<a href="<?php the_permalink() ?>" title="<?php the_title(); ?>" ><img src="<?php echo catch_slider_image(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" /></a>
				<?php } ?>
            <?php endwhile;?>
        </div>
        <div class="opacity"></div>
        <div class="operate" id="operate">
        	<?php $i=1; while (have_posts()) : the_post(); ?>
            	<span><?php echo $i; ?></span>
            <?php $i++; endwhile;?>
        </div>
        <ul id="msg">
        	<?php
				if (get_option('wpyou_sliderposts')) { $sliderposts = get_option('wpyou_sliderposts'); } else { $sliderposts = 6; }
					query_posts("caller_get_posts=1&showposts=$sliderposts&meta_key=slider&meta_value=1");
			?>
        	<?php while (have_posts()) : the_post(); ?>    
            	<li><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></li>
            <?php endwhile;?>
        </ul>
    <?php endif;?>
</div>