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
                class="js-placeholder-comments-counter">12</span>)</h5>

        <div class="c-article-comments-item is-unauthenticated js-article-comments-post-field">
            <img class="c-article-comments-item__avatar js-user-avatar" src="" alt="">

            <div class="c-article-comments-item__info">
                <form id="publish_form" class="c-article-comments-form is-unauthenticated js-article-comments-post-form">
                    <div class="c-article-comments-form__headline">回复
                        <button type="button" class="c-article-comments-form__close js-close-reply-form"></button>
                    </div>
                    <input class="c-article-comments-form__input c-article-comments-form__user required" type="email" name="from_email" placeholder="你的邮箱*" required>
                    <input class="c-article-comments-form__input c-article-comments-form__user required" type="text" name="from_author" placeholder="你的昵称*" required>
                    <div class="c-article-comments-form__textarea ">
                        <textarea
                            class="c-article-comments-form__input c-article-comments-form__input--textarea" name="comment" placeholder="你有什么看法呢"></textarea>
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
                <button class="is-active js-comments-sorting" data-comment-sort="time">时间</button>
                <button class="js-comments-sorting" data-comment-sort="rate">热度</button>
            </nav>

            <ul class="c-article-comments__list js-comments-list">
                <?php foreach ([1] as $key => $val): ?>
                    <li id="comment-1014329" class="c-article-comments-item">
                        <img class="c-article-comments-item__avatar" src="http://gravatar.ifanrx.com/avatar/41a0b1eac4c771512e23df01308d6925?s=80&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg" alt="luow">
                        <div id="comment-cont-1014329" class="c-article-comments-item__info  js-single-comment" data-comment-username="luow" data-comment-id="1014329">
                            <span class="c-article-comments-item__name">luow</span>
                            <span class="c-article-comments-item__meta">2016-05-10 13:37:25</span>
                            <span class="c-article-comments-item__hint js-show-comment">*评分过低，点击显示隐藏评论*</span>
                            <div class="c-article-comments-item__content"><p>没有杀手级应用，就说明还是个玩具。</p></div>
                            <button class="c-article-comments-item__reply js-reply-comment" data-post_id="<?php echo $post->ID ?>"
                                    data-author="huangbo" data-email="1234@qq.com" data-comment_id="42">回复</button>
                            <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">2</button>
                            <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">0 </button>

                        </div>
                        <ul id="reply-content-1014329" class="c-article-comments-replies c-article-comments-item__info js-child-comments">
                            <li id="comment-1014334" class="c-article-comments-replies__item  js-single-comment" data-comment-username="王 飞" data-comment-id="1014334">
                                <div id="comment-cont-1014334" class="c-article-comments-replies__item__wrapper reply_item_li">
                                    <span class="c-article-comments-item__name">
                                        王 飞: <a class="comment-at" href="#comment-1014329" "="">@luow</a></span>
                                    <span class="c-article-comments-item__meta">2016-05-10 13:47:15</span>
                                    <div class="c-article-comments-item__hint c-article-comments-item__hint--secondary js-show-comment">
                                        <span>评分过低，点击显示隐藏评论</span>
                                    </div>
                                    <div class="c-article-comments-item__content">
                                        <p>其实对于 PS VR 来说，它始终就是个玩具，毕竟游戏方面占大头。</p>
                                    </div>
                                    <button class="c-article-comments-item__reply c-article-comments-replies__reply js-reply-comment"
                                            data-post_id="<?php echo $post->ID ?>" author="zhengwenfagn" email="7890@qq.com" comment_id="44">回复</button>
                                    <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">0</button>
                                    <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">0</button>
                                </div>
                            </li>

                            <li id="comment-130" class="c-article-comments-replies__item  js-single-comment"
                                data-comment-username="ss" data-comment-id="130">
                                <div class="c-article-comments-replies__item__wrapper reply_item_li"><span
                                        class="c-article-comments-item__name">           ss: <a class="comment-at"
                                                                                                href="#comment-130" "="">@ddd</a></span>
                                    <span class="c-article-comments-item__meta">2016-05-13 18:38:14</span>

                                    <div
                                        class="c-article-comments-item__hint c-article-comments-item__hint--secondary js-show-comment">
                                        <span>评分过低，点击显示隐藏评论</span></div>
                                    <div class="c-article-comments-item__content"><p></p></div>
                                    <button
                                        class="c-article-comments-item__reply c-article-comments-replies__reply js-reply-comment">
                                        回复
                                    </button>
                                    <button
                                        class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                                        0
                                    </button>
                                    <button
                                        class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                                        0
                                    </button>
                                </div>
                            </li>


                            <li id="comment-1014415" class="c-article-comments-replies__item  js-single-comment"
                                data-comment-username="Jack" data-comment-id="1014415">
                                <div class="c-article-comments-replies__item__wrapper"><span
                                        class="c-article-comments-item__name">Jack: <a class="comment-at"
                                                                                       href="#comment-1014329" "="">@luow</a></span>
                                    <span class="c-article-comments-item__meta">2016-05-10 18:23:55</span>

                                    <div
                                        class="c-article-comments-item__hint c-article-comments-item__hint--secondary js-show-comment">
                                        <span>评分过低，点击显示隐藏评论</span></div>
                                    <div class="c-article-comments-item__content"><p>你希望一个游戏机的外设不是玩具是什么……</p>
                                    </div>
                                    <button
                                        class="c-article-comments-item__reply c-article-comments-replies__reply js-reply-comment">
                                        回复
                                    </button>
                                    <button
                                        class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                                        0
                                    </button>
                                    <button
                                        class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                                        0
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </li>
                <?php endforeach ?>

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

