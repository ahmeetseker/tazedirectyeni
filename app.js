var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontent");




function openTab(evt, tabName) {
  // Aktif sekmenin sınıfını sil


  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }




  // Tüm içerikleri gizle
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }





  // Tıklanan sekmenin sınıfını ayarla          
  evt.currentTarget.classList.add("active");

  

  // Gösterilecek içeriği belirle
  document.getElementById(tabName).style.display = "block";
}

// Varsayılan olarak ilk sekme açık olsun
tablinks[0].classList.add("active");
document.getElementById("tab1").style.display = "block";  







