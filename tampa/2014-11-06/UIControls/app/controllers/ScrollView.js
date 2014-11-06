

$.init = function(){

  //Inject our widget into the scroll view 10 times
  var max = 30;

  for(var i = 0; i < max; i++){
    var myWidgetView = Alloy.createWidget('ly.dent.dummyWidget').getView();
    $.scrollView.add(myWidgetView);

    var spacerView = Ti.UI.createView({
      height: '10dp',
      backgroundColor: 'white',
      width: '100%'
    });

    $.scrollView.add(spacerView);
  }
}


$.init();
