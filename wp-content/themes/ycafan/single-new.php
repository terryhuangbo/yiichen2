<?php
/**
 * Template Name: 文章页
 **/

get_header();
$cat = array_shift(get_the_category());
the_post();
$_rel_posts = _get_rel_posts($cat->term_id, get_the_ID());
?>

<div class="o-single">
<div class="o-single-content" id="single-content-wrapper">
<?php
$_head_img = $Tool->_get_img_from_html(get_the_content(), 'http');
?>
<div id="article-header" class="o-single-content__header c-single-normal" style="background-image: url('<?php echo $_head_img ?>')">
    <div class="o-single-content__body c-single-normal__header">
        <div class="c-article-header-meta">
            <span class="c-article-header-meta__category"><?php echo $cat->name ?></span>
            <span class="c-article-header-meta__time"><?php echo $Tool->_get_diff_date(strtotime(get_the_time('Y-m-d H:i:s'))) ?></span>
        </div>
        <h1 class="c-single-normal__title"><?php the_title() ?></h1>
    </div>
</div>
<div class="o-single-content__body o-single-content__body--main">
<aside
    class="c-social-bar c-social-bar--vertical c-social-bar--colored c-social-bar--sqaured c-social-bar--left js-social-bar"
    data-component="SocialBar"
    data-post-title="<?php the_title() ?><?php the_title() ?>"
    data-post-link="<?php get_page_link() ?>"
    data-post-summary="没人能"
    data-post-id="<?php the_ID() ?>"
    data-fixed-start="#article-content"
    data-fixed-end="#footer">
    <div class="c-social-bar__counter"><b class="js-share-counter">--</b>SHARES</div>
    <a class="c-social-bar__icon c-social-bar__icon--weibo" data-weibo target="_blank"></a>

    <div class="c-social-bar__icon c-social-bar__icon--wechat">
        <div class="c-social-bar__icon--wechat__qrcode c-popup-qrcode">
            <div class="c-popup-qrcode__title">分享到微信</div>
            <div class="js-qrcode" data-qrcode-class="c-popup-qrcode__image"></div>
            <div class="c-popup-qrcode__hint">使用微信扫码将网页分享到微信</div>
        </div>
    </div>
    <a class="c-social-bar__icon c-social-bar__icon--twitter" data-twitter target="_blank"></a>
    <a class="c-social-bar__icon c-social-bar__icon--linkedin" data-linkedin target="_blank"></a>
    <a class="c-social-bar__icon c-social-bar__icon--douban" data-douban target="_blank"></a>
    <a class="c-social-bar__icon c-social-bar__icon--qzone" data-qzone target="_blank"></a>
    <button class="c-social-bar__icon c-social-bar__icon--comments js-goto-comments" data-share-ignored></button>
</aside>
<div id="article-content" class="o-single-content__body__content c-article-meta">
    <div class="c-article-tags">
        <a href="http://www.ifanr.com/tags/playstation" class="c-article-tags__item">playstation</a>
        <a href="http://www.ifanr.com/tags/ps" class="c-article-tags__item">PS</a>
        <a href="http://www.ifanr.com/tags/vr" class="c-article-tags__item">VR</a>
        <a href="http://www.ifanr.com/tags/%e5%90%89%e7%94%b0%e4%bf%ae%e5%b9%b3" class="c-article-tags__item">吉田修平</a>
        <a href="http://www.ifanr.com/tags/%e8%99%9a%e6%8b%9f%e7%8e%b0%e5%ae%9e" class="c-article-tags__item">虚拟现实</a>
    </div>
    <div class="c-card-meta c-card-meta--darken c-article-sns" data-component="ArticleContentMeta"
         data-post-id="654732">
        <button
            class="c-article-sns__info c-card-meta__info c-card-meta__info--comments js-article-comment-count js-goto-comments">
            <?php echo get_comments_number() ?>
        </button>
        <button class="c-article-sns__info c-card-meta__info c-card-meta__info--like js-article-like-count">--
        </button>
    </div>
</div>
<article class="o-single-content__body__content c-article-content s-single-article js-article">
    <?php the_content(); ?>
</article>
<div class="o-single-content__body__content">
    <div class="c-article-likes" data-component="ArticleLikes" data-post-id="654732"></div>
</div>
<div class="o-single-content__body__content">
    <div class="c-jiong c-jiong--block c-jiong-report">
        <p>有好的产品或者项目希望我们报道，猛戳这里 <a href="http://www.ifanr.com/about/contribute/">寻求报道</a></p>
    </div>
</div>
<div class="o-single-content__body__content">
    <a class="c-jiong c-jiong--block c-jiong--bottom"
       href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ifanr.activitys">
        <img class="c-jiong__image" src="http://images.ifanr.cn/wp-content/uploads/2016/04/downbanner.jpg">
    </a>
</div>
<div class="o-single-content__body__content">
<div id="article-comments" class="c-article-comments " data-component="ArticleCommentsComponent"
     data-post-id="654732">
<h5 class="c-card-category c-article-comments__headline">文章评论(<span
        class="js-placeholder-comments-counter">--</span>)</h5>

<div class="c-article-comments-item is-unauthenticated js-article-comments-post-field">
    <img class="c-article-comments-item__avatar js-user-avatar" src="" alt="">

    <div class="c-article-comments-item__info">
        <form class="c-article-comments-form is-unauthenticated js-article-comments-post-form">
            <div class="c-article-comments-form__headline">回复
                <button type="button"
                        class="c-article-comments-form__close js-close-reply-form"></button>
            </div>
            <input class="c-article-comments-form__input c-article-comments-form__user" type="email"
                   name="email" placeholder="你的邮箱*" required>
            <input class="c-article-comments-form__input c-article-comments-form__user" type="text"
                   name="author" placeholder="你的昵称*" required>

            <div class="c-article-comments-form__textarea ">
                <textarea
                    class="c-article-comments-form__input c-article-comments-form__input--textarea"
                    name="comment" placeholder="你有什么看法呢"></textarea>
            </div>
            <label class="c-article-comments-form__notifier" for="comment-email-notifier"><input
                    type="checkbox" id="comment-email-notifier">回复邮件通知</label>
            <button type="button" class="c-article-comments-form__submit js-submit-comment">发表评论
            </button>
            <input type='hidden' name='comment_post_ID' value='654732' id='comment_post_ID'/>
            <input type='hidden' name='comment_parent' id='comment_parent' value='0'/>

            <input type="hidden" name="post_id" value="654732">
            <input type="hidden" name="cmt_hidden_js" value="oh"/>
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
    <li id="comment-1014317" class="c-article-comments-item">
        <img class="c-article-comments-item__avatar"
             src="http://gravatar.ifanrx.com/avatar/c99816d5c02fbb2cef6be8135b23b927?s=80&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg"
             alt="没穿裤子的小孩K">

        <div class="c-article-comments-item__info  js-single-comment"
             data-comment-username="没穿裤子的小孩K" data-comment-id="1014317"><span
                class="c-article-comments-item__name">没穿裤子的小孩K</span> <span
                class="c-article-comments-item__meta">来自 iPhone 客户端, 2016-05-10 12:42:29</span>
            <span class="c-article-comments-item__hint js-show-comment">*评分过低，点击显示隐藏评论*</span>

            <div class="c-article-comments-item__content"><p>真有4.5？</p></div>
            <button class="c-article-comments-item__reply js-reply-comment">回复</button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                0
            </button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                0
            </button>
        </div>
        <ul class="c-article-comments-replies c-article-comments-item__info js-child-comments">
            <li id="comment-1014331" class="c-article-comments-replies__item  js-single-comment"
                data-comment-username="王 飞" data-comment-id="1014331">
                <div class="c-article-comments-replies__item__wrapper"><span
                        class="c-article-comments-item__name">王 飞: <a class="comment-at"
                                                                      href="#comment-1014317" "="">@没穿裤子的小孩K</a></span>
                    <span class="c-article-comments-item__meta">2016-05-10 13:40:41</span>

                    <div class="c-article-comments-item__hint c-article-comments-item__hint--secondary js-show-comment">
                        <span>评分过低，点击显示隐藏评论</span></div>
                    <div class="c-article-comments-item__content"><p>6.14 的 E3 很可能会登场。</p></div>
                    <button class="c-article-comments-item__reply c-article-comments-replies__reply js-reply-comment">
                        回复
                    </button>
                    <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                        0
                    </button>
                    <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                        0
                    </button>
                </div>
            </li>
        </ul>
    </li>
    <li id="comment-1014329" class="c-article-comments-item"><img
            class="c-article-comments-item__avatar"
            src="http://gravatar.ifanrx.com/avatar/41a0b1eac4c771512e23df01308d6925?s=80&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg"
            alt="luow">

        <div class="c-article-comments-item__info  js-single-comment" data-comment-username="luow"
             data-comment-id="1014329"><span class="c-article-comments-item__name">luow</span> <span
                class="c-article-comments-item__meta">2016-05-10 13:37:25</span> <span
                class="c-article-comments-item__hint js-show-comment">*评分过低，点击显示隐藏评论*</span>

            <div class="c-article-comments-item__content"><p>没有杀手级应用，就说明还是个玩具。</p></div>
            <button class="c-article-comments-item__reply js-reply-comment">回复</button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                2
            </button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                0
            </button>
        </div>
        <ul class="c-article-comments-replies c-article-comments-item__info js-child-comments">
            <li id="comment-1014334" class="c-article-comments-replies__item  js-single-comment"
                data-comment-username="王 飞" data-comment-id="1014334">
                <div class="c-article-comments-replies__item__wrapper"><span
                        class="c-article-comments-item__name">王 飞: <a class="comment-at"
                                                                      href="#comment-1014329" "="">@luow</a></span>
                    <span class="c-article-comments-item__meta">2016-05-10 13:47:15</span>

                    <div class="c-article-comments-item__hint c-article-comments-item__hint--secondary js-show-comment">
                        <span>评分过低，点击显示隐藏评论</span></div>
                    <div class="c-article-comments-item__content"><p>其实对于 PS VR
                            来说，它始终就是个玩具，毕竟游戏方面占大头。</p></div>
                    <button class="c-article-comments-item__reply c-article-comments-replies__reply js-reply-comment">
                        回复
                    </button>
                    <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                        0
                    </button>
                    <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
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

                    <div class="c-article-comments-item__hint c-article-comments-item__hint--secondary js-show-comment">
                        <span>评分过低，点击显示隐藏评论</span></div>
                    <div class="c-article-comments-item__content"><p>你希望一个游戏机的外设不是玩具是什么……</p></div>
                    <button class="c-article-comments-item__reply c-article-comments-replies__reply js-reply-comment">
                        回复
                    </button>
                    <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                        0
                    </button>
                    <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                        0
                    </button>
                </div>
            </li>
            <li id="comment-1014440" class="c-article-comments-replies__item  js-single-comment"
                data-comment-username="JazyWu" data-comment-id="1014440">
                <div class="c-article-comments-replies__item__wrapper"><span
                        class="c-article-comments-item__name">JazyWu: <a class="comment-at"
                                                                         href="#comment-1014415" "="">@Jack</a></span>
                    <span class="c-article-comments-item__meta">来自 iPhone 客户端, 2016-05-10 19:42:07</span>

                    <div class="c-article-comments-item__hint c-article-comments-item__hint--secondary js-show-comment">
                        <span>评分过低，点击显示隐藏评论</span></div>
                    <div class="c-article-comments-item__content"><p>生产力工具？</p></div>
                    <button class="c-article-comments-item__reply c-article-comments-replies__reply js-reply-comment">
                        回复
                    </button>
                    <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                        0
                    </button>
                    <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                        0
                    </button>
                </div>
            </li>
        </ul>
    </li>
    <li id="comment-1014349" class="c-article-comments-item"><img
            class="c-article-comments-item__avatar"
            src="http://gravatar.ifanrx.com/avatar/6c230cf8afe656024b9feef97b5f9dd6?s=80&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg"
            alt="一元营销">

        <div class="c-article-comments-item__info  js-single-comment" data-comment-username="一元营销"
             data-comment-id="1014349"><span class="c-article-comments-item__name">一元营销</span> <span
                class="c-article-comments-item__meta">2016-05-10 14:38:34</span> <span
                class="c-article-comments-item__hint js-show-comment">*评分过低，点击显示隐藏评论*</span>

            <div class="c-article-comments-item__content"><p>确实不错，这个要实话实说！</p></div>
            <button class="c-article-comments-item__reply js-reply-comment">回复</button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                0
            </button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                0
            </button>
        </div>
        <ul class="c-article-comments-replies c-article-comments-item__info js-child-comments"></ul>
    </li>
    <li id="comment-1014352" class="c-article-comments-item"><img
            class="c-article-comments-item__avatar"
            src="http://gravatar.ifanrx.com/avatar/dfdc8936bf232efcaa5fea43bd25265a?s=80&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg"
            alt="mic">

        <div class="c-article-comments-item__info  js-single-comment" data-comment-username="mic"
             data-comment-id="1014352"><span class="c-article-comments-item__name">mic</span> <span
                class="c-article-comments-item__meta">来自移动版, 2016-05-10 14:56:49</span> <span
                class="c-article-comments-item__hint js-show-comment">*评分过低，点击显示隐藏评论*</span>

            <div class="c-article-comments-item__content"><p>期待类似《加速世界》那样的设定能早日实现</p></div>
            <button class="c-article-comments-item__reply js-reply-comment">回复</button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                0
            </button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                0
            </button>
        </div>
        <ul class="c-article-comments-replies c-article-comments-item__info js-child-comments"></ul>
    </li>
    <li id="comment-1014446" class="c-article-comments-item"><img
            class="c-article-comments-item__avatar"
            src="http://gravatar.ifanrx.com/avatar/2a35af8c62068558688f2aaa7fda3f3b?s=80&amp;d=%2F%2Fifanr.b0.upaiyun.com%2Fsite-static%2Fifanr-2.0%2Fdist%2Fimages%2Fcommon%2Fgravatar.jpg"
            alt="欧阳">

        <div class="c-article-comments-item__info  js-single-comment" data-comment-username="欧阳"
             data-comment-id="1014446"><span class="c-article-comments-item__name">欧阳</span> <span
                class="c-article-comments-item__meta">来自 iPhone 客户端, 2016-05-10 20:10:48</span>
            <span class="c-article-comments-item__hint js-show-comment">*评分过低，点击显示隐藏评论*</span>

            <div class="c-article-comments-item__content"><p>有杀手级应用我一定玩</p></div>
            <button class="c-article-comments-item__reply js-reply-comment">回复</button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--down js-vote-down ">
                0
            </button>
            <button class="c-article-comments-item-voting c-article-comments-item-voting--up js-vote-up ">
                0
            </button>
        </div>
        <ul class="c-article-comments-replies c-article-comments-item__info js-child-comments"></ul>
    </li>
</ul>

<div class="c-article-comments-item__info">
    <a class="c-article-comments__submit-shortcut" href="#article-comments">说说你的看法</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="o-single-aside">
    <div class="o-single-aside__body" data-start-at="#article-header" data-stop-at="#footer"
         data-sibling="#single-content-wrapper" data-component="AwesomeScroll" data-bounds-top="105"
         data-bounds-bottom="320">
        <div class="o-widget c-card-author">
            <h5 class="c-card-category">作者</h5>
            <div class="c-card c-card-author__info">
                <a class="c-card-author__info__avatar" href="http://www.ifanr.com/author/jackie" target="_blank"><img
                        src="http://images.ifanr.cn/wp-content/uploads/2015/08/jackie.jpg" alt="<?php the_author() ?>"></a>

                <div class="c-card-author__info__contacts">
                    <a class="c-card-author__contact c-card-author__contact--email" href="mailto:jackie@ifanr.com"
                       target="_blank"></a>
                </div>
                <a class="c-card-author__wrapper" href="http://www.ifanr.com/author/jackie" target="_blank">
                    <p class="c-card-author__name"><?php the_author() ?></p>

                    <p class="c-card-author__position">高级编辑</p>
                </a>
            </div>
            <div class="c-card c-card-author__recent">
                <div class="c-card-author__recent__counter"><b>380</b>文章总数</div>
                <a class="c-card-author__recent__article" href="http://www.ifanr.com/654824"
                   target="_blank"><span>最近：</span>最大的小米手机和 MIUI 8 发布了，这个“扫题出答案”的功能你怎么看？</a>
            </div>
        </div>
        <div class="o-widget c-related-articles">
            <div class="c-related-articles__headline">相关文章</div>
            <?php foreach($_rel_posts as $k => $v): ?>
            <div class="c-related-articles__item">
                <div class="c-related-articles__image"
                     style="background-image: url('<?php echo $v['image'] ?>')">
                    <a class="c-related-articles__image__link-overlay" href="<?php echo $v['link'] ?>
                       title="<?php echo $v['title'] ?>" target="_blank"></a>
                </div>
                <div class="c-related-articles__info">
                    <h1 class="c-related-articles__title">
                        <a href="<?php echo $v['link'] ?>" target="_blank">
                            <span><?php echo $v['title'] ?></span>
                        </a>
                    </h1>
                    <span class="c-related-articles__time"><?php echo $v['difDate'] ?></span>
                </div>
            </div>
            <?php endforeach ?>
        </div>
        <div id="jiong" class="o-widget c-jiong c-jiong--block c-jiong--commercial">
            <a href="<?php echo _get_page_url('wechat') ?>" target="_blank" rel="nofollow">
                <img class="c-jiong__image" src="<?php bloginfo('template_url'); ?>/images/info.jpg" alt="联系我们">
            </a>
        </div>
    </div>
</div>
</div>

<!-- 底部 -->
<?php get_footer(); ?>
