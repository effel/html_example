$(document).ready(function() {

  function textHeight(){
	 $('.slideInfo .text').height(function(h, val){
	   h=$('.slideImg img').outerHeight();
	   var h2=$('.slideInfo h2').outerHeight(true);
	   var h3=$('.slideInfo .more').outerHeight();
	   var m=$(this).css('margin-bottom');
	   var m2=parseInt(m);
	   return val=h-h2-h3-m2-10})    
  }
   textHeight();
   $(window).load(function () {
     textHeight();
   });
		
   $(window).resize(function(){
      textHeight();
    });

	/*$('.imgarea-wr').each(function() {
		var imgWidthHeightConst = 3/4;
		if ( $(this).hasClass("align-height") ) {
		  $(this).children('img').height(function(heightVal) {
            var imgWidth = $(this).children('img').width();
			
			imgWidth = $(this).parent().width();
			heightVal  = imgWidth;
			return heightVal;
		  });
		}
	});*/

  $('.scroll-pane').jScrollPane({scrollbarWidth:8, showArrows:true,verticalDragMaxHeight:64,mouseWheelSpeed:20});


}); 