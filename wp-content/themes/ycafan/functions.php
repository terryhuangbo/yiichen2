<?php
/**
 * YCA functions and definitions
 *
 * @package WordPress
 * @subpackage YCA 2.0
 * @since YCA 1.0
 */

require_once dirname(__FILE__) .'/lib/tools.class.php';
require_once dirname(__FILE__) .'/lib/db.class.php';
require_once dirname(__FILE__) .'/lib/cache.class.php';
require_once dirname(__FILE__) .'/lib/category.class.php';
require_once dirname(__FILE__) .'/lib/setting.php';
$Tool = new Tools();
$Cache = new Cache();

?>
<?php

//获取文章SEO信息
function _get_seo($post){
    $Tool = new Tools();
    $str_len = $Tool->_value(intval(get_option('excerpt-len')), 100, true);
    if(is_home()){
        $seo = [
            'title' => get_option('home-titile'),
            'keywords' => get_option('home-keywords'),
            'description' => get_option('home-description'),
        ];
    }else if(is_category()){
        $cat = array_shift(get_the_category());
        $seo = [
            'title' => $Tool->_value($cat->name, '') . '-少年中国评论',
            'keywords' => get_option('home-keywords'),
            'description' => get_option('home-description'),
        ];
    }else if(is_single()){
        $seo = [
            'title' => get_the_title() . '-少年中国评论',
            'keywords' => get_option('home-keywords'),
            'description' => $Tool->_str_cut($post->post_content, 0, $str_len, false),
        ];
    }else{
        $seo = [
            'title' => get_option('home-titile'),
            'keywords' => get_option('home-keywords'),
            'description' => get_option('home-description'),
        ];
    }
    return $seo;
}

//获取首页文章
function _get_index_posts($num){
    $Tool = new Tools();
    $args = [
        'post_type' => 'post',
        'offset' => 0,
        'posts_per_page' => $num,
        'post_status' => 'publish',
        'orderby'=>'post_date',
        'tax_query' => [
            'relation' => 'AND',
            [
                'taxonomy' => 'category',
                'field'    => 'slug',
                'terms'    => 'video',
                'operator' => 'NOT IN'
            ],
            [
                'taxonomy' => 'category',
                'field'    => 'slug',
                'terms'    => 'quotation',
                'operator' => 'NOT IN'
            ],

        ],
    ];
    return _get_post_item($args);
}

//获取首页视频
function _get_index_videos($num){
    $Tool = new Tools();
    $args = [
        'post_type' => 'post',
        'offset' => 0,
        'posts_per_page' => $num,
        'post_status' => 'publish',
        'orderby'=>'post_date',
        'tax_query' => [
            [
                'taxonomy' => 'category',
                'field'    => 'slug',
                'terms'    => 'video',
            ],
        ]
    ];
    $query = new WP_Query($args);
    while($query->have_posts()) {
        $query->the_post();
        $video_fields = get_fields(get_the_ID());
        $_posts[] = [
            'ID' => get_the_ID(),
            'title' => $Tool->_str_cut(get_the_title(), 0, 20, false),
            'video_link' => $Tool->_value($video_fields['video_link']),
            'video_cover' => $Tool->_value($video_fields['video_cover']['url']),
            'video_duartion' => $Tool->_value($video_fields['video_duartion']),
            'difDate' => $Tool->_get_diff_date(strtotime(get_the_time('Y-m-d H:i:s'))),
        ];
    }
    wp_reset_postdata();
    return $_posts;
}

//获取首页专题区
function _get_index_specials($slug, $num){
    $Tool = new Tools();
    $args = [
        'post_type' => 'post',
        'offset' => 0,
        'posts_per_page' => $num,
        'post_status' => 'publish',
        'orderby'=>'post_date',
        'tax_query' => [
            [
                'taxonomy' => 'category',
                'field'    => 'slug',
                'terms'    => $slug,
            ],
        ]
    ];
    $query = new WP_Query($args);
    $_posts = [];
    while($query->have_posts()) {
        $query->the_post();
        $cat = array_shift(get_the_category());
        $_posts[] = [
            'ID' => get_the_ID(),
            'title' => $Tool->_str_cut(get_the_title(), 0, 20, false),
            'image' => $Tool->_get_img_from_html(get_the_content()),
            'author' => get_the_author(),
            'pubDate' => get_the_time('Y-m-d H:i:s'),
            'difDate' => $Tool->_get_diff_date(strtotime(get_the_time('Y-m-d H:i:s'))),
            'post_modified' => get_the_modified_time('Y-m-d H:i:s'),
            'introduce' => $Tool->_str_cut(get_the_content(), 0, 100, false),
            'link' => get_page_link(),
            'comments' => _get_comments_num(get_the_ID()),
            'category' => get_cat_name($cat->term_id),
            'category_link' => get_category_link($cat->term_id),
            'tags' => get_the_tag_list('', '|', ''),
        ];
    }
    wp_reset_postdata();
    return $_posts;
}

//获取首页文章
function _get_category_posts($slug){
    $args = [
        'post_type' => 'post',
        'offset' => 0,
        'posts_per_page' => 10,
        'post_status' => 'publish',
        'orderby'=>'post_date',
        'tax_query' => [
            [
                'taxonomy' => 'category',
                'field'    => 'slug',
                'terms'    => $slug,
            ],
        ]
    ];
    return _get_post_item($args);
}

//获取分类文章
add_action('wp_ajax_nopriv_get_cate', 'ajax_get_cate');
add_action('wp_ajax_get_cate', 'ajax_get_cate');
function ajax_get_cate(){
    $Tool = new Tools();
    $limit = intval($Tool->_request('limit', 10));
    $page = intval($Tool->_request('page', 1));
    $slug = trim($Tool->_request('post_type'));
    $excerpt_length = intval($Tool->_request('excerpt_length', 100));
    $_posts = [];
    if(!empty($slug)){//导航栏分类文章
        $args = [
                'post_type' => 'post',
                'posts_per_page' => $limit,
                'post_status' => 'publish',
                'orderby'=>'post_date',
                'tax_query' => [
                    [
                        'taxonomy' => 'category',
                        'field'    => 'slug',
                        'terms'    => $slug,
                    ],
                ]
            ];
    }else{//快速预览文章
        $args = [
            'post_type' => 'post',
            'offset' => $limit * max(($page-1), 0),
            'posts_per_page' => $limit,
            'post_status' => 'publish',
            'orderby'=>'post_date',
        ];
    }
    
    $query = new WP_Query($args);
    if($query->have_posts()){
        while($query->have_posts()){
            $query->the_post();

            $cat = array_shift(get_the_category());
            $_posts[] = [
                'ID' => get_the_ID(),
                'title' => get_the_title(),
                'author' => get_the_author(),
                'pubDate' => get_the_time('Y-m-d H:i:s'),
                'post_modified' => get_the_modified_time('Y-m-d H:i:s'),
                'image' => $Tool->_get_img_from_html(get_the_content()),
                'cwb_image_url' => $Tool->_get_img_from_html(get_the_content()),
                'excerpt' => $Tool->_str_cut(get_the_content(), 0, $excerpt_length, false),
                'introduce' => $Tool->_str_cut(get_the_content(), 0, $excerpt_length, false),
                'link' => get_page_link(),
                'comments' => get_comments_number(),
                'category' => get_cat_name($cat->term_id),
                'category_link' => get_category_link($cat->term_id),
                'post_type' => $cat->slug,
                'content' => get_the_content(),
                'tags' => get_the_tag_list('', '|', ''),
                'like' => rand(10, 100),
                'is_ad' => 0,
            ];
        }
    }
    wp_reset_postdata();
    echo $Tool->_json($_posts);
    unset($Tool);
    unset($query);
    die();
}

//获取最新文章
add_action('wp_ajax_nopriv_get_latest', 'ajax_get_latest');
add_action('wp_ajax_get_latest', 'ajax_get_latest');
function ajax_get_latest(){
    $Tool = new Tools();
    $page = intval($Tool->_request('page', 1));
    $posts_per_page = intval($Tool->_request('posts_per_page', 10));
    $excerpt_length = intval($Tool->_request('excerpt_length', 100));
    //分类页面，会传category_id参数
    $category_id = trim($Tool->_request('category_id', 0));

    //获取文章
    $_posts = [];
    $args = [
        'post_type' => 'post',
        'offset' => $posts_per_page * ($page-1),
        'posts_per_page' => $posts_per_page,
        'post_status' => 'publish',
        'orderby'=>'post_date',
    ];
    if(!empty($category_id)){
        $args['tax_query'] = [
            [
                'taxonomy' => 'category',
                'field'    => 'slug',
                'terms'    => $category_id,
            ],
        ];
    }
    $query = new WP_Query($args);
    if($query->have_posts()){
        while($query->have_posts()){
            $query->the_post();

            $cat = array_shift(get_the_category());
            $_posts[] = [
                'ID' => get_the_ID(),
                'title' => get_the_title(),
                'author' => get_the_author(),
                'pubDate' => get_the_time('Y-m-d H:i:s'),
                'post_modified' => get_the_modified_time('Y-m-d H:i:s'),
                'image' => $Tool->_get_img_from_html(get_the_content()),
                'cwb_image_url' => $Tool->_get_img_from_html(get_the_content()),
                'excerpt' => $Tool->_str_cut(get_the_content(), 0, $excerpt_length, false),
                'introduce' => $Tool->_str_cut(get_the_content(), 0, $excerpt_length, false),
                'link' => get_page_link(),
                'comments' => _get_comments_num(get_the_ID()),
                'category' => get_cat_name($cat->term_id),
                'category_link' => get_category_link($cat->term_id),
                'post_type' => $cat->slug,
                'content' => get_the_content(),
                'tags' => get_the_tag_list('', '|', ''),
                'like' => rand(10, 100),
                'is_ad' => 0,
            ];
        }
    }
    wp_reset_postdata();
    echo $Tool->_json($_posts);
    unset($Tool);
    unset($query);
    die();
}

//获取作者最新文章
add_action('wp_ajax_nopriv_get_author_latest', 'ajax_get_author_latest');
add_action('wp_ajax_get_author_latest', 'ajax_get_author_latest');
function ajax_get_author_latest(){
    $Tool = new Tools();
    $page = intval($Tool->_request('page', 1));
    $posts_per_page = intval($Tool->_request('posts_per_page', 4));
    //分类页面，会传category_id参数
    $author_id = trim($Tool->_request('category_id', 0));

    //获取文章
    $_posts = [];
    $args = [
        'post_type' => 'post',
        'offset' => $posts_per_page * ($page-1),
        'posts_per_page' => $posts_per_page,
        'post_status' => 'publish',
        'author' => $author_id,
        'orderby'=>'post_date',
    ];
    $query = new WP_Query($args);
    if($query->have_posts()){
        while($query->have_posts()){
            $query->the_post();

            $cat = array_shift(get_the_category());
            $_posts[] = [
                'ID' => get_the_ID(),
                'title' => get_the_title(),
                'author' => get_the_author(),
                'pubDate' => get_the_time('Y-m-d H:i:s'),
                'post_modified' => get_the_modified_time('Y-m-d H:i:s'),
                'image' => $Tool->_get_img_from_html(get_the_content()),
                'cwb_image_url' => $Tool->_get_img_from_html(get_the_content()),
                'introduce' => $Tool->_str_cut(get_the_content(), 0, 100, false),
                'link' => get_page_link(),
                'comments' => _get_comments_num(get_the_ID()),
                'category' => get_cat_name($cat->term_id),
                'category_link' => get_category_link($cat->term_id),
                'post_type' => $cat->slug,
                'content' => get_the_content(),
                'tags' => get_the_tag_list('', '|', ''),
                'like' => rand(10, 100),
                'is_ad' => 0,
            ];
        }
    }
    wp_reset_postdata();
    echo $Tool->_json($_posts);
    unset($Tool);
    unset($query);
    die();
}

//获取右侧栏推荐位
add_action('wp_ajax_nopriv_get_buzz', 'ajax_get_buzz');
add_action('wp_ajax_get_buzz', 'ajax_get_buzz');
function ajax_get_buzz(){
    $Tool = new Tools();
    $page = intval($Tool->_request('page', 1));
    $posts_per_page = 10;
    $cat = trim($Tool->_request('cat', 'special'));
    //获取文章
    $_posts = [];
    $args = [
        'post_type' => 'post',
        'offset' => $posts_per_page * max(($page-1), 0),
        'posts_per_page' => $posts_per_page,
        'post_status' => 'publish',
        'orderby'=>'post_date',
        'tax_query' => [
            [
                'taxonomy' => 'category',
                'field'    => 'slug',
                'terms'    => $cat,
            ],
        ],
    ];
    $query = new WP_Query($args);
    if($query->have_posts()){
        while($query->have_posts()){
            $query->the_post();
            $_posts[] = [
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'permalink' => get_page_link(),
                'creator_name' => get_the_author(),
                'relative_time' => get_the_time('m月d日 H:i'),
                'url' => get_page_link(),
                'source' => [
                    'name' => 'chinese.engadget.com',
                    'url' =>  get_page_link(),
                ],
            ];
        }
    }
    wp_reset_postdata();
    echo $Tool->_json($_posts);
    unset($Tool);
    die();
}

//获取最新评论
add_action('wp_ajax_nopriv_get_recent_comments', 'ajax_get_recent_comments');
add_action('wp_ajax_get_recent_comments', 'ajax_get_recent_comments');
function ajax_get_recent_comments(){
    $Tool = new Tools();
    //评论关闭
    if(intval(get_option('comment-open')) != 1){
        $Tool->_json([], -10005);
    }
    global $wpdb;
    $page = intval($Tool->_request('page', 1));
    $pageSize = 10;
    $offset = max($page-1, 0) * $pageSize;
    $sql = "SELECT p.post_title, c.* FROM wp_posts AS p LEFT JOIN wp_comments_meta AS c ON c.post_id = p.ID
            WHERE c.pid = 0 ORDER BY c.id DESC LIMIT {$offset}, {$pageSize}";
    $_data = $Tool->_object_to_array($wpdb->get_results($sql));
    foreach($_data as $k => $v){
        $_data[$k]['link'] = get_permalink($Tool->_value($v['post_id'], 0));
        $_data[$k]['garvatar'] = get_stylesheet_directory_uri() . '/images/garvatar/garvatar.jpg';
    }
    echo $Tool->_json($_data, 10005);
    unset($Tool);
    die();
}

//添加评论
add_action('wp_ajax_nopriv_add_comment', 'ajax_add_comment');
add_action('wp_ajax_add_comment', 'ajax_add_comment');
function ajax_add_comment(){
    global $wpdb;
    $Tool = new Tools();
    //评论关闭
    if(intval(get_option('comment-open')) != 1){
        $Tool->_json([], -10005);
    }
    $db = new Db($wpdb, 'wp_comments_meta');
    $from_email = $Tool->_request('from_email', '');
    $from_author = $Tool->_request('from_author', '');
    $to_email = $Tool->_request('to_email', '');
    $to_author = $Tool->_request('to_author', '');
    $comment = $Tool->_request('comment', '');
    $post_id = $Tool->_request('post_id', 0);
    $pid = $Tool->_request('comment_id', 0);
    $pattern = '/^[0-9a-zA-Z]+@(([0-9a-zA-Z]+)[.])+[a-z]{2,4}$/i';
    if(!preg_match($pattern, $from_email)){
        $Tool->_json([], -10002);
    }
    if(strlen($from_author) > 90){
        $Tool->_json([], -10003);
    }
    if(strlen($comment) > 1500){
        $Tool->_json([], -10004);
    }
    $res = $db->_insert([
        'pid' => $pid,
        'post_id' => $post_id,
        'avarta' => '/images/garvatar/garvatar.jpg',
        'from_email' => $from_email,
        'from_author' => $from_author,
        'to_author' => $to_author,
        'to_email' => $to_email,
        'content' => $comment,
        'created_at' => time()
    ]);
    if($res){
        $_info = $db->_select_one(['id' => $wpdb->insert_id]);
        $_data = [
            'comment_id' => $wpdb->insert_id,
            'avarta' => '',
            'post_id' => $_info->post_id,
            'content' => $_info->content,
            'publish_time' => date('Y-m-d H:i:s', $_info->created_at),
        ];
        $Tool->_json($_data, 10000);
    }else{
        $Tool->_json([], -10000);
    }
    unset($Tool);
    unset($db);
    die();
}

//异步加载评论
add_action('wp_ajax_nopriv_load_comments', 'ajax_load_comments');
add_action('wp_ajax_load_comment', 'ajax_load_comments');
function ajax_load_comments(){
    global $wpdb;
    $Tool = new Tools();
    if(intval(get_option('comment-open')) != 1){
        $Tool->_json([], -10005);
    }
    $post_id = $Tool->_request('post_id', 0);
    $sort = $Tool->_request('sort', 'created at desc');
    $Tool = new Tools();
    $db = new Db($wpdb, 'wp_comments_meta');
    $_list = $db->_select(['post_id' => $post_id], 0, 0, $sort);
    if(empty($_list)){
        $Tool->_json([], -10000);
    }
    $_list = $Tool->_object_to_array($_list);
    $tree = _get_all_children_comments($_list);
    $_blist = $Tool->_index_array($_list, 'id');
    foreach($_blist as $k => $v){
        $_blist[$k]['comment_id'] = $v['id'];
        $_blist[$k]['avarta'] = get_stylesheet_directory_uri() . $v['avarta'];
        $_blist[$k]['publish_time'] = date('Y-m-d H:i:s', $v['created_at']);
    }
    $_data = [
        'list' => $_blist,
        'tree' => $tree,
    ];
    $Tool->_json($_data, 10000);
    unset($Tool);
    unset($db);
    die();
}

//投票
add_action('wp_ajax_nopriv_vote', 'ajax_vote');
add_action('wp_ajax_vote', 'ajax_vote');
function ajax_vote(){
    global $wpdb;
    $Tool = new Tools();
    $comment_id = intval($Tool->_request('comment_id', 0));
    $type = intval($Tool->_request('type', 0));
    $db = new Db($wpdb, 'wp_comments_meta');
    if(!in_array($type, [1, 2])){
        $Tool->_json([], -10005);
    }
    $comment = $Tool->_object_to_array($db->_select_one(['id' => $comment_id]));
    if(!$comment){
        $Tool->_json([], -10006);
    }
    if($type === 1){
        $data = [
            'vote_up' => $comment['vote_up'] + 1
        ];
    }else{
        $data = [
            'vote_down' => $comment['vote_down'] + 1
        ];
    }
    $rst = $db->_update(['id' => $comment_id], $data);
    if($rst === false){
        $Tool->_json([], -10000);
    }
    $Tool->_json([], 10000);
    unset($Tool);
    unset($db);
    die();
}

//获取所有子评论
function _get_all_children_comments($_list){
    $cat = new Category($_list);
    $arr = $cat->_son_father();
    $p_arr = [];
    $s_arr = [];
    foreach($arr as $s => $f){
        if($f == 0){
            $p_arr[$s] = array();
        }else{
            $s_arr[] = $s;
        }
    }
    foreach($s_arr as $k => $v){
        $p = $cat->_ancestor($v, false);
        array_push($p_arr[$p], $v);
    }
    unset($cat);
    return $p_arr;
}

//获取评论数量
function _get_comments_num($post_id = 0){
    if(!is_int($post_id)){
        return false;
    }
    global $wpdb;
    $db = new Db($wpdb, 'wp_comments_meta');
    $count = $db->_count(['post_id' => $post_id, 'pid' => 0]);
    unset($db);
    return $count;
}


//获取详情页相关文章 $type 1-分类相关 2-标签相关
function _get_rel_posts($cat_id, $post_id, $type = 1, $size = 5){
    $Tool = new Tools();
    //获取文章
    $_posts = [];
    if($type == 1){
        $args = [
            'category__in' => [$cat_id],
            'post__not_in' => [$post_id],
            'showposts' => $size,
            'caller_get_posts' => 1
        ];
    }else if($type == 2){
        $tag_list = [];
        $post_tags = wp_get_post_tags($post_id);
        foreach ($post_tags as $tag) {
            // 获取标签列表
            $tag_list[] .= $tag->term_id;
            // 随机获取标签列表中的一个标签
            $post_tag = $tag_list[ mt_rand(0, count($tag_list) - 1) ];
            $args = [
                'tag__in' => [$post_tag],
                'category__not_in' => [],  // 不包括的分类ID
                'post__not_in' => [$post_id],
                'showposts' => $size,     // 显示相关文章数量
                'caller_get_posts' => 1
            ];
        }
    }

    $query = new WP_Query($args);
    while($query->have_posts()) {
        $query->the_post();
        $cat = array_shift(get_the_category());
        $_posts[] = [
            'ID' => get_the_ID(),
            'title' => $Tool->_str_cut(get_the_title(), 0, 20, false),
            'image' => $Tool->_get_img_from_html(get_the_content()),
            'author' => get_the_author(),
            'pubDate' => get_the_time('Y-m-d H:i:s'),
            'difDate' => $Tool->_get_diff_date(strtotime(get_the_time('Y-m-d H:i:s'))),
            'introduce' => $Tool->_str_cut(get_the_content(), 0, 100, false),
            'link' => get_page_link(),
            'comments' => _get_comments_num(get_the_ID()),
            'category' => get_cat_name($cat->term_id),
            'category_link' => get_category_link($cat->term_id),
            'tags' => get_the_tag_list('', '|', ''),
        ];
    }
    wp_reset_postdata();
    unset($Tool);
    return $_posts;
}


//获取首页，分类页文章
function _get_post_item($args){
    $Tool = new Tools();
    $_posts = [];
    $query = new WP_Query($args);
    while($query->have_posts()) {
        $query->the_post();
        $cat = array_shift(get_the_category());
        $_posts[] = [
            'ID' => get_the_ID(),
            'title' => $Tool->_str_cut(get_the_title(), 0, 20, false),
            'image' => $Tool->_get_img_from_html(get_the_content()),
            'author' => get_the_author(),
            'pubDate' => get_the_time('Y-m-d H:i:s'),
            'difDate' => $Tool->_get_diff_date(strtotime(get_the_time('Y-m-d H:i:s'))),
            'introduce' => $Tool->_str_cut(get_the_content(), 0, 100, false),
            'link' => get_page_link(),
            'comments' => _get_comments_num(get_the_ID()),
            'category' => get_cat_name($cat->term_id),
            'category_link' => get_category_link($cat->term_id),
            'tags' => get_the_tag_list('', '|', ''),
        ];
    }
    wp_reset_postdata();
    unset($Tool);
    return $_posts;
}




//通过页面别名获取页面链接
function _get_page_url($slug = ''){
    if(empty($slug)){
        return '';
    }
    global $wpdb;
    $db = new Db($wpdb, $wpdb->posts);
    $post = $db->_select_one(['post_name ' => $slug]);
    if(!$post){
        return '';
    }
    unset($db);
    return get_permalink($post->ID);

}

//获取某个模板页面的扩展字段
function get_template_fields($template){
    if(empty($template)){
        return false;
    }
    global $wpdb;
    $db = new Db($wpdb, $wpdb->posts);
    $page_id = $db->_get_page_id_from_template($template);
    unset($db);
    return get_fields($page_id);
}

//获取默认参数
function _param($key){
    return (new Tools())->_params($key);
}

//测试-打印函数
// function hb($data, $type = true) {
//     if($type){
//         file_put_contents('E:\wamp\www\1.txt', print_r($data , true));
//     }else{
//         file_put_contents('E:\wamp\www\1.txt', print_r($data , true), FILE_APPEND);
//     }
// }

?>