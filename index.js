var images = ["https://static.wixstatic.com/media/76bff0_6c6df45f0c5e4121b54abf0cd1397f6d~mv2.jpg/v1/fill/w_538,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/76bff0_6c6df45f0c5e4121b54abf0cd1397f6d~mv2.jpg", "https://static.wixstatic.com/media/76bff0_93055e40dfb041b6b6c5cffdc7b4cce9~mv2.jpg/v1/fill/w_538,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/76bff0_93055e40dfb041b6b6c5cffdc7b4cce9~mv2.jpg", "https://static.wixstatic.com/media/76bff0_cfdba27202b14c38a54f289321773ecf~mv2.jpg/v1/fill/w_538,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/76bff0_cfdba27202b14c38a54f289321773ecf~mv2.jpg", "https://static.wixstatic.com/media/76bff0_c700fe9331f546b1aaf40180f91353c9~mv2.jpg/v1/fill/w_538,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/76bff0_c700fe9331f546b1aaf40180f91353c9~mv2.jpg", "https://static.wixstatic.com/media/76bff0_09cb1a771ced4213b08dcad3fd8aea9c~mv2.jpg/v1/fill/w_538,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/76bff0_09cb1a771ced4213b08dcad3fd8aea9c~mv2.jpg"];
var i = 0;

function updateImage() {
  document.getElementById("slideshow").src = images[i];
  i = (i + 1) % images.length;
}

setInterval(updateImage, 2750);