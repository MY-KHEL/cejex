
// window.onscroll = function(){
//     if(scrollY>0){
//     document.getElementById('navbar').style.backgroundColor = 'rgb(110, 70, 9)';
//     document.getElementsByClassName('link').style.color = 'blanchedalmond';
//     document.getElementById('navbar').style.position='fixed';
// }
// else{
//     document.getElementById('navbar').style.backgroundColor = 'transparent';
//     document.getElementsByClassName('link').style.color = 'brown';
//     document.getElementById('navbar').style.position='block';
// }

// }

mybutton = document.getElementById("myBtn");
navbar = document.getElementById("navbar");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    mybutton.style.display = "block";
    navbar.style.position = "fixed";
    navbar.style.width = "100%";
    navbar.style.zIndex = "2";
    navbar.style.top = "0";
    navbar.style.boxShadow= "1px 1px 2px 2px rgba( 0, 0, 0, 0.7) ";

  } else {
    mybutton.style.display = "none";
    navbar.style.position = "relative";
    navbar.style.boxShadow= "none";

  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}