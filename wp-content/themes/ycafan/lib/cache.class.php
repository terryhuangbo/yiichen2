<?php

/**
 * 公共缓存类
 **/
class Cache
{
    public $cache;
    public function __construct()
    {
        $this->cache = memcache_connect('localhost', 11211);
    }

}
?>