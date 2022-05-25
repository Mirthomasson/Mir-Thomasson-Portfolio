$('a.thumb1').on('click',function(){ // when press link

    var fullImg = $(this).attr('href') // get full size img url
    $('#popup img').attr('src', fullImg) // image in popup now has source that you need
    $('#popup').show() // popup appears
    return false // do not redirect 
 
 })
 
 $('.close_popup').on('click', function(){
 
    $('#popup').hide() // close popup
 
 })


// const object = document.getElementById('pulsate');

// function logger() {
  
// }

// object.addEventListener('click', logger);
// object.removeEventListener('click', logger);