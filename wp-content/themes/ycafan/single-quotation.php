<?php
/**
 * Template Name: 语录页
 **/

get_header();
$fields = get_fields($post->ID);
the_post();
$tags = $Tool->_value(get_the_tags(), [], true);

?>

    <div id="content-outer" class="content-outer clearfix fix-header-height">
      <div id="content" class="content clearfix">
    <div class="content-header-archive dasheng-header">
      <div class="fullwidth row">
        <i class="iycar2015 iycar2015-dasheng"></i>
        <div class="main row">
          <!-- POST-ITEM -->
          <div class="post-item-container">
            <div class="post-item-content">
              <div class="tag-label">
                 语录
              </div>
              <div class="blockquote-content">
                <h1>
                  <p class="content"><?php echo $Tool->_value($fields['quotation_brief']) ?></p>
                  <p class="author">——
                      <?php echo $Tool->_value($fields['quotation_author']) ?>
                  </p>
                </h1>
              </div>
            </div>
          </div><!-- END POST-ITEM -->
        </div>
              </div>
    </div>

    <div class="fullwidth row container-main article-wrapper">

      <div itemscope itemtype="http://schema.org/Article" class="main main-dasheng js-scrollto-stop" cmpt-article-contents data-post-id="628269"><!-- begin main -->
        <meta itemprop="description" content="<?php echo $Tool->_value($fields['quotation_brief']) ?>" />
        <meta itemprop="author" content="<?php echo $Tool->_value($fields['quotation_author']) ?>" />
        <meta itemprop="datePublished" datetime="2016-03-04T03:34:00+0000" />
                  <!-- post-item-container -->
          <div id="article-wrapper" data-cmpt-autofixed-container class="post-item-container row">
            <a data-cmpt-autofixed data-autofixed-follow-to=".js-article-wrapper" data-jump-to href="#comments" class="post-item-addon comment-count js-jump-to-comments">
              <span itemprop="commentCount" class="cmt-number">17</span>
              <span class="cmt-arrow"></span>
            </a>
            <div class="post-item-content">
              <article id="post-628269" class="js-article-wrapper clearfix">
                <div class="entry-header">
                  <h1 itemprop="headline" class="entry-name">
                    <?php the_title() ?>
                  </h1>
                </div>
                <div id="entry-content" class="entry-content">
                  <div itemprop="keywords" class="entry-meta-tags">
                  <?php if($tags): ?>标签：<?php endif ?>
                      <?php foreach($tags as $tag): ?>
                        <a href="javaScript:;" rel="tag"><?php echo $tag->name ?></a>
                      <?php endforeach ?>
                  </div>
                  <div itemprop="articleBody">
                    <?php the_content() ?>
                  </div>
                </div>

              </article><!--end each post-->
              <!-- 评论模块-->
            <?php if(intval(get_option('comment-open')) == 1):?>
                <?php comments_template() ;?>
            <?php else:?>
                <div class="o-single-content__body__content" id="comments">
                    <div id="article-comments" class="c-article-comments " data-component="ArticleCommentsComponent"
                         data-post-id="654732">
                        <h5 class="c-card-category c-article-comments__headline">评论已经关闭</h5>
                    </div>
                </div>
            <?php endif?>

  </div>
</div>

   </div>
  </div>


</div><!--end content-->
</div><!--end content-outer -->

<!-- 底部 -->
<?php get_footer(); ?>