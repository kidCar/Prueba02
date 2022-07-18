var imgSource = new Array(
  ["assets/img/0.png"],
  ["assets/img/1.jpg"],
  ["assets/img/2.jpg"],
  ["assets/img/3.jpg"]
);
var aux = 0;
function bannerSettime() {
  aux++;
  document.getElementById("imagen").src = imgSource[aux % imgSource.length];
}
window.onload = function () {  
  bannerSettime();//Primer imagen
  setInterval(bannerSettime, 5000); // Indicamos que cada 5 segundos cambie la imagen
};
