let mScore = 0;
let cScore = 0;
function alertfunctionrock() {
  let comp = Math.round(Math.random() * 2 + 1);
  if (comp == 1) {
    document.getElementById("hh").innerText = "Tie";
    document.getElementById("change1").innerText =`${mScore}`;
    document.getElementById("change2").innerText =`${cScore}`;
    document.getElementById("compi").innerText.src="./ro.png";
  } else if (comp == 2) {
    cScore++;
    document.getElementById("hh").innerText = "You LOST";
    document.getElementById("change1").innerText =`${mScore}`;
    document.getElementById("change2").innerText =`${cScore}`;
    document.getElementById("compi").innerHTML.src="./pap.jpeg";
  } else {
    mScore++;
    document.getElementById("hh").innerText = "You WON";
    document.getElementById("change1").innerText =`${mScore}`;
    document.getElementById("change2").innerText =`${cScore}`;
    document.getElementById("compi").innerHTML.src="./sci.jpeg";
  }
}

function alertfunctionpaper() {
  let comp = Math.round(Math.random() * 2 + 1);
  if (comp == 2) {
    document.getElementById("hh").innerText = "Tie";
    document.getElementById("change1").innerText =`${mScore}`;
    document.getElementById("change2").innerText =`${cScore}`;
    document.getElementById("compi").innerHTML =
      '<img src="./ro.png" alt="rock" >';
  } else if (comp == 3) {
    cScore++;
    document.getElementById("hh").innerText = "You LOST";
    document.getElementById("change1").innerText =`${mScore}`;
    document.getElementById("change2").innerText =`${cScore}`;
    document.getElementById("compi").innerHTML =
      '<img src="./pap.jpeg" alt="paper" />';
  } else {
    mScore++;
    document.getElementById("hh").innerText = "You WON";
    document.getElementById("change1").innerText =`${mScore}`;
    document.getElementById("change2").innerText =`${cScore}`;
    document.getElementById("compi").innerText=
      '<img src="./sci.jpeg" alt="Scissors"/>';
  }
}

function alertfunctionscissors() {
  let comp = Math.round(Math.random() * 2 + 1);
  if (comp == 3) {
    document.getElementById("hh").innerText = "Tie";
    document.getElementById("change1").innerText =`${mScore}`;
    document.getElementById("change2").innerText =`${cScore}`;
    document.getElementById("compi").innerHTML =
      '<img src="./ro.png" alt="rock" >';
  } else if (comp == 1) {
    cScore++;
    document.getElementById("hh").innerText = "You LOST";
    document.getElementById("change1").innerText =`${mScore}`;
    document.getElementById("change2").innerText =`${cScore}`;
    document.getElementById("compi").innerHTML =
      '<img src="./pap.jpeg" alt="paper" />';
  } else {
    mScore++;
    document.getElementById("hh").innerText = "You WON";
    document.getElementById("change1").innerText =`${mScore}`;
    document.getElementById("change2").innerText =`${cScore}`;
    document.getElementById("compi").innerHTML =
      '<img src="./sci.jpeg" alt="Scissors"/>';
  }
}
