<?php
/**
 * The template for displaying Comments
 *
 * The area of the page that contains comments and the comment form.
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

/*
 * If the current post is protected by a password and the visitor has not yet
 * entered the password we will return early without loading the comments.
 */
if ( post_password_required() ) {
    return;
}
$commenter = wp_get_current_commenter();
?>
<div class="o-single-content__body__content">
    <div id="article-comments" class="c-article-comments " data-component="ArticleCommentsComponent"
         data-post-id="654732">
        <h5 class="c-card-category c-article-comments__headline">文章评论(<span
                class="js-placeholder-comments-counter">12</span>)
        </h5>

        <div class="c-article-comments-item is-unauthenticated js-article-comments-post-field">
            <img class="c-article-comments-item__avatar js-user-avatar" src="" alt="">

            <div class="c-article-comments-item__info">
                <form id="publish_form" class="c-article-comments-form is-unauthenticated js-article-comments-post-form">
                    <div class="c-article-comments-form__headline">回复
                        <button type="button" class="c-article-comments-form__close js-close-reply-form"></button>
                    </div>
                    <input class="c-article-comments-form__input c-article-comments-form__user required"  type="email" name="from_email" placeholder="你的邮箱*" required>
                    <input class="c-article-comments-form__input c-article-comments-form__user required" type="text" name="from_author" placeholder="你的昵称*" required>
                    <div class="c-article-comments-form__textarea ">
                        <textarea
                            class="c-article-comments-form__input c-article-comments-form__input--textarea" name="comment" placeholder="你有什么看法呢" required></textarea>
                    </div>
                    <label class="c-article-comments-form__notifier" for="comment-email-notifier">
                        <input type="checkbox" id="comment-email-notifier">回复邮件通知
                    </label>
                    <input type='hidden' name='comment_post_ID' value='<?php echo $post->ID ?>' id='comment_post_ID'/>
                    <input type='hidden' name='comment_parent' id='comment_parent' value='0'/>
                    <input type="hidden" name="post_id" value="<?php echo $post->ID ?>">
                    <input type="hidden" name="cmt_hidden_js" value="oh"/>
                    <button type="button" id="publish_comment" class="c-article-comments-form__submit js-submit-comment">发表评论</button>
                </form>
            </div>
        </div>

        <div class="c-article-comments__hint js-comments-hint" style="display: none">
            <span class="js-comments-hint-content">正在加载中</span>
        </div>

        <div class="c-article-comments__body is-hidden js-comments-body" style="display: block">
            <nav class="c-article-comments__nav">
                <button class="is-active js-comments-sorting" data-comment-sort="time" num="0" data-num="0">时间</button>
                <button class="js-comments-sorting" data-comment-sort="rate" num="0" data-num="0">热度</button>
            </nav>

            <ul class="c-article-comments__list js-comments-list">

            </ul>

            <form id="reply_modal" class="c-article-comments-form is-unauthenticated js-article-comments-post-form c-article-comments-form--reply" data-replied="@wakaka123 " style="display: none">
                <div class="c-article-comments-form__headline">回复<button id="reply_modal_close" type="button" class="c-article-comments-form__close js-close-reply-form"></button></div>
                <input class="c-article-comments-form__input c-article-comments-form__user" type="email" name="from_email" placeholder="你的邮箱*" required="">
                <input class="c-article-comments-form__input c-article-comments-form__user" type="text" name="from_author" placeholder="你的昵称*" required="">
                <div class="c-article-comments-form__textarea ">
                    <textarea id="reply_modal_content" class="c-article-comments-form__input c-article-comments-form__input--textarea" name="comment" placeholder="你有什么看法呢"></textarea>
                </div>
                <label class="c-article-comments-form__notifier" for="comment-email-notifier"><input type="checkbox" id="comment-email-notifier">回复邮件通知</label>
                <button type="button" id="reply_modal_submit" class="c-article-comments-form__submit js-submit-comment">回复评论</button>
            </form>

            <div class="c-article-comments-item__info">
                <a class="c-article-comments__submit-shortcut" href="#article-comments">说说你的看法</a>
            </div>
        </div>
    </div>
</div>

