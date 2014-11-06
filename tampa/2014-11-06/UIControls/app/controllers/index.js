/**
 * @class Controllers.index
 */

// App bootstrap
var App = require("core");

// Make sure we always have a reference to the navigation window for iOS
if (OS_IOS) {
  App.navigationWindow = $.navWindow;
  App.navigationWindow.open();
} else {
  $.indexWindow.open();
}

// Init our app singleton
App.init();

$.list.addEventListener("itemclick", function(e) {
  if (e.itemId === 'OptionsDialog') {
    showOptions();
  }
  else if(e.itemId === 'ActIndicator'){
    $.activityIndicator.show();

    setTimeout(function(){
      $.activityIndicator.hide();
    }, 6000);
  }
  else {
    App.Navigator.open(e.itemId);
  }
});

function showOptions() {
  var opts = {
    cancel: 2,
    options: ['Confirm', 'Help', 'Cancel'],
    selectedIndex: 2,
    destructive: 0,
    title: 'Delete File?'
  };

  var dialog = Ti.UI.createOptionDialog(opts).show();
}
