<?php
/**
 * Template Name: 语录页
 **/

get_header();
$fields = get_fields($post->ID);
the_post();

?>

    <div id="content-outer" class="content-outer clearfix fix-header-height">
      <div id="content" class="content clearfix">
    <div class="content-header-archive dasheng-header">
      <div class="fullwidth row">
        <i class="ifanr2015 ifanr2015-dasheng"></i>
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
                  <div itemprop="keywords" class="entry-meta-tags">标签：
                      <a href="javaScript:;" rel="tag">马克思主义</a>
                      <a href="javaScript:;" rel="tag">马克思</a>
                      <a href="javaScript:;" rel="tag">恩格斯</a>
                      <a href="javaScript:;" rel="tag">列宁</a>
                      <a href="javaScript:;" rel="tag">毛泽东</a>
                  </div>
                  <div itemprop="articleBody">
                    <?php the_content() ?>
                  </div>
                </div>

              </article><!--end each post-->
              <div class="ifr-article-component row"><div class="likes-and-comments"><a href="javascript:void(0)" id="article-likes" class="footer-item js-ifanr-like" data-id="628269"><i class="ifanr2015 ifanr2015-heart item-icon"></i><span class="js-like-hint like-hint">赞一下</span><span class="js-like-count like-count">1</span></a></div><div class="like-avatars js-like-avatars"></div><div id="sns-buttons" class="row sns-share sns-tools js-sns-tools"><span class="sns-items-wrapper js-ifanr-shares-wrapper"><span class="ifanr-share-tip"><span class="shares-count js-shares-count">0</span>个分享：</span>
        <a href="http://v.t.sina.com.cn/share/share.php?url=http://www.ifanr.com/dasheng/628269&title=进对学校选对专业，年薪千万不是梦" data-share="sina" rel="nofollow" class="js-share-buttons ifanr-share-buttons weibo" id="sina-share" title="分享到新浪微博" target="_blank"><i class="ifanr2015 ifanr2015-xinlangweibo"></i></a>
        <a href="javascript:void(0)" data-post-url="http://www.ifanr.com/dasheng/628269" data-el="share-to-wechat" data-placement="top" data-toggle="popover" rel="nofollow" class="js-share-buttons ifanr-share-buttons weixin" id="wechat-share" title="分享到微信朋友圈"><i class="ifanr2015 ifanr2015-weixin"></i></a>
        <a class="sns-item ifanr-share-buttons twitter" rel="nofollow" data-share="twitter" target="_blank" href="https://twitter.com/intent/tweet?button_hashtag=ifanr&text=进对学校选对专业，年薪千万不是梦&url=http://www.ifanr.com/dasheng/628269"><i class="ifanr2015 ifanr2015-twitter"></i></a>
        <a class="sns-item ifanr-share-buttons linkedin" rel="nofollow" data-share="linkedin" target="_blank" href="https://www.linkedin.com/shareArticle?title=进对学校选对专业，年薪千万不是梦&url=http%3A%2F%2Fwww.ifanr.com%2Fdasheng%2F628269&summary=做深度学习的人工智能博士生，现在一毕业就能拿到 200 到 300 万美金的年收入的 offer，这是有史以来没有发生过的。...&source=ifanr" ga-track="event" ga-event-category="button" ga-event-label="linkedin_share"><i class="ifanr2015 ifanr2015-linkedin"></i></a>
        <a id="J_SendCWB" href="http://www.ifanr.com/api/special/changweibo/index.php?ifr_post_id=628269" rel="nofollow" class="ifanr-share-buttons js-share-buttons btn-long-weibo">发送长微博</a>
        <div class="sns-item more js-share-items-more" href="javascript:void(0);">
          <i class="ifanr2015 ifanr2015-more"></i>
          <a rel="nofollow" class="sns-item ifanr-share-buttons evernote" data-share="evernote" target="_blank" href="http://www.evernote.com/clip.action?url=http://www.ifanr.com/dasheng/628269&title=进对学校选对专业，年薪千万不是梦"><i class="ifanr2015 ifanr2015-evernote"></i></a>
          <a rel="nofollow" class="sns-item ifanr-share-buttons douban" data-share="douban" target="_blank" href="http://www.douban.com/share/service?href=http://www.ifanr.com/dasheng/628269&name=进对学校选对专业，年薪千万不是梦"><i class="ifanr2015 ifanr2015-douban"></i></a>
          <a rel="nofollow" class="sns-item ifanr-share-buttons qqzone" data-share="qqzone" target="_blank" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.ifanr.com/dasheng/628269&title=进对学校选对专业，年薪千万不是梦"><i class="ifanr2015 ifanr2015-qqkongjian"></i></a>
        </div></span></div></div>            </div>
          </div><!-- end post-item-container -->
            </div><!-- END MAIN -->

    <div class="sbl row ">
          </div>

  </div><!-- END FULLWIDTH -->


    
    <div class="article-footer row">
      <div class="fullwidth">
                

<!-- comments-wrapper -->
<div id="comments" class="comments-wrapper" data-cmpt-autofixed-container cmpt-article-footer data-post-id="628269">

  <div data-cmpt-autofixed data-autofixed-follow-to="#comments-box" id="comments-head" class="J_CmtHead post-item-container">
    <div class="post-item-addon comment-count">
      <span class="cmt-number">17</span>
      <span class="cmt-arrow"></span>
    </div>
    <p class="post-title">
      全世界无产者，联合起来！
    </p>
    <a href="javascript:void(0)" class="js-scroll-to">&#8593; 返回文章</a>
  </div>

  <div data-cmpt-comments data-post-id="628269" id="comments-box"
       class="comments-box BoxShadow clearfix">


    
      <div data-cmpt-respond-form data-post-id="628269" id="respond" class="respond clearfix">

        <h2 class="js-reply-title reply-title yahei">回复</h2>

        <div class="js-cancel-comment-reply cancel-comment-reply hide">
          <a rel="nofollow" id="cancel-comment-reply-link" href="javascript:void(0);" class="js-cancel-button reverse-icon"><i class="ifanr2015 ifanr2015-guanbi"></i></a>
        </div>

        <form id="commentform" class="JS_formInFieldLabels js-respond-form">
          
          <div class="comment-form-slide">

            <div id="J_Commenter" class="js-commenter js-not-login hide">

              <p class="comment-form-email">
                <input type="text" placeholder="邮箱 *" autocapitalize="off" name="email" id="email" value="" size="30" aria-required="true"
                       tabindex="1"/>
              </p>

              <p class="comment-form-author">
                <input type="text" placeholder="昵称 *" name="author" id="author" value="" size="30" aria-required="true" tabindex="2"/>
              </p>

              </div>

          </div>

          <p class="comment-form-comment">
            <textarea id="comment" class="js-comment-content" name="comment" cols="45" rows="8" aria-required="true" tabindex="3"></textarea>
          </p>

          <div id="ajax-cmt-loading" class="js-comment-processing hide">
            <img src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/loader/ajax-loader-light.gif" style="vertical-align:middle; margin: 5px 0;">
            正在提交, 请稍候...
          </div>
          <div id="error" class="js-error-msg hide">#</div>


          <div id="J_LoggedIn" class="js-login hide">
            <div class="logged-in-as">
              <div class="avatar-item">
                <img class="js-user-avatar" src="" alt=""/>
              </div>
              <span class="J_UserIdentity"></span>
            </div>
          </div>

          <div class="submit-zone clearfix">
          <p class="login-in-buttons js-not-login hide">
            <span class="J_LoginButtons login-in-button">
              或 <a href="https://sso.ifanr.com/login/" class="link" title="登录" rel="internal">登录</a>&nbsp;|&nbsp;<a
                href="https://sso.ifanr.com/register/" class="link" title="注册" rel="internal">注册</a> 参与评论
            </span>
          </p>

          <p class="form-submit">
            <input name="submit" type="submit" id="submit" value="发表评论" class="button js-comment-submit" tabindex="4"/>
            <input type='hidden' name='comment_post_ID' value='628269' id='comment_post_ID' />
<input type='hidden' name='comment_parent' id='comment_parent' value='0' />
          </p>
          </div>

          <p class="comment_mail_notify js-comment-mail-notify">
    <input type="checkbox" class="js-comment-mail-notifier" name="comment_mail_notify" value="comment_mail_notify" checked="checked" />
    <span class="comment-mail-notify-check comment-mail-notify-checked js-notify-checked"></span>
    <span class="hide comment-mail-notify-check comment-mail-notify-unchecked js-notify-unchecked"></span>
    <label class="js-notify-btn">回复邮件通知</label></p>          <input type="hidden" class="js-cmt-hidden" name="cmt_hidden_js" value="oh"/>

        </form>

      </div>

        <div class="comments-type js-comments-type hide">
      <a href="javascript:;" class="active" data-comment-type="time">时间</a>
      <span>|</span>
      <a href="javascript:;" data-comment-type="hot">热度</a>
    </div>
    <div id="J_commentlist" class="js-comments-list-container comments-list-container">
      <div id="JS_loading" class="js-comments-loading"  style="background: none; display: none;" class="no-ajax load-more-link loading">
        <img height="8" src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/loader/loadingb.gif"/>
      </div>
    </div>

<!--    <a class="all-comments" href="--><!--">查看全部评论</a>-->
  </div><!-- #comments -->
</div><!-- end comments-wrapper -->      </div>
    </div>


</div><!--end content-->
</div><!--end content-outer -->

<!-- 底部 -->
<?php get_footer(); ?>