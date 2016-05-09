<?php
/**
 * Template Name: 文章页
 **/

get_header();
$cat = array_shift(get_the_category());
the_post();

?>

<div id="content-outer" class="content-outer clearfix fix-header-height">
<div id="content" class="content clearfix">

<div class="fullwidth row container-main article-wrapper">
    <div class="filled-white"></div>

    <div class="main js-scrollto-stop" cmpt-article-contents data-post-id="<?php the_ID() ?>"><!-- begin main -->
        <?php
        $_head_img = $Tool->_get_img_from_html(get_the_content(), 'http');
        ?>
        <?php if ($_head_img != 'http'): ?>
            <div class="post-item-container">
                <div class="post-item-addon"></div>
                <div class="post-item-content full-image">
                    <img src="<?php echo $_head_img ?>" alt="深度的文章、优雅的讨论、赚钱的作者，这些是 Medium 的妄想还是未来？"/>
                </div>
            </div>
        <?php endif ?>

        <!-- post-item-container -->
        <div id="article-wrapper" class="post-item-container row" data-cmpt-autofixed-container>
            <a data-cmpt-autofixed data-autofixed-follow-to=".js-article-wrapper" data-jump-to href="#comments"
               class="post-item-addon comment-count js-jump-to-comments">
                <span class="cmt-number" itemprop="commentCount">0</span>
                <span class="cmt-arrow"></span>
            </a>

            <div class="post-item-content">
                <!-- start of article -->
                <article itemscope itemtype="http://schema.org/Article" id="post-<? the_ID() ?>"
                         class="clearfix js-article-wrapper">
                    <div class="entry-header">
                        <a class="tag-label-cate" href="<?php echo get_category_link($cat->term_id) ?>"><i
                                class="ifanr2015 ifanr2015-chanpin01 icon-book"></i><?php echo $cat->name ?></a>

                        <h1 itemprop="headline" class="entry-name"><?php the_title() ?></h1>

                        <div class="tag-label">
                            <a href="http://www.ifanr.com/author/huangmeijing" title="Posts by <?php the_author() ?>"
                               rel="author"><?php the_author() ?></a><span class="seperator">|</span>
                            <span itemprop="datePublished"
                                  datetime="2016-03-04T09:57:36+0000"><?php echo $Tool->_get_diff_date(strtotime(get_the_time('Y-m-d H:i:s'))) ?></span>
                            <meta itemprop="author" content="<?php the_author() ?>"/>
                            <meta itemprop="thumbnailUrl"
                                  content="http://images.ifanr.cn/wp-content/uploads/2016/03/writing.jpg"/>
                        </div>
                    </div>

                    <div id="entry-content" class="entry-content">
                        <div itemprop="keywords" class="entry-meta-tags">标签：<?php get_the_tag_list('', '|', '') ?>
                            <div itemprop="articleBody">
                                <?php the_content(); ?>
                            </div>
                        </div>
                </article>
                <!-- end of article -->
                <div class="ifr-article-component row">
                    <div class="likes-and-comments">
                        <a href="javascript:void(0)" id="article-likes" class="footer-item js-ifanr-like"
                           data-id="628698">
                            <i class="ifanr2015 ifanr2015-heart item-icon"></i>
                            <span class="js-like-hint like-hint">赞一下</span>
                            <span class="js-like-count like-count">3</span>
                        </a>
                    </div>
                    <div class="like-avatars js-like-avatars"></div>
                    <div id="sns-buttons" class="row sns-share sns-tools js-sns-tools">
                        <span class="sns-items-wrapper js-ifanr-shares-wrapper">
                            <span class="ifanr-share-tip">
                                <span class="shares-count js-shares-count">0</span>个分享：
                            </span>
                            <a href="http://v.t.sina.com.cn/share/share.php?url=http://www.ifanr.com/628698&title=深度的文章、优雅的讨论、赚钱的作者，这些是 Medium 的妄想还是未来？"
                               data-share="sina" rel="nofollow" class="js-share-buttons ifanr-share-buttons weibo"
                               id="sina-share" title="分享到新浪微博" target="_blank"><i
                                    class="ifanr2015 ifanr2015-xinlangweibo"></i></a>
                            <a href="javascript:void(0)" data-post-url="http://www.ifanr.com/628698"
                               data-el="share-to-wechat" data-placement="top" data-toggle="popover" rel="nofollow"
                               class="js-share-buttons ifanr-share-buttons weixin" id="wechat-share" title="分享到微信朋友圈"><i
                                    class="ifanr2015 ifanr2015-weixin"></i></a>
                            <a class="sns-item ifanr-share-buttons twitter" rel="nofollow" data-share="twitter"
                               target="_blank"
                               href="https://twitter.com/intent/tweet?button_hashtag=ifanr&text=深度的文章、优雅的讨论、赚钱的作者，这些是 Medium 的妄想还是未来？&url=http://www.ifanr.com/628698"><i
                                    class="ifanr2015 ifanr2015-twitter"></i></a>
                            <a class="sns-item ifanr-share-buttons linkedin" rel="nofollow" data-share="linkedin"
                               target="_blank" href="https://www.linkedin.com/shareArticle?title=深度的文章、优雅的讨论、赚钱的作者，这些是 Medium 的妄想还是未来？&url=http%3A%2F%2Fwww.ifanr.com%2F628698&summary=
                                早在很久以前，有人告诉我：鱼的记忆只有 7 秒，7 秒之后它就不会记得曾经的事情了，所有的一切又都会变成崭新的开始。
                                而在这个打开微信就有几十个公众号更新、各种新闻客户端轮番推送轰炸、人人都是自...&source=ifanr" ga-track="event"
                               ga-event-category="button" ga-event-label="linkedin_share"><i
                                    class="ifanr2015 ifanr2015-linkedin"></i></a>
                            <a id="J_SendCWB"
                               href="http://www.ifanr.com/api/special/changweibo/index.php?ifr_post_id=628698"
                               rel="nofollow" class="ifanr-share-buttons js-share-buttons btn-long-weibo">发送长微博</a>
                            <div class="sns-item more js-share-items-more" href="javascript:void(0);">
                                <i class="ifanr2015 ifanr2015-more"></i>
                                <a rel="nofollow" class="sns-item ifanr-share-buttons evernote" data-share="evernote"
                                   target="_blank"
                                   href="http://www.evernote.com/clip.action?url=http://www.ifanr.com/628698&title=深度的文章、优雅的讨论、赚钱的作者，这些是 Medium 的妄想还是未来？"><i
                                        class="ifanr2015 ifanr2015-evernote"></i></a>
                                <a rel="nofollow" class="sns-item ifanr-share-buttons douban" data-share="douban"
                                   target="_blank"
                                   href="http://www.douban.com/share/service?href=http://www.ifanr.com/628698&name=深度的文章、优雅的讨论、赚钱的作者，这些是 Medium 的妄想还是未来？"><i
                                        class="ifanr2015 ifanr2015-douban"></i></a>
                                <a rel="nofollow" class="sns-item ifanr-share-buttons qqzone" data-share="qqzone"
                                   target="_blank"
                                   href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.ifanr.com/628698&title=深度的文章、优雅的讨论、赚钱的作者，这些是 Medium 的妄想还是未来？"><i
                                        class="ifanr2015 ifanr2015-qqkongjian"></i></a>
                            </div>
                        </span>
                    </div>

                    <div class="clearfix"></div>
                    <div class="author-profile-wrapper">
                        <div class="author-profile row">
                            <div class="author-profile-face">
                                <img class="gravatar"
                                     src="http://images.ifanr.cn/wp-content/uploads/2015/11/huangmeijing_meitu_1.jpg"
                                     width="50" height="50"/>
                            </div>
                            <div class="author-profile-info-wrapper">
                                <div class="author-profile-text">
                                    <h2 class="js-post-author-name"><a
                                            href="http://www.ifanr.com/author/huangmeijing"><?php the_author() ?></a>
                                    </h2>
                                    <span class="seperator">|</span>

                                    <p class="job">编辑</p>
                                    <span class="homepage"><a
                                            href="http://www.ifanr.com/author/huangmeijing">作者主页</a></span>
                                </div>
                                <p class="description">Work hard, play hard.</p>
                                <ul class="author-profile-list">
                                    <li><a rel="external" href="mailto:huangmeijing@ifanr.com">邮箱</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="banner_post_bottom clearfix">
                        <a href="http://go.ifanr.cn/1T">
                            <img src="http://images.ifanr.cn/wp-content/uploads/2016/02/zhuzhanzhengwen.jpg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- end post-item-container -->

    </div>
    <!-- end main -->


    <!--begin sidebar left-->
    <div id="sbl" data-cmpt-autofixed-container class="sbl js-single-post-sidebar">

        <div id="ifanr_side_jiong_widget-81" class="widget-container widget_ifanr_jiong_new clearfix">
            <div class="ifanr-text-content">
                <a id="video" rel="external" href="http://go.ifanr.cn/1S"><img
                        src="http://images.ifanr.cn/wp-content/uploads/2016/02/cebianlan.jpg"/></a>
            </div>
        </div>
        <div id="ifanr_side_jiong_widget-80" class="widget-container widget_ifanr_jiong_new clearfix">
            <div class="ifanr-text-content">
                <a id="video" rel="external" href="http://www.ifanr.com/about/contribute"><img
                        src="http://images.ifanr.cn/wp-content/uploads/2015/10/seeking-reports.jpg"/></a>
            </div>
        </div>
        <div data-cmpt-autofixed data-autofixed-follow-to=".js-article-wrapper">
            <div id="author-latest-posts" data-author-id="2875"
                 data-author-link="http://www.ifanr.com/author/huangmeijing"
                 class="widget-ifr ifr-post-list-widget author-latest-posts widget-container clearfix"></div>


            <div id="mail-subscribe" class="widget-ifr ifr-subscribe widget-container clearfix" style="display: none">
                <div id="mc_embed_signup" class="clearfix">
                    <form
                        action="http://ifanr.us2.list-manage.com/subscribe/post?u=f770959951cdcc1bba7ab56cb&amp;id=258559241a"
                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                        target="_blank">
                        <div class="widget-header">
                            <label for="mce-EMAIL">爱范消息 | Exploring Leading Tech</label>
                        </div>
                        <div class="widget-contents clearfix">
                            <p>轻量、专注的消息，关注移动互联网、创投、智能设备的新鲜资讯。需各种邀请码，也请加入列表。</p>

                            <div class="ifr-input-group">
                                <input type="email" value="" name="EMAIL" class="ifr-input email-input" id="mce-EMAIL"
                                       placeholder="填写邮箱，订阅我们">
                                <input type="submit" value="订阅" name="subscribe" id="mc-embedded-subscribe"
                                       class="ifr-input email-submit">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    <!--end sidebar left-->


</div>
<!-- end fullwidth -->


<div class="article-footer row">
    <div class="fullwidth">


        <!-- comments-wrapper -->
        <div id="comments" class="comments-wrapper" data-cmpt-autofixed-container cmpt-article-footer
             data-post-id="628698">

            <div data-cmpt-autofixed data-autofixed-follow-to="#comments-box" id="comments-head"
                 class="J_CmtHead post-item-container">
                <div class="post-item-addon comment-count">
                    <span class="cmt-number">0</span>
                    <span class="cmt-arrow"></span>
                </div>
                <p class="post-title">
                    全世界无产者，联合起来！ </p>
                <a href="javascript:void(0)" class="js-scroll-to">&#8593; 返回文章</a>
            </div>

            <div data-cmpt-comments data-post-id="628698" id="comments-box"
                 class="comments-box BoxShadow clearfix">


                <div data-cmpt-respond-form data-post-id="628698" id="respond" class="respond clearfix">

                    <h2 class="js-reply-title reply-title yahei">回复</h2>

                    <div class="js-cancel-comment-reply cancel-comment-reply hide">
                        <a rel="nofollow" id="cancel-comment-reply-link" href="javascript:void(0);"
                           class="js-cancel-button reverse-icon"><i class="ifanr2015 ifanr2015-guanbi"></i></a>
                    </div>

                    <form id="commentform" class="JS_formInFieldLabels js-respond-form">

                        <div class="comment-form-slide">

                            <div id="J_Commenter" class="js-commenter js-not-login hide">


                                <p class="comment-form-email">
                                    <input type="text" placeholder="邮箱 *" autocapitalize="off" name="email" id="email"
                                           value="" size="30" aria-required="true"
                                           tabindex="1"/>
                                </p>

                                <p class="comment-form-author">
                                    <input type="text" placeholder="昵称 *" name="author" id="author" value="" size="30"
                                           aria-required="true" tabindex="2"/>
                                </p>

                            </div>

                        </div>

                        <p class="comment-form-comment">
                            <textarea id="comment" class="js-comment-content" name="comment" cols="45" rows="8"
                                      aria-required="true" tabindex="3"></textarea>
                        </p>

                        <div id="ajax-cmt-loading" class="js-comment-processing hide">
                            <img
                                src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/loader/ajax-loader-light.gif"
                                style="vertical-align:middle; margin: 5px 0;">
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
                                <input name="submit" type="submit" id="submit" value="发表评论"
                                       class="button js-comment-submit" tabindex="4"/>
                                <input type='hidden' name='comment_post_ID' value='628698' id='comment_post_ID'/>
                                <input type='hidden' name='comment_parent' id='comment_parent' value='0'/>
                            </p>
                        </div>

                        <p class="comment_mail_notify js-comment-mail-notify">
                            <input type="checkbox" class="js-comment-mail-notifier" name="comment_mail_notify"
                                   value="comment_mail_notify" checked="checked"/>
                            <span
                                class="comment-mail-notify-check comment-mail-notify-checked js-notify-checked"></span>
                            <span
                                class="hide comment-mail-notify-check comment-mail-notify-unchecked js-notify-unchecked"></span>
                            <label class="js-notify-btn">回复邮件通知</label>
                        </p>
                        <input type="hidden" class="js-cmt-hidden" name="cmt_hidden_js" value="oh"/>

                    </form>

                </div>

                <div class="comments-type js-comments-type hide">
                    <a href="javascript:;" class="active" data-comment-type="time">时间</a>
                    <span>|</span>
                    <a href="javascript:;" data-comment-type="hot">热度</a>
                </div>
                <div id="J_commentlist" class="js-comments-list-container comments-list-container">
                    <div id="JS_loading" class="js-comments-loading" style="background: none; display: none;"
                         class="no-ajax load-more-link loading">
                        <img height="8"
                             src="http://cdnzz.ifanr.com/wp-content/themes/ifanr-2.0/static/images/common/loader/loadingb.gif"/>
                    </div>
                </div>

                <!--    <a class="all-comments" href="--><!--">查看全部评论</a>-->
            </div>
            <!-- #comments -->
        </div>
        <!-- end comments-wrapper -->      </div>
</div>

<script>
    ns.chatroomId = 0;    // Should be undefined
</script>

<!-- 上下篇文章 -->
<div class="prevnext-post" data-id="628698"></div>

</div>
<!--end content-->
</div><!--end content-outer -->

<!-- 底部 -->
<?php get_footer(); ?>
