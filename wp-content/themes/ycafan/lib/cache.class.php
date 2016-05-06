<?php

/**
 * 公共缓存类
 **/
class Cache
{
    private $cache;
    private $on;
    public $message;
    public function __construct()
    {
        try {
            $this->cache = memcache_connect('127.0.0.1', 11211);
            $this->on = get_option('cache-switch') == 'on' ? true : false;
        } catch (Exception $e) {
            $this->cache = false;
            $this->on = get_option('cache-switch') == 'on' ? true : false;
            $this->message = $e->getMessage();
        }
    }
    /**
     * 设置缓存
     * * @param $key string 缓存的key
     * * @param $val mix 缓存的val
     * * @param $expire int|string 过期的时间，如果为string 则从get_option中获取
     * @return mixed mix
     **/
    public function _set($key, $val, $expire){
        //无法连接memcache服务器
        if(!$this->cache){
            $this->message = 'Memcache set failed: Con not connect to Memcache Server';
            return $val;
        }
        //缓存关闭
        if(!$this->on){
            $this->flush();
            $this->message = 'Memcache set failed: Gerneral Cache Switch is off';
            return $val;
        }
        //$key或者$val或者$expire为空
        if(empty($key) || empty($val) || empty($expire)){
            $this->message = 'Memcache set failed: Parameters are illegal';
            return $val;
        }
        //如果$expire为数值
        if(is_numeric($expire)){
            $this->set($key, $val, 0, $expire);
            $this->message = 'Memcache set Successfully';
            return $val;
        //如果$expire为字符串
        }else if(is_string($expire)){
            //判断是否设置该缓存过期时间，如果没有设置，取默认值
            $expire_time = get_option($expire);
            if($expire_time == ''){
                $this->message = 'Memcache set failed: Key is not set';
                return $val;
            }else if(intval($expire_time) < 0){
                $this->cache->delete($key);
                $this->message = 'Memcache '. $key .' has been deleted';
                return $val;
            }else{
                $this->set($key, $val, 0, $expire_time);
                $this->message = 'Memcache set Successfully: The expired time is '. $expire_time .' second';
                return $val;
            }
        }else{
            $this->message = 'Memcache set failed: Parameter expire are illegal';
            return $val;
        }
    }

    /**
     * 获取缓存
     * @param $key string 缓存的key
     *  @param $expire string 过期的时间，如果为string 则从get_option中获取
     * @return mixed mix
     **/
    public function _get($key, $expire = ''){
        //无法连接memcache服务器
        if(!$this->cache){
            $this->message = 'Memcache get failed: Con not connect to Memcache Server';
            return false;
        }
        //缓存关闭
        if(!$this->on){
            $this->message = 'Memcache get failed: Gerneral Cache Switch is off';
            return false;
        }
        //$key为空
        if(empty($key)){
            $this->message = 'Memcache get failed: Parameters $key is illegal';
            return false;
        }
        if(!empty($expire)){
            //判断是否设置该缓存过期时间，如果没有设置，取默认值
            $expire_time = get_option($expire);
            if($expire_time == ''){
                $this->message = 'Memcache set failed: Key is not set';
                return false;
            }else if(intval($expire_time) < 0){
                $this->message = 'Memcache '. $key .' has been closed';
                return false;
            }
        }
        $_cache_val = $this->get($key);
        if(!$_cache_val){
            $this->message = 'Memcache get Successfully: but the key is not found';
            return false;
        }
        $this->message = 'Memcache get Successfully';
        return $_cache_val;
    }

    public function test(){
        return $this->on;
    }

}
?>