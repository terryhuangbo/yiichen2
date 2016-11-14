<?php

if ( in_category('company-news') ) {
include(TEMPLATEPATH . '/single-news.php');
}
// elseif 在一次判断 想在加判断复制代码
elseif ( in_category('company-video') ) { // plugin 为category的别名
include(TEMPLATEPATH . '/single-video.php');
}
elseif ( in_category('company-product') || in_category('company-product1') || in_category('company-product2') || in_category('company-product3') || in_category('company-product4') || in_category('company-product5')|| in_category('company-product6')|| in_category('company-product7')|| in_category('company-product8')|| in_category('company-product9')|| in_category('company-product10')) { // plugin 为category的别名
include(TEMPLATEPATH . '/single-product.php');
}
elseif ( in_category('company-solution') ) { // plugin 为category的别名
include(TEMPLATEPATH . '/single-solution.php');
}
elseif ( in_category('company-case') ) { // plugin 为category的别名
include(TEMPLATEPATH . '/single-case.php');
}
// elseif 结束
else {
include(TEMPLATEPATH . '/single-all.php');
}
?>