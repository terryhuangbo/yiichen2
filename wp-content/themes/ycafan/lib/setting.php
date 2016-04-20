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
                //网站Logo
                'site-logo',
                //网站基本介绍
                'site-intro',
                //网站公告图片
                'site-info',

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
                    <th scope="row">网站LOGO:</th>
                    <td><input type="text" name="site-logo" id="site-intro" value="<?php echo get_option('site-logo'); ?>" /></td>
                </tr>
                <tr>
                    <th scope="row">网站介绍</th>
                    <td><input type="text" name="site-intro" id="site-info" value="<?php echo get_option('site-intro'); ?>" /></td>
                </tr>
                <tr>
                    <th scope="row">网站公告（请填写图片链接）:</th>
                    <td><input type="text" name="site-info" id="site-info" value="<?php echo get_option('site-info'); ?>" /></td>
                </tr>


            </table>
            <p><input type="submit" class="button-primary" name="admin_options" value="保存"/></p>
        </form>
    </div>
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
                        <select name="cache-switch">
                            <option value="off" <?php echo get_option('cache-switch') == 'off' ? 'selected = "selected"' : '' ?>>关闭</option>
                            <option value="on" <?php echo get_option('cache-switch') == 'on' ? 'selected = "selected"' : '' ?>>开启</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th scope="row">首页缓存:</th>
                    <td>
                        <select name="cache-index-expire">
                            <?php foreach($_expire_array as $k => $v ): ?>
                                <option value="<?php echo $k ?>" <?php echo get_option('cache-index-expire ') == $k ? 'selected = "selected"' : '' ?>><?php echo $v ?></option>
                            <?php endforeach ?>
                        </select>
                    </td>
                </tr>


            </table>
            <p><input type="submit" class="button-primary" name="admin_options" value="保存"/></p>
        </form>
    </div>
    <?php
    add_action('admin_menu', 'customSetting');
}
?>