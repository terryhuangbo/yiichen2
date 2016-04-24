<?php
if (get_option('wpyou_exptitle') || get_option('wpyou_picats') || get_option('wpyou_expats')) {
	$exptitleCats = get_option('wpyou_exptitle');
	$picCats = get_option('wpyou_picats');
	$expCats = get_option('wpyou_expats');}
	$exptitleArrays = explode(",",$exptitleCats);
	$picArrays = explode(",",$picCats);
	$expArrays = explode(",",$expCats);
	if(in_category($exptitleCats) || post_is_in_descendant_category( $exptitleCats )){include('archive_articleList.php');}
	elseif(in_category($picArrays) || post_is_in_descendant_category( $picArrays )){include('archive_articleList.php');}
	elseif(in_category($expArrays) || post_is_in_descendant_category( $expArrays )){include('archive_articleList.php');}
	else{include('archive_articleList.php');  
        
}
?>