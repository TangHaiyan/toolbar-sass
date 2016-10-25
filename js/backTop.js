define(['jquery','scrollTo'],function($,scrollTo){
	function Backtop(el,opts){
       this.opts = $.extend({},Backtop.DEAFAULTS,opts);
       this.$el = $(el);
       this.scroll = new scrollTo.ScrollTo({
           dest:this.opts.dest,
           speed:this.opts.speed
       })

       //初始隐藏
       this.$el.css('display','none');
       //加载后或刷新后，进行位置判断是否显示返回顶部按钮
       this._checkposition();

       if(this.opts.mode==='move'){
       	  this.$el.on('click',$.proxy(this._move,this));
       }else{
          this.$el.on('click',$.proxy(this._go,this));
       }
       $(window).on('scroll',$.proxy(this._checkposition,this))
	}
    //默认参数以静态属性方式添加，不必每个实例都生成默认参数。
	Backtop.DEAFAULTS = {
		mode:'move',
		pos:$(window).height(),
		dest:200,
		speed:2000
	}
	Backtop.prototype._move = function(){
		this.scroll.move();
	}
	Backtop.prototype._go = function() {
		this.scroll.go()
	}
	Backtop.prototype._checkposition = function(){
		var $el=this.$el;
	    if ($(window).scrollTop() > this.opts.pos) {
	    	$el.slideDown(1000);	    	
	    }else{
	    	$el.slideUp(1000);
	    }

	}
	//插件写法
    // $.fn.extend({
    // 	backtop:function(){
    // 		return this.each(function(opts){
    // 			new Backtop(this,opts)  //this是指返回顶部的按钮
    // 		})
    // 	}
    // })
	return {
		Backtop:Backtop
	}

})