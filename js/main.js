require(['jquery','backTop'],function($,backTop){
   //jquery插件的调用
  //  $('#backTop').backtop({
  //   	mode:'move',
  //   	pos:1000,
  //   	dest:1000,
		// speed:5000
  //  })
  
   //模块调用
    new backTop.Backtop($('#backTop'),{
    	mode:'move',
    	pos:1000,
    	dest:500,
		speed:5000
    });

  //  var scroll = new scrollTo.ScrollTo({
   
  //  });

  //  $('#backTop').on('click',move);
  //  console.log(scroll.move);
  //  $(window).on('scroll',function(){
  // 	checkPosition($(window).height())
  // });


  //  checkPosition($(window).height());

  // function move(){
  // 	$('html,body').animate({  //滚动条出现的位置
  // 		scrollTop:100
  // 	},5000)
  // }
  // function go(){
  // 	$('html,body').scollTop();
  // }

  // function checkPosition(pos){
  // 	if ($(window).scrollTop()>pos) {
  // 		$('#backTop').fadeIn();
  // 	}else{
  // 		$('#backTop').fadeOut();
  // 	}
  // }
});

