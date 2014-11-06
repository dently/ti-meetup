

$.pb.show();

function increment(){
  var newValue = $.pb.value + 1;
  $.pb.value = newValue;

  $.pb.message = 'Downloading ' + newValue.toString() + ' of ' + $.pb.max;

  if($.pb.value == $.pb.max){
    $.btn.enabled = false;
  }
  else{
    $.btn.enabled = true;
  }
}
