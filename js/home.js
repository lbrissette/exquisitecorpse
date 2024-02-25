
function openSettings() {
  let settings = document.getElementById("settings");
  settings.classList.add("open-settings");
}

function closeSettings() {
  let settings = document.getElementById("settings");
  settings.classList.remove("open-settings");
}


function checkOnlyOne(b){
  var x = document.getElementsByClassName("checkbox");
  var i;
  
  for (i = 0; i < x.length; i++) {
    if(x[i].value != b) {
      x[i].checked = false;
    }
  }
}

sessionStorage.setItem("mytime", 30); // default
sessionStorage.setItem("mymode", false); // default

function checkOnlyOneTime(b){
var x = document.getElementsByClassName("checkbox");
var i;
sessionStorage.setItem("mytime", b);
for (i = 0; i < x.length; i++) {
if(x[i].value != b) {
x[i].checked = false;
}
}

}
function checkOnlyOneMode(b) {
var x = document.getElementsByClassName("mode");
var i;
localStorage.setItem("mymode", b);
for (i = 0; i < x.length; i++) {
if(x[i].value != b) {
x[i].checked = false;
}
}
}
window.onload = () => {
localStorage.clear("drawings")
}