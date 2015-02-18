// Handle the offline event
    function Offline() {
		navigator.notification.alert('You must be online to use this App!');
		$("#schedule-wrapper").html('<p style="width:100%;text-align:center"><strong>Error: You Are Not Online</strong></p>');
		$("#refresh").css('display', 'none');
    }
	
// Handle the online event
	function Online() {
    	$("#schedule-wrapper").empty().html('<p style="width:100%;text-align:center"><img align="center" src="images/ajax-loader.gif" onload="loadcontent();" /></p>');
		$("#refresh").css('display', 'inline-block').css('float', 'right');
	}
	
// Handle the refresh event
	function refresh() {
		$("#schedule-wrapper").html('<p style="width:100%;text-align:center"><img align="center" src="images/ajax-loader.gif" /></p>');
		loadcontent();
	}

	

function init() {
	//if phonegap, need to toggle these
		 
}



// Go get the data
function loadcontent() {
	$.ajax({
	  url: 'http://www.littleyogastudio.com/wp-content/themes/LittleYogaStudio/includes/mbo/demos/getClasses.php',
	  success: function(data) {
		$('#schedule-wrapper').html(data);
		$('#schedule-wrapper ul').listview();
		$('#schedule-wrapper div').collapsible();
	  }
	});
	
}



// Go get the contacts
function loadContacts() {
	$.ajax({
	  url: 'http://www.littleyogastudio.com/wp-content/themes/LittleYogaStudio/page-template-getContacts.php',
	  success: function(data) {
		$('#contact-data').html(data);
		$('#contact-data a').button();
	  }
	});
}



document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    //
    function onDeviceReady() {
		checkConnection();
		$("#schedule-wrapper").empty().html('<p style="width:100%;text-align:center"><img align="center" src="images/ajax-loader.gif" /></p>');
		loadcontent();	
    }



function checkConnection() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    //alert('Connection type: ' + states[networkState]);
	
}