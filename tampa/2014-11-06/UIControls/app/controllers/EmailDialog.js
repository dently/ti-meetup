$.btnShowDialog.addEventListener('click', function() {

  //Testing this requires a device for iOS
  var emailDialog = Ti.UI.createEmailDialog()
  emailDialog.subject = "Hello from Titanium";
  emailDialog.toRecipients = ['foo@yahoo.com'];
  emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';

  emailDialog.open();
});
