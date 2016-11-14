<?php

/*添加主题选项*/
add_action('admin_menu', 'mytheme_page');
 
function mytheme_page (){
 
	if ( count($_POST) > 0 && isset($_POST['mytheme_settings']) ){
 
		$options = array (
		        'keywords',
				'description',
				'analytics',
				
				'logo1',
				'logo2',
				'record_number',
				'add',
				'tel',
				'mobile',
				'statement',
				'contact1',
				'contact2',
				'contact3',
				
				'service1',
				'service2',
				'service3',
				'service4',
				'time',
				
				'tel2',
				'tel3',
				'new_tu',
				'v_tu',
				
				'yczs_1',
				'yczs_2',
				
		);

		foreach ( $options as $opt ){
			delete_option ( 'mytheme_'.$opt, $_POST[$opt] );
			add_option ( 'mytheme_'.$opt, $_POST[$opt] );	
		}
	}
 
	add_theme_page(__('主题选项'), __('主题选项'), 'edit_themes', basename(__FILE__), 'mytheme_settings');
 
}     
//加载js(wp自带)  
wp_enqueue_script('thickbox');   
//加载css(wp自带)   
wp_enqueue_style('thickbox');  
 
function mytheme_settings(){?>
 
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery-2.1.1.min.js"></script> 
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/upload.js"></script>  
<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/xuanxiang.css" type="text/css" />
<script type="text/javascript">
// 收缩展开效果
$(document).ready(function(){

	$(".box h1").click(function(){
		$(this).next(".text").slideToggle("slow");
	})

	
});
</script>	

<style>
	.wrap,textarea,em{font-family:'Century Gothic','Microsoft YaHei',Verdana;}
	fieldset{width:100%;border:1px solid #aaa;padding-bottom:20px;margin-top:20px;-webkit-box-shadow:rgba(0,0,0,.2) 0px 0px 5px;-moz-box-shadow:rgba(0,0,0,.2) 0px 0px 5px;box-shadow:rgba(0,0,0,.2) 0px 0px 5px;}
	legend{margin-left:5px;padding:0 5px;color:#2481C6;background:#F9F9F9;cursor:pointer;}
	textarea{width:70%;font-size:11px;border:1px solid #aaa;background:none;-webkit-box-shadow:rgba(0,0,0,.2) 1px 1px 2px inset;-moz-box-shadow:rgba(0,0,0,.2) 1px 1px 2px inset;box-shadow:rgba(0,0,0,.2) 1px 1px 2px inset;-webkit-transition:all .4s ease-out;-moz-transition:all .4s ease-out; height:28px;}
	textarea:focus{-webkit-box-shadow:rgba(0,0,0,.2) 0px 0px 8px;-moz-box-shadow:rgba(0,0,0,.2) 0px 0px 8px;box-shadow:rgba(0,0,0,.2) 0px 0px 8px;outline:none;}
	.wrap .box h1{height:35px;background:#ebebeb;font-size: 18px;line-height: 35px; padding-left:15px; cursor:pointer;}
	.text{ display:none;}
	.text em{ display:block; width:100%;}
	 .ultesx{ display:block; float:left;}
</style> 
<div class="wrap">
<?php   
	$ct = wp_get_theme();
	$screenshot = $ct->get_screenshot();
	$class = $screenshot ? 'has-screenshot' : '';

	$customize_title = sprintf( __( 'Customize &#8220;%s&#8221;' ), $ct->display('Name') );
 ?>
<?php   
	$ct = wp_get_theme();
	$screenshot = $ct->get_screenshot();
	$class = $screenshot ? 'has-screenshot' : '';
	$customize_title = sprintf( __( 'Customize &#8220;%s&#8221;' ), $ct->display('Name') );
 ?>    

 <div style=" width:96%; padding:10px 2%; float:left;">
	<h1><a href="javaScript:void(0)" >网站主题基本设置</a></h1>
</div>
<ul class="ultesx">
<form method="post" action="">
<li class="box"> 
	<h1>全站SEO设置</h1>
	<div class="text" >
	<fieldset>
	<legend><strong>SEO代码添加</strong></legend>
		<table class="form-table">
			<tr><td>
				<em>网站关键词（Meta Keywords），中间用半角逗号隔开。如： 折腾WordPress,生活记录,独立博客,林木木</em>
				<textarea name="keywords" id="keywords" rows="3" cols="70"><?php echo get_option('mytheme_keywords'); ?></textarea>
			</td></tr>
			<tr><td>
				<em>网站描述（Meta Description），针对搜索引擎设置的网页描述。如： 这儿是林木木童鞋记录分享交流的私人领地</em>
				<textarea name="description" id="description" rows="3" cols="70"><?php echo get_option('mytheme_description'); ?></textarea>
			</td></tr>
		</table>
	</fieldset>
 
 
	<fieldset>
	<legend><strong>统计代码添加</strong></legend>
		<table class="form-table">
			<tr><td>
				<textarea name="analytics" id="analytics" rows="5" cols="70"><?php echo stripslashes(get_option('mytheme_analytics')); ?></textarea>
			</td></tr>
		</table>
	</fieldset>
</div>
</li>


<li class="box"> <h1>主选项设置</h1>
<div class="text" >
    <fieldset>
	<legend><strong>logo图片添加</strong></legend>
		<table class="form-table">
			<tr><td>
				<em>输入网站头部logo图片地址。（图片大小:207px*51px） 如：http://localhost/wordpress/logo.jpg</em>
				<textarea name="logo1" id="logo1" rows="1" cols="70"><?php echo get_option('mytheme_logo1'); ?></textarea>
                <input type="button" name="upload_button" class="button"  value="上传" id="upbottom"/>   
			</td></tr>
			<tr><td>
				<em>输入网站尾部logo图片地址。（图片大小:281px*89px） 如：http://localhost/wordpress/logo.jpg</em>
				<textarea name="logo2" id="logo2" rows="1" cols="70"><?php echo get_option('mytheme_logo2'); ?></textarea>
                <input type="button" name="upload_button" class="button"  value="上传" id="upbottom"/>   
			</td></tr>
		</table>
	</fieldset>
</div>
</li>

<li class="box"> <h1>联系方式设置</h1>
<div class="text" >
    <fieldset>
    <legend><strong>联系方式</strong></legend>
		<table class="form-table">
			<tr><td>
				<em>输入公司详细地址</em>
				<textarea name="add" id="add" rows="1" cols="70"><?php echo get_option('mytheme_add'); ?></textarea>
			</td></tr>
			<tr><td>
				<em>输入手机号码</em>
				<textarea name="mobile" id="tel" rows="1" cols="70"><?php echo get_option('mytheme_mobile'); ?></textarea>
			</td></tr>
			<tr><td>
				<em>输入固定电话</em>
				<textarea name="tel" id="tel" rows="1" cols="70"><?php echo get_option('mytheme_tel'); ?></textarea>
			</td></tr>
            <tr><td>
				<em>输入您的传真号码</em>
				<textarea name="contact1" id="contact1" rows="1" cols="70"><?php echo get_option('mytheme_contact1'); ?></textarea>
			</td></tr>
            <tr><td>
				<em>输入您的e-mil</em>
				<textarea name="contact2" id="contact2" rows="1" cols="70"><?php echo get_option('mytheme_contact2'); ?></textarea>
			</td></tr>
		</table>
 
	</fieldset>
    
    <fieldset>
    <legend><strong>地图设置</strong></legend>
		<table class="form-table">
			<tr><td>
				<em>输入百度公司想要搜索的地址 如：湖南省长沙市雨花区劳动西华都</em>
				<textarea name="contact3" id="contact3" rows="1" cols="70"><?php echo get_option('mytheme_contact3'); ?></textarea>
			</td></tr>
		</table>
	</fieldset>
    
    <fieldset>
    <legend><strong>尾部信息设置</strong></legend>
		<table class="form-table">
			<tr><td>
				<em>输入公司备案号 如：湘ICP备11016964号</em>
				<textarea name="record_number" id="record_number" rows="1" cols="70"><?php echo get_option('mytheme_record_number'); ?></textarea>
			</td></tr>
		</table>
	</fieldset>
</div>
</li>


<li class="box"> <h1>在线客服设置</h1>
<div class="text" >
	<fieldset>
	<legend><strong>在线客服</strong></legend>
		<table class="form-table">
			<tr><td>
				<em>输入您的客服QQ账号</em>
				<textarea name="service1" id="service1" rows="1" cols="70"><?php echo get_option('mytheme_service1'); ?></textarea>
			</td></tr>
			<tr><td>
				<em>输入您的客服QQ账号</em>
				<textarea name="service2" id="service2" rows="1" cols="70"><?php echo get_option('mytheme_service2'); ?></textarea>
			</td></tr>
            <tr><td>
				<em>输入您的客服QQ账号</em>
				<textarea name="service3" id="service3" rows="1" cols="70"><?php echo get_option('mytheme_service3'); ?></textarea>
			</td></tr>
            <tr><td>
				<em>输入您的客服QQ账号</em>
				<textarea name="service4" id="service4" rows="1" cols="70"><?php echo get_option('mytheme_service4'); ?></textarea>
			</td></tr>
		</table>
	</fieldset>
	<fieldset>
 
	<legend><strong>工作时间</strong></legend>
		<table class="form-table">
			<tr><td>
                <em>输入工作时间 如：AM09:00-PM17:30 周末双休</em>
				<textarea name="time" id="time" rows="1" cols="70"><?php echo stripslashes(get_option('mytheme_time')); ?></textarea>
 
			</td></tr>
 
		</table>
 
	</fieldset>
</div>
</li>


<li class="box"> <h1>侧栏和公共设置</h1>
<div class="text" >

     <fieldset>
 
	<legend><strong>电话号码</strong></legend>
 
		<table class="form-table">
 
			<tr><td>
 
				<textarea name="tel2" id="tel2" rows="1" cols="70"><?php echo get_option('mytheme_tel2'); ?></textarea>
 
				<em>输入电话区号（如是手机请输入前3位 此处只输入一个主要号码）</em>
 
			</td></tr>
 
			<tr><td>
 
				<textarea name="tel3" id="tel3" rows="1" cols="70"><?php echo get_option('mytheme_tel3'); ?></textarea>
 
				<em>输入电话后几位</em>
 
			</td></tr>
 
		</table>
 
	</fieldset>
    
    <fieldset>
 
	<legend><strong>侧栏图片展示标题</strong></legend>
 
		<table class="form-table">
 
			<tr><td>
 
				<textarea name="yczs_1" id="yczs_1" rows="1" cols="70"><?php echo stripslashes(get_option('mytheme_yczs_1')); ?></textarea>
                <em>输入您的标题，不输入为默认标题</em>
 
			</td></tr>
 
		</table>
 
	</fieldset>
    <fieldset>
 
	<legend><strong>侧栏图片展示介绍文字</strong></legend>
 
		<table class="form-table">
 
			<tr><td>
 
				<textarea name="yczs_2" id="yczs_2" rows="3" cols="70"><?php echo stripslashes(get_option('mytheme_yczs_2')); ?></textarea>
                <em>输入您的文字介绍</em>
 
			</td></tr>
 
		</table>
 
	</fieldset>
    <fieldset>
 
	<legend><strong>广告语输入</strong></legend>
 
		<table class="form-table">
    
                <tr><td>
 
				<textarea name="case3" id="case3" rows="2" cols="70"><?php echo get_option('mytheme_case3'); ?></textarea>
 
				<em>输入页面描述或者标语口号或广告语</em>
 
			    </td></tr>
         </table>
 
	</fieldset>
</div>
</li>


	<p class="submit">
 
		<input type="submit" name="Submit" class="button-primary" value="保存设置" />
 
		<input type="hidden" name="mytheme_settings" value="save" style="display:none;" />
 
	</p>
</form>

<ul > 


</div>




<?php }

/*添加主题选项over*/
?>