$(document).ready(function() {
	
$(".stretch").css("min-height" ,function() {
  var bodyHeight = $(document).height();
  var headerHeight = $("header").outerHeight();
  var h = $(this).height();
  h =  bodyHeight - headerHeight;
  return h;
});

$(".drop").click(function() {
  $(this).toggleClass("visible")
});

function edit_field() {
  $("#editable-form .hide-field").css("display" , "none");
  $("#editable-form .edit_but").css("display" , "none");  
  $("#editable-form .show-field").css("display" , "block");
}

function cancel_edit_field() {
  window.location.reload()    
}

$("#editable-form .edit_but").click(function() {
  edit_field();
}); 
 
$("#editable-form .cancel").click(function() {
  cancel_edit_field();
}); 

function remove_popup_edit_action() {
  parentTR.removeClass("selected")
  parentTR.prev($(".btn-edit-action")).removeClass("visible")
}

function popupCollapsed() {
$(".upload-modal-progress .btn-blue").click(function() {
  $(this).parents(".upload-modal-progress").addClass("hideHeight");
}); 
$(".upload-modal-progress .collapse").click(function() {
  $(this).parents(".upload-modal-progress").removeClass("hideHeight");
}); 
}

$(".setFolder input[type='checkbox']").click(function() {
 if ($(this).is(':checked')) {
	$(this).parent().children(".set-folder-wr").css("display" , "block");
 } else {
	$(this).parent().children(".set-folder-wr").css("display" , "none"); 
	 }
});

popupCollapsed();
});