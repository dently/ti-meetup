

$.init = function(){

  var total = 10;

  $.pb.show();

  $.pb.max = total;

  for(var i = 1; i <= total; i++){
    $.pb.value = i;

    $.pb.message = 'Downloading ' + i + ' of ' + total;
    setTimeout(function(){
    }, 2500);
  }

}


$.init();
