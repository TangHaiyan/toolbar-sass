define(['jquery'],function($){
	function ScrollTo(opts){
		this.opts=$.extend({},ScrollTo.DEFAULTS,opts);

		this.$el=$('html,body');
	}


	ScrollTo.prototype.move = function() {
		var opts=this.opts,
		    dest=opts.dest;
		if ($(window).scrollTop()!=dest) {
			if (!this.$el.is(':animated')) {
				this.$el.animate({  
		  		scrollTop:dest
		  	    },opts.speed)				
			}
		}
	}
	ScrollTo.prototype.go=function(){
		var dest=this.opts.dest;
		if ($(window).scrollTop()!=dest){
			this.$el.scrollTop(dest);
		}
		
	}
	ScrollTo.DEFAULTS={
		dest:100,
		speed:5000
	}
	return{
		ScrollTo:ScrollTo
	}
})
