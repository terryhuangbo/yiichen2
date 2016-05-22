<?php
/**
 * Template Name: 文章页
 **/

get_header();
$cat = array_shift(get_the_category());
the_post();
$_rel_posts = _get_rel_posts($cat->term_id, get_the_ID(), get_option('relpost-type'));
$tags = $Tool->_value(get_the_tags(), [], true);
?>

<div class="o-single">
    <div class="o-single-content" id="single-content-wrapper">
        <?php
        $_head_img = $Tool->_get_img_from_html(get_the_content(), 'http');
        ?>
        <div id="article-header" class="o-single-content__header c-single-normal"
             style="background-image: url('<?php echo $_head_img ?>')">
            <div class="o-single-content__body c-single-normal__header">
                <div class="c-article-header-meta">
                    <span class="c-article-header-meta__category"><?php echo $cat->name ?></span>
                <span
                    class="c-article-header-meta__time"><?php echo $Tool->_get_diff_date(strtotime(get_the_time('Y-m-d H:i:s'))) ?></span>
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
                    <?php foreach($tags as $tag): ?>
                        <a href="javaScript:void(0)" class="c-article-tags__item"><?php echo $tag->name ?></a>
                    <?php endforeach ?>
                </div>
                <div class="c-card-meta c-card-meta--darken c-article-sns" data-component="ArticleContentMeta" data-post-id="654732">
                    <a href="#comments">
                        <button class="c-article-sns__info c-card-meta__info c-card-meta__info--comments js-article-comment-count js-goto-comments">
                            <?php echo _get_comments_num(get_the_ID()) ?>
                        </button>
                    </a>
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
                <a class="c-jiong c-jiong--block c-jiong--bottom"
                   href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ifanr.activitys">
                    <img class="c-jiong__image" src="http://images.ifanr.cn/wp-content/uploads/2016/04/downbanner.jpg">
                </a>
            </div>

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
                <?php foreach ($_rel_posts as $k => $v): ?>
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
