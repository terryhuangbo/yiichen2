<?php
require 'theme-updates/theme-update-checker.php';
//info.json 的访问地址
$example_update_checker = new ThemeUpdateChecker('moban01', 'http://www.themepark.com.cn/free_themes/moban01/moban01.json');
include_once ("xuanxiang.php");
register_nav_menus(array(
    'header-menu' => __('导航自定义菜单') ,
));


/*特色图片*/
if (function_exists('add_theme_support')) {
    add_theme_support('post-thumbnails');
}
if (function_exists('add_image_size')) {
    add_image_size('customized-post-thumb', 100, 120);
}
function get_category_root_id($cat) {
    $this_category = get_category($cat); // 取得当前分类
    while ($this_category->category_parent) // 若当前分类有上级分类时，循环
    {
        $this_category = get_category($this_category->category_parent); // 将当前分类设为上级分类（往上爬）
        
    }
    return $this_category->term_id; // 返回根分类的id号
    
}

/*截取第一张图片*/
function catch_that_image() {
    global $post, $posts;
    $first_img = '';
    ob_start();
    ob_end_clean();
    $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
    $first_img = $matches[1][0];
    if (empty($first_img)) { //Defines a default image
        $first_img = "这里添加默认图片的路径，文章中没有图片时显示";
    }
    return $first_img;
}

/*截取第一张图片 over*/
// Add RSS links to <head> section
automatic_feed_links();
// Load jQuery
if (!is_admin()) {
    wp_deregister_script('jquery');
    wp_register_script('jquery', get_template_directory_uri() . "/js/jquery-1.4.4.min.js", false);
    wp_enqueue_script('jquery');
}

function remove_open_sans() {
    wp_deregister_style('open-sans');
    wp_register_style('open-sans', false);
    wp_enqueue_style('open-sans', '');
}
add_action('init', 'remove_open_sans');

// Clean up the <head>
function removeHeadLinks() {
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
}
add_action('init', 'removeHeadLinks');
remove_action('wp_head', 'wp_generator');

/*分页函数*/
add_action('admin_menu', 'my_page_excerpt_meta_box');
function my_page_excerpt_meta_box() {
    add_meta_box('postexcerpt', __('Excerpt') , 'post_excerpt_meta_box', 'page', 'normal', 'core');
}
function par_pagenavi($range = 10) {
    global $paged, $wp_query;
    if (!$max_page) {
        $max_page = $wp_query->max_num_pages;
    }
    if ($max_page > 1) {
        if (!$paged) {
            $paged = 1;
        }
        if ($paged != 1) {
            echo "<a href='" . get_pagenum_link(1) . "' class='extend'

title='跳转到首页'> 返回首页 </a>";
        }
        previous_posts_link(' 上一页 ');
        if ($max_page > $range) {
            if ($paged < $range) {
                for ($i = 1; $i <= ($range + 1); $i++) {
                    echo "<a href='" . get_pagenum_link($i) . "'";
                    if ($i == $paged) echo " class='current'";
                    echo ">$i</a>";
                }
            } elseif ($paged >= ($max_page - ceil(($range / 2)))) {
                for ($i = $max_page - $range; $i <= $max_page; $i++) {
                    echo "<a href='" . get_pagenum_link($i) . "'";
                    if ($i == $paged) echo " class='current'";
                    echo ">$i</a>";
                }
            } elseif ($paged >= $range && $paged < ($max_page - ceil(($range / 2)))) {
                for ($i = ($paged - ceil($range / 2)); $i <= ($paged + ceil(($range / 2))); $i++) {
                    echo "<a href='" . get_pagenum_link($i) . "'";
                    if ($i == $paged) echo " class='current'";
                    echo ">$i</a>";
                }
            }
        } else {
            for ($i = 1; $i <= $max_page; $i++) {
                echo "<a href='" . get_pagenum_link($i) . "'";
                if ($i == $paged) echo " class='current'";
                echo ">$i</a>";
            }
        }
        next_posts_link(' 下一页 ');
        if ($paged != $max_page) {
            echo "<a href='" . get_pagenum_link($max_page) . "' class='extend'

title='跳转到最后一页'> 最后一页 </a>";
        }
    }
}

/*返回值默认SEO*/
function getSeo($pid){
    $seo = [];
    $fields = get_fields($pid);
    // $field = $fields['seo'][0];
    $seo['seo_title'] = getVal($fields['seo'][0]['seo_title'], defaultSeo('seo_title'));
    $seo['seo_keywords'] = getVal($fields['seo'][0]['seo_keywords'], defaultSeo('seo_keywords'));
    $seo['seo_description'] = getVal($fields['seo'][0]['seo_description'], defaultSeo('seo_description'));
    return $seo;
}

function defaultSeo($key){
    $str = '';
    if($key == 'seo_title'){
        $str = '拼接屏|液晶拼接屏|液晶拼接墙|首选方案-上海义辰信息科技有限公司';
    }else if($key == 'seo_keywords'){
        $str = '拼接屏，拼接屏方案，拼接屏厂家，液晶拼接屏，液晶拼接墙';
    }else if($key == 'seo_description'){
        $str = '义辰是一家全方位工业级无缝拼接屏方案设计、超窄边液晶拼接屏品牌厂家，为您提供55寸液晶拼接屏、46寸液晶拼接屏、47寸液晶拼接屏、49寸液晶拼接屏、42寸液晶拼接屏、液晶拼接墙、大屏拼接、拼接屏支架、工控操作台的研发、生产、销售为一体的企业。产品应用于监控指挥调度系统、智能会议系统、展示娱乐系统、数字标牌系统等。是集拼接屏解决方案设计、安装、售后为一体的一站式服务商！';
    }
    return $str;
}

/*返回值函数*/
function getVal($val, $default = '') {
    return isset($val) ? $val : $default;
}


// /*分页函数*/
// // /****************Added By Terry For Log ****************/
// function hb($str){
// 	// error_log(print_r($str,true),3,"I:/error_log.txt");
// 	file_put_contents("E:/1.txt", print_r($str,true));
// }
// function hm($str){
// 	error_log(print_r($str,true),3,"I:/error_log.txt");
// 	// file_put_contents("E:/1.txt", print_r($str,true));
// }

?>
