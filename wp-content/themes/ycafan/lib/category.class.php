<?php

/**
 * 无限极分类-二维无限分类列表
 **/
class Category
{
    public function __construct()
    {

    }

    /**
     * 从二维无限分类列表中获取格式化的树形数据
     * * @param $list array 无限分类二位数组，其中必须要有id和pid
     * * @param $pid int $list中顶级分类id
     * * @param $level int $list中顶级分类的层级
     * * @param $html string 上下层级之间的标示符号
     * @return mixed mix
     **/
    public function _sort($list, $pid = 0, $level = 0, $html = '--')
    {
        static $tree = array();
        foreach ($list as $v) {
            if ($v['pid'] == $pid) {
                $v['sort'] = $level;
                $v['html'] = str_repeat($html, $level);
                $tree[] = $v;
                $this->_sort($list, $v['id'], $level + 1);
            }
        }
        return $tree;
    }

    /**
     * 获取分类的无限极子分类，以树型结构显示
     * * @param $list array 无限分类二位数组，其中必须要有id和pid
     * * @param $son string 子节点节点名
     * @return mixed mix
     **/
    public function _tree($list, $son = 'son')
    {
        foreach($list as $item)
            $list[$item['pid']][$son][$item['id']] = &$list[$item['id']];
        return isset($list[0][$son]) ? $list[0][$son] : array();
    }

    /**
     * 获取分类的祖先分类
     * * @param $list array 无限分类二位数组，其中必须要有id和pid
     * * @param $id int 分类id
     * @return mixed mix
     **/
    public function _ancestor($list, $id)
    {
        $list = array_column($list, 'pid', 'id');
        while($list[$id]) {
            $id = $list[$id];
        }
        return $id;
    }

    /**
     * 获取id => pid 数组
     * * @param $list array 无限分类二位数组，其中必须要有id和pid
     * @return mixed mix
     **/
    public function _son_father($list)
    {
        if(empty($list)){
            return false;
        }
        return array_column($list, 'pid', 'id');
    }


}
?>