$(document).ready(function(){
  setTimeout(showContent(), 10000);

  if(window.innerWidth <= 450){
    let a = document.querySelector('#update-pic');
    a.setAttribute('src', "images/latest_mobile.jpeg");
  }
})

function showContent(){
  document.querySelector('.preloader').style.display = "none";
  document.querySelector('.all-content').style.display = "block";
}