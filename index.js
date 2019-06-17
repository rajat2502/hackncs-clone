$(document).ready(function(){
  setTimeout(showContent(), 5000);
})

function showContent(){
  document.querySelector('.preloader').style.display = "none";
  document.querySelector('.all-content').style.display = "block";
}