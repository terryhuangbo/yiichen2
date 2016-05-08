<?php

/**
 * 公共方法类-数据库相关
 **/
class Db
{
    //数据库连接类
    private $db;
    //数据表
    private $tb;

    public function __construct($wpdb, $wptb)
    {
        $this->db = $wpdb;
        $this->tb = $wptb;
    }

    /**
     * 读取数据信息
     * @param $where string|array
     * @return array | bool
     **/
    public function _select_one($where = [])
    {
        $sql = 'SELECT * FROM ' . $this->tb;
        //where
        if ($where) {
            $_where = self::where($where);
            if (!$_where) {
                return false;
            }
            $sql .= ' WHERE' . $_where;
        }
        $result = $this->db->get_row($sql);
        return $result;
    }

    /**
     * 读取数据列表
     * @param $where string|array
     * @param $page int
     * @param $pageSize int
     * @param $orderby string
     * @return array | bool
     **/
    public function _select($where = [], $page = 1, $pageSize = 0, $orderby = '')
    {
        $sql = 'SELECT * FROM ' . $this->tb;
        //where
        if ($where) {
            $_where = self::where($where);
            if (!$_where) {
                return false;
            }
            $sql .= ' WHERE' . $_where;
        }
        //limit
        $page = max(1, $page);
        if (!empty($pageSize)) {
            $sql .= ' LIMIT ' . ($page - 1) * $pageSize . ' ' . $pageSize;
        }
        //orderby
        if (!empty($orderby)) {
            $sql .= ' ORDER BY ' . $orderby;
        }
        $result = $this->db->get_results($sql);
        return $result;
    }

    /**
     * 插入数据
     * @param $data array
     * @return array | bool
     **/
    public function _insert($data = [])
    {
        if (empty($data) || !is_array($data)) {
            return false;
        }
        $keys = array_keys($data);
        $values = array_values($data);
        $_keys_str = ' (`' . implode('`, `', $keys) . '`) ';
        $_values_str = ' ("' . implode('", "', $values) . '") ';
        $sql = 'INSERT INTO ' . $this->tb . $_keys_str . ' VALUES ' . $_values_str;
        return $this->db->query($sql);
    }

    /**
     * 更新数据
     * @param $where string|array
     * @param $data array
     * @return array | bool
     **/
    public function _update($where = [], $data = [])
    {
        $_update_val = '';
        $i = 0;
        if (empty($data) || empty($where)) {
            return false;
        }
        $_where = self::where($where);
        if (empty($_where)) {
            return false;
        }
        foreach ($data as $key => $val) {
            $_update_val .= ($i == 0 ? ' ' : ', ') . ' `' . trim($key) . '`' . ' = "' . trim($val) . '"';
            $i++;
        }
        $sql = 'UPDATE ' . $this->tb . ' SET' . $_update_val . ' WHERE ' . $_where;
        return $this->db->query($sql);
    }

    /**
     * 删除数据
     * @param $where string|array
     * @return array | bool
     **/
    public function _delete($where = [])
    {
        if (empty($where)) {
            return false;
        }
        $_where = self::where($where);
        if (empty($_where)) {
            return false;
        }
        $sql = 'DELETE FROM ' . $this->tb . ' WHERE ' . $_where;
        return $this->db->query($sql);
    }

    /**
     * 获取where条件
     * @param $where string | array 要判断是否存在的值
     * @return string
     **/
    protected static function where($where)
    {
        $_where_str = '';
        $i = 0;
        if (empty($where) || (!is_string($where) && !is_array($where))) {
            return false;
        }
        //string
        if (is_string($where)) {
            return $where . ' ';
        }
        //array
        foreach ($where as $k => $v) {
            $and = $i == 0 ? ' ' : ' AND';
            $_preg_where_str = self::preg_where($k, $v);
            if (!$_preg_where_str) {
                return false;
            }
            $_where_str .= $and . $_preg_where_str . ' ';
            $i++;
        }
        return $_where_str;
    }

    /**
     * 匹配where条件的key和value
     * @param $key string
     * @param $val string|array
     * @return string|bool
     **/
    protected static function preg_where($key, $val)
    {
        $key = trim($key);
        //$key值中匹配模式
        $opr_pattern = '/([a-z0-9_-]+)\s+(>|<|>=|<=|<>|like|not\s+like|in|not\s+in|)$/i';
        $str_pattern = '/^[a-z0-9_-]+$/i';
        $in_pattern = '/\s+in|\s+not\s+in/';
        //仅含有field
        if (preg_match($str_pattern, $key)) {
            $operator = '=';
            $field = $key;
            $_val_str = '"' . $val . '"';
        } else { //含有field和操作符
            //从$key中提取操作符和字段
            preg_match($opr_pattern, $key, $match);
            list(, $field, $operator) = $match;
            if (empty($field) || empty($operator)) {
                return false;
            }
            //如果操作符为in或者not in, 则将val转化为($v1, $v2, ...)形式
            $_val_to_array = preg_match($in_pattern, $key);
            if ($_val_to_array && !is_array($val) || !$_val_to_array && is_array($val)) {
                return false;
            }
            if ($_val_to_array) {
                $_val_str = '("' . implode('", "', $val) . '")';
            } else {
                $_val_str = '"' . $val . '"';
            }
        }
        return ' `' . $field . '` ' . $operator . ' ' . $_val_str;
    }

    /**
     * 通过页面模板获取页面ID
     * @param $template string
     * @return int
     **/
    public function _get_page_id_from_template($template) {
        //只能适用于一个模板一个页面的情况
        $page_id = $this->db->get_var($this->db->prepare("SELECT post_id
       FROM {$this->db->postmeta}, {$this->db->posts}
       WHERE post_id = ID
          AND post_status = 'publish'
          AND meta_key = '_wp_page_template'
          AND meta_value = %s
          LIMIT 1;", $template));
        return $page_id;
    }

}

?>