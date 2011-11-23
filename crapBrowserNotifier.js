var notify = function(){
	$('body').append("<div style=\"position:fixed;bottom:1px;right:10px;width:400px;padding:10px;padding-bottom:15px;text-align:center;font-family:Helvetica;font-weight:bold;color:#D11919;/* Gradient tutorial at webdesignerwall.com/tutorials/cross-browser-css-gradient */background: #C9EAF5; /* for non-css3 browsers */filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#C9EAF5', endColorstr='#FFFFFF'); /* for IE */border:solid 2px #81E067;border-bottom:0px;\"><p>Your browser is crap. <br/> Install and use one of these:</p><div style=\"width:300px;margin:auto; /* Images from http://paulirish.com/2010/high-res-browser-icons/ */\"><a href=\"http://www.google.com/chrome\"><div style=\"width:70px;height:64px;background:url('browser_logos-64.png') 0 0;float:left;margin-right:0.5em;\"></div></a><a href=\"http://www.mozilla.org/en-US/firefox/new/\"><div style=\"width:68px; height:64px; background:url('browser_logos-64.png') -74px 0; float:left; margin-right:0.5em;\"></div></a><a href=\"http://www.apple.com/safari/download/\"><div style=\"width:64px; height:64px; background:url('browser_logos-64.png') -210px 0; float:left; margin-right:0.5em;\"></div></a><a href=\"http://www.opera.com\"><div style=\"width:64px; height:64px; background:url('browser_logos-64.png') -142px 0; float:left;\"></div></a></div></div>");
}
		
$(document).ready(function(){
	if($.browser.msie){
		var t=setTimeout("notify()", 1500);
	}
});