function menuOpen() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*scroll to contact*/
function scrollContact() {
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView();
}
/*scroll to work*/
function scrollWork() {
    var elmnt = document.getElementById("work");
    elmnt.scrollIntoView();
}
/*scroll to portfolio*/
function scrollHome() {
    var elmnt = document.getElementById("home");
    elmnt.scrollIntoView();
}
