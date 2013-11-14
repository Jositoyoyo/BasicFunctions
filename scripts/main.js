function id(element) {
	return document.getElementById(element);
}
 
document.addEventListener("deviceready", onDeviceReady, false);
 
function onDeviceReady() 
{
//listeners
document.getElementById("results").innerHTML = "Ready"; 
document.addEventListener("offline", onOffline, false);
document.addEventListener("menubutton", onMenuKeyDown, false);

//funciones
startWatch();
}
//funciones
function onOffline()
{
 document.getElementById("results").innerHTML = "Hola de nuevo, estas OffOnline";   
}
function onMenuKeyDown()
{
 document.getElementById("results").innerHTML = "Hola de nuevo, has pulsado el menu"; 
}

//acelometro
//
    function startWatch() {

        // Update acceleration every 3 seconds
        var options = { frequency: 3000 };

        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    // Stop watching the acceleration
    //
    function stopWatch() {
        if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;
        }
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                            'Acceleration Y: ' + acceleration.y         + '<br />' +
                            'Acceleration Z: ' + acceleration.z         + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }
