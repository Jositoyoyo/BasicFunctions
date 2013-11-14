function id(element) {
	return document.getElementById(element);
}
 
document.addEventListener("deviceready", onDeviceReady, false);
 
function onDeviceReady() 
{
//listeners
document.getElementById("results").innerHTML = "Ready"; 
}
document.addEventListener("menubutton", onMenuKeyDown, false);

//funciones
function onOffline()
{
 document.getElementById("results").innerHTML = "Hola de nuevo, estas OffOnline";   
}
function onMenuKeyDown()
{
 document.getElementById("results").innerHTML = "Hola de nuevo, has pulsado el menu"; 
}

 // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }

    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }



    function onError() {
        alert('onError!');
    }
