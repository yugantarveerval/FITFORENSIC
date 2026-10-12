function calculateWater() {
  var ml = document.getElementById("weight").value * 33;
  if (document.getElementById("workout").value == "yes") { ml = ml + 500; }
  document.getElementById("waterResult").innerHTML = "Drink about " + ml + " ml of water every day.";
}
function submitForm() {
  if (document.getElementById("name").value == "") { alert("Please enter your name"); return; }
  document.getElementById("r-name").innerHTML = document.getElementById("name").value;
  document.getElementById("r-phone").innerHTML = document.getElementById("phone").value;
  document.getElementById("r-plan").innerHTML = document.getElementById("plan").value;
  document.getElementById("r-program").innerHTML = document.getElementById("program").value;
  document.getElementById("r-start").innerHTML = document.getElementById("startDate").value;
  document.getElementById("r-total").innerHTML = "Rs. " + document.getElementById("plan").value * document.getElementById("duration").value;
  document.getElementById("website").style.display = "none";
  document.getElementById("receipt").style.display = "block";
}
function goBack() {
  document.getElementById("receipt").style.display = "none";
  document.getElementById("website").style.display = "block";
}
