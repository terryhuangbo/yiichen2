<?php
/**
 * 文章详情页
 */
if(in_category('quotation')){//语录
    include(TEMPLATEPATH . '/single-quotation.php');
}else if(in_category('video')){ //视频
    include(TEMPLATEPATH . '/single-video.php');
}else{
    include(TEMPLATEPATH . '/single-common.php');
}


?>


