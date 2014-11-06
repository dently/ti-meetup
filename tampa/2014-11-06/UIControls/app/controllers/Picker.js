var App = require("core");

//Setup our pickers
//$.pickerDate.minDate = '2014-11-06';

$.btnPicker1.addEventListener('click', function(){
  //App.Navigator.open('PickerDateTime');
  var pickerDTView = Alloy.createController('PickerDateTime').getView();

  pickerDTView.open();
});


$.btnPicker2.addEventListener('click', function(){

});
