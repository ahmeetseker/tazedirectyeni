var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontent");

// Varsayılan olarak ilk sekme açık olsun
tablinks[0].classList.add("active");
document.getElementById("tab1").style.display = "block";

function openTab(evt, tabName) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  evt.currentTarget.classList.add("active");
  document.getElementById(tabName).style.display = "block";
}

function toggleTabContent(tabName) {
  var rightArrows = document.getElementsByClassName("rightArrow");

  for (var i = 0; i < rightArrows.length; i++) {
    rightArrows[i].getElementsByTagName("i")[0].style.display = "none";
  }

  var selectedTab = document.getElementById(tabName);
  var rightArrow = selectedTab.getElementsByClassName("rightArrow")[0];
  rightArrow.getElementsByTagName("i")[0].style.display = "block";
}
