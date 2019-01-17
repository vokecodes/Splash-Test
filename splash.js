let myVar;
let final;

function myFunction() {
  myVar = setTimeout(showLoader, 2000);
  final = setTimeout(lastScreen, 22000);
}

function showLoader() {
  document.getElementById("splash").style.display = "none";
  document.getElementById('welcome').style.display = 'none';
  document.getElementById("loader").style.display = "block";
}

function lastScreen (){
    document.getElementById("splash").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById('welcome').style.display = 'block';
}