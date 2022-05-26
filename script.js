/* ----------profile pic---------- */

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("contact")) {
      image.src = "./images/rainbow-mir.png";
  } else if (image.src.match("rainbow")) {
      image.src = "./images/trippy-mir.png";
  } else if (image.src.match("trippy")) {
      image.src = "./images/tiramasu-mir.png";
  } else {
      image.src = "./images/contact-pic.png";
  }
}
