  jQuery(document).ready(function() {   
    jQuery('input#upbottom').click(function() {      
        custom_editor = true;          
         targetfield = jQuery(this).prev('textarea');      
         tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');   
         window.original_send_to_editor = window.send_to_editor;   
         window.send_to_editor = function(html) {   
            if (custom_editor) {       
            imgurl = jQuery('img',html).attr('src');   
            jQuery(targetfield).val(imgurl).focus();   
            custom_editor = false;   
            tb_remove();   
            }else{   
                window.original_send_to_editor(html);   
            }   
        }           
        return false;      
    });      
        }); 