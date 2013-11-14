function id(element) {
	return document.getElementById(element);
}
 
document.addEventListener("deviceready", onDeviceReady, false);
 
function onDeviceReady() 
{
	//listeners
	document.getElementById("results").innerHTML = "Ready"; 
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
	window.addEventListener("batterystatus", onBatterystatus, false);

}
document.addEventListener("menubutton", onMenuKeyDown, false);


	function onOffline()
	{
	 document.getElementById("status").innerHTML = "Estas Offline";   
	}
	function onOffline()
	{
	 document.getElementById("status").innerHTML = "Estas Online";   
	}

function onMenuKeyDown()
{
 document.getElementById("results").innerHTML = "Has pulsado el menu"; 
}

onBatterystatus()
{
	alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
}



    function onError() {
        alert('onError!');
    }
