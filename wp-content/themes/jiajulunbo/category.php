<?php

if ( is_category('company-news') ) {
include(TEMPLATEPATH . '/category-news.php');
}
// elseif 在一次判断 想在加判断复制代码
elseif ( is_category('company-news1') ) { // plugin 为category的别名
include(TEMPLATEPATH . '/category-news.php');
}
elseif ( is_category('company-case') ) { // plugin 为category的别名
include(TEMPLATEPATH . '/category-case.php');
}
elseif ( is_category('company-case1') ) { // plugin 为category的别名
include(TEMPLATEPATH . '/category-case.php');
}
elseif ( is_category('company-solution') ) { // plugin 为category的别名
include(TEMPLATEPATH . '/category-solution.php');
}
elseif ( in_category('company-product10')){
include(TEMPLATEPATH . '/category-product.php');
}
elseif ( in_category('company-product1') || in_category('company-product2') || in_category('company-product3') || 
in_category('company-product4') || in_category('company-product5')|| in_category('company-product6')|| 
in_category('company-product7')|| in_category('company-product8')|| in_category('company-product9')|| 
in_category('company-product11')) { // plugin 为category的别名
include(TEMPLATEPATH . '/category-product-item.php');
}
// elseif 结束
else {
include(TEMPLATEPATH . '/category-all.php');
}
?>


