	function plusReady(){
	    plus.screen.lockOrientation('portrait-primary');
	     
	}
	if (window.plus) {
	    plusReady()
	} else{
	    document.addEventListener('plusready',plusReady,false);
	}
	
function opengxdc(){
	mui.openWindow('gxdc/gxdc.html','gxdc/gxdc.html')
}
