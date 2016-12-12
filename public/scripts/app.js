console.log("Sanity Check: JS is working!");

$(document).ready(function(){
$.ajax({
method: 'GET',
url:'http://localhost:3000/api/albums',
success: handleSuccess,
error: handleError

});
function handleSuccess (json){
  console.log(json);
  for (var i=0; i<json.length; i++){
    $('.info').append('<h2>'+ json[i].title + ' by '  + json[i].artist + '</h2');

  }
}

$.ajax({
method: 'GET',
url:'http://localhost:3000/api/cites',
success: newSuccess,
error: handleError

});

function newSuccess(json){
  for (var i=0; i<json.length; i++) {
    $('.info2').append('<h2>'+ json[i].name + ' has '  + json[i].population + '</h2');
  }
}


function handleError (xhr, status, errorThrown){
  console.log('oh nooooooo! im not working. please contact support')
}



});
