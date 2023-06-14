var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontent");
var rightArrows = document.getElementsByClassName("rightArrow");

// Varsayılan olarak ilk sekme açık olsun
tablinks[0].classList.add("active");
document.getElementById("tab1").style.display = "block";


function openTab(evt, tabName) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
    tablinks[i].querySelector("button").style.color = ""; 
    rightArrows[i].style.display = "none";
   
  }

  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }




  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.parentElement.classList.add("active");
  evt.currentTarget.parentElement.nextElementSibling.style.display = "block";


evt.currentTarget.style.color = "black";





}
