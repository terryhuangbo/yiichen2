<?php

/**
 * 公共方法类
 **/
class Tools
{

    public function __construct()
    {

    }

    /**
     * 获取值
     * @param $data mixed 要判断是否存在的值
     * @param $default mixed 当$data不存在时默认值
     * @param $empty bool true-同时验证$data还不能为空, 默认不验证
     * @return mixed mix
     **/
    public function _value($data, $default = '', $empty = false)
    {
        if ($empty) {
            return !empty($data) ? $data : $default;
        } else {
            return isset($data) ? $data : $default;
        }
    }

    /**
     * 获取Request请求的值
     * @param $key string 要获取的Request的key， 如果什么都不传，返回所有Request值
     * @param $default mixed  当请求参数不存在时的默认值
     * @return mixed | bool
     **/
    public function _request($key = null, $default = '')
    {
        if (is_null($key)) {
            return array_merge($_POST, $_GET);
        }
        return isset($_POST[$key]) ? $_POST[$key] : (isset($_GET[$key]) ? $_GET[$key] : $default);
    }

    /**
     * 将数组转化为json格式,并输出
     * @param $array array
     * @param $code int 正确/错误代码 非负数，大于0表示成功，小于0表示失败
     * @return string | bool
     **/
    public function _json($array = [], $code = 10000)
    {
        $result = [];
        if (!is_array($array)) {
            return false;
        }
        $result['code'] = $code;
        $result['msg'] = $this->_msg($code);
        $result['ret'] = $array;
        echo json_encode($result);
        exit();
    }

    /**
     * 获取错误消息
     * @param $code int 正确/错误代码 正整数表示成功，负整数表示失败，$code绝对值相同的两个状态相对应
     * @return string | bool
     **/
    private function _msg($code)
    {
        $_msg = require('msg.php');
        if (!is_int($code) || $code == 0) {
            return $_msg['0'];
        }
        $_default_msg = $code > 0 ? $_msg['10000'] : $_msg['-10000'];
        return $this->_value($_msg[$code], $_default_msg);
    }

    /**
     * 获取默认参数
     * @param $key string 参数key值
     * @return mixed|bool
     **/
    public function _params($key)
    {
        $_params = require('params.php');
        return $this->_value($_params[$key], '', true);
    }

    /**
     * 对象转数组
     * @param $obj object 对象
     * @return array
     **/
    function _object_to_array($obj)
    {
        $_arr = is_object($obj) ? get_object_vars($obj) : $obj;
        foreach ($_arr as $key => $val) {
            $val = (is_array($val) || is_object($val)) ? $this->_object_to_array($val) : $val;
            $arr[$key] = $val;
        }
        return $arr;
    }
    /**
     * 从hmtl截取字符
     * @param $str string
     * @param $start int
     * @param $length int
     * @param $type bool ture-截取英文字符；false-截取中文
     * @return array
     **/
    function _str_cut($str, $start = 0, $length = 0, $type = true)
    {
        if($type) {
            return substr(trim(strip_tags($str)), $start, $length);
        }else{
            return mb_substr(trim(strip_tags($str)), $start, $length, 'utf-8');
        }
    }

    /**
     * 标题过滤
     * @param $string String
     * @return type
     */
    public function _filter_title($string)
    {
        $string = trim($string);
        $string = str_replace("'", "", $string);
        $string = strip_tags($string);
        $string = stripslashes($string);

        return $string;
    }

    /**
     * 重新索引某个数组
     * @param $array array
     * @param $index string 索引值，必须为数组里面的一个关联key值
     * @return array | bool
     **/
    function _index_array($array, $index = '')
    {
        $barray = [];
        if(empty($index)){
            return false;
        }
        foreach($array as $key => $val){
            if(isset($val[$index])){
                $barray[$val[$index]] = $val;
            }else{
                return false;
            }
        }
        return $barray;
    }



    /**
     * 从html中获取img元素
     * @param $html string
     * @param $default bool|string
     * @return string
     **/
    public function _get_img_from_html($html, $default = '')
    {
        $patern = '/<\s*img\s+[^>]*?src\s*=\s*(\'|\")(.*?)\\1[^>]*?\/?\s*>/i';
        preg_match_all($patern, $html, $match);
        $_default_img = empty($default) ? $this->_params('defautl_post_img') : $default;
        if(!empty($match[2][0])){
            $_img = $match[2][0];
            $_img_new = str_replace('www.yca.com', 'review.youngchina.org', $_img);
        }else{
            $_img_new = $_default_img;
        }
        return $_img_new;
    }

    /**
     * 获取距离现在的差异时间
     * @param $time int
     * @param $excess int 超过时间 默认30天
     * @param $fomamt string 超过时间后显示格式
     * @return string 差异时间 如‘2分钟以前，3天以前等等’
     **/
    function _get_diff_date($time, $excess = 2592000, $fomamt = 'Y年m月d日 H:i') {
        $now = time();
        $diff = $now > $time ? $now - $time : $time - $now;
        if($diff > $excess){
            return date($fomamt, $time);
        }
        $d = floor($diff / 3600 / 24);
        $h = floor($diff / 3600);
        $m = floor($diff / 60);
        if ($d > 0) {
            return $d . '天前';
        } else if ($h > 0) {
            return $h . '小时前';
        } else if ($m > 0) {
            return $m . '分钟前';
        } else {
            return '1分钟前';
        }
    }




}
?>