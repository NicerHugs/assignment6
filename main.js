document.getElementById("update-button").onclick = function(){
  var thimblesCost = Number(document.getElementById('thimbles').value) * 1;
  var swordsCost = Number(document.getElementById('swords').value) * 37;
  var totalCost = swordsCost + thimblesCost;
  document.getElementById("the-total").textContent = totalCost + " monies";
};
