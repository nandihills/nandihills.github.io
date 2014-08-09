$(window).bind("load", function() { 
       
       	var altura = $(window).height();
       	if (altura < 680){
	       	$("html").css("overflow-y", "auto");
	       	
       	}
       	
       	$(window).resize(function() {
	       	var altura = $(window).height();
	       	if (altura < 680){
		    $("html").css("overflow-y", "auto");
       	} else{
	       	$("html").css("overflow-y", "hidden");
       	}
       	});
       	
});
