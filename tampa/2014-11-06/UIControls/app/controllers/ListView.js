

if(OS_IOS){
  $.editList.addEventListener('click', function(){
    $.list.editing = !$.list.editing;

    if($.list.editing){
      $.editList.title = 'Save';
    }
    else{
      $.editList.title = 'Edit';
    }
  });
}

function back(){
  $.listViewWindow.close();
}
