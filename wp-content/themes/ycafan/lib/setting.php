<?php
/**
 * 公共设置
 **/
/**
 * 设置摘要的字数.
 * @param int $length Excerpt length.
 * @return int (Maybe) modified excerpt length.
 */
function wpdocs_custom_excerpt_length( $length ) {
    return 50;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );

/**
 * 设置摘要更多的格式
 * @param string $more "Read more" excerpt string.
 * @return string (Maybe) modified "read more" excerpt string.
 */
function wpdocs_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'wpdocs_excerpt_more' );

/**
 * 增加导航自定义菜单
 */
add_action('admin_menu', 'options_admin_menu');
function options_admin_menu(){
    add_submenu_page( 'themes.php','Custom Setting', '站点设置', 'administrator', 'custom-setting', 'customSetting' );
    add_submenu_page( 'edit.php?post_type=page','Custom Setting', '缓存设置', 'administrator', 'custom-setting', 'customCacheSetting' );
}
function customSetting(){ ?>
    <div class="wrap">
        <h2>站点设置</h2>
        <?php

        if (count($_POST) > 0 && isset($_POST['update_options'])) {

            $options = [
                //网站基本介绍
                'site-intro',
                //网站头部logo
                'header-logo',
                //网站尾部logo
                'footer-logo',
                //首页标题
                'home-titile',
                //首页关键字
                'home-keywords',
                //首页描述
                'home-description',
                //网站公告图片
                'site-info',
                //评论是否开启
                'comment-open',
                //网站公告图片
                'relpost-type',

            ];

            foreach ($options as $opt) {
                update_option($opt, $_POST[$opt]);
                if (empty($_POST[$opt])) {
                    delete_option($opt);
                }
            }
            echo '<div id="message" class="updated below-h2"><p>保存成功!</p></div>';//保存完毕显示文字提示

        }

        //下面开始界面表单
        ?>
        <form method="POST" action="">
            <input type="hidden" name="update_options" value="true" />
            <table class="form-table">
                <tr>
                    <th scope="row">网站介绍</th>
                    <td><input class="text_large" type="text" name="site-intro"  value="<?php echo get_option('site-intro'); ?>" placeholder="请填写网站介绍"/></td>
                </tr>
                <tr>
                    <th scope="row">网站头部LOGO</th>
                    <td><input class="text_large" type="text" name="header-logo"  value="<?php echo get_option('header-logo'); ?>" placeholder="请输入图片链接"/></td>
                </tr>
                <tr>
                    <th scope="row">网站尾部LOGO</th>
                    <td><input class="text_large" type="text" name="footer-logo"  value="<?php echo get_option('footer-logo'); ?>"  placeholder="请输入图片链接"/></td>
                </tr>
                <tr>
                    <th scope="row">首页标题</th>
                    <td><input class="text_large" type="text" name="home-titile"  value="<?php echo get_option('home-titile'); ?>"  placeholder="请输入网站首页SEO标题"/></td>
                </tr>
                <tr>
                    <th scope="row">首页关键字</th>
                    <td><input class="text_large" type="text" name="home-keywords"  value="<?php echo get_option('home-keywords'); ?>"  placeholder="请输入网站首页SEO关键字"/></td>
                </tr>
                <tr>
                    <th scope="row">首页描述</th>
                    <td><input class="text_large" type="text" name="home-description"  value="<?php echo get_option('home-description'); ?>"  placeholder="请输入网站首页SEO描述"/></td>
                </tr>
                <tr>
                    <th scope="row">网站公告图</th>
                    <td><input class="text_large" type="text" name="site-info"  value="<?php echo get_option('site-info'); ?>"  placeholder="请输入图片链接"/></td>
                </tr>
                <tr>
                    <th scope="row">评论是否开启:</th>
                    <td>
                        <select class="text_small" name="comment-open">
                                <option value="1" <?php echo get_option('comment-open') == '1' ? 'selected = "selected"' : '' ?>>开启</option>
                                <option value="0" <?php echo get_option('comment-open') == '0' ? 'selected = "selected"' : '' ?>>关闭</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row">相关文章类型:</th>
                    <td>
                        <select class="text_small" name="relpost-type">
                                <option value="1" <?php echo get_option('relpost-type') == '1' ? 'selected = "selected"' : '' ?>>分类相关文章</option>
                                <option value="2" <?php echo get_option('relpost-type') == '2' ? 'selected = "selected"' : '' ?>>标签相关文章</option>
                        </select>
                    </td>
                </tr>




            </table>
            <p><input type="submit" class="button-primary" name="admin_options" value="保存"/></p>
        </form>
    </div>
    <style>
        .text_small{
            width: 100px;
        }
        .text_mediumm{
            width: 250px;
        }
        .text_large{
            width: 400px;
        }

    </style>
    <?php
    add_action('admin_menu', 'customSetting');
}
//缓存页面
function customCacheSetting(){ ?>

    <div class="wrap">
        <h2>缓存设置</h2>
        <?php
        $_expire_array = [
            '-1' => '关闭',
            '15' => '15秒',
            '50' => '1分钟',
            '300' => '5分钟',
            '600' => '10分钟',
            '1800' => '30分钟',
            '3600' => '1小时',
            '21600' => '6小时',
            '43200' => '12小时',
            '86400' => '一天',
            '604800' => '1周',
        ];
        if (count($_POST) > 0 && isset($_POST['update_options'])) {

            $options = [
                //缓存是否需开启
                'cache-switch',
                //首页缓存是否需开启
                'cache-index-expire',
                //分类页缓存是否需开启
                'cache-category-expire',



            ];

            foreach ($options as $opt) {
                update_option($opt, $_POST[$opt]);
                if (empty($_POST[$opt])) {
                    delete_option($opt);
                }
            }
            echo '<div id="message" class="updated below-h2"><p>保存成功!</p></div>';//保存完毕显示文字提示

        }

        //下面开始界面表单
        ?>
        <form method="POST" action="">
            <input type="hidden" name="update_options" value="true" />
            <table class="form-table">
                <tr>
                    <th scope="row">缓存是否开启:</th>
                    <td>
                        <select class="text_small" name="cache-switch">
                            <option value="off" <?php echo get_option('cache-switch') == 'off' ? 'selected = "selected"' : '' ?>>关闭</option>
                            <option value="on" <?php echo get_option('cache-switch') == 'on' ? 'selected = "selected"' : '' ?>>开启</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row">首页缓存:</th>
                    <td>
                        <select class="text_small" name="cache-index-expire">
                            <?php foreach($_expire_array as $k => $v ): ?>
                                <option value="<?php echo $k ?>" <?php echo get_option('cache-index-expire ') == $k ? 'selected = "selected"' : '' ?>><?php echo $v ?></option>
                            <?php endforeach ?>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row">分类页缓存:</th>
                    <td>
                        <select class="text_small" name="cache-category-expire">
                            <?php foreach($_expire_array as $k => $v ): ?>
                                <option value="<?php echo $k ?>" <?php echo get_option('cache-category-expire') == $k ? 'selected = "selected"' : '' ?>><?php echo $v ?></option>
                            <?php endforeach ?>
                        </select>
                    </td>
                </tr>



            </table>
            <p><input type="submit" class="button-primary" name="admin_options" value="保存"/></p>
        </form>
    </div>
    <style>
        .text_small{
            width: 100px;
        }
        .text_mediumm{
            width: 250px;
        }
        .text_large{
            width: 400px;
        }

    </style>
    <?php
    add_action('admin_menu', 'customSetting');
}
?>