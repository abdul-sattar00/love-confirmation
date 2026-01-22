let noCount = 0;
let container = document.querySelector(".container");

function addListeners() {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  if (noBtn) {
    noBtn.addEventListener("click", handleNoClick);
  }

  if (yesBtn) {
    yesBtn.addEventListener("click", handleYesClick);
  }
}

function handleNoClick() {
  noCount++;

  if (noCount === 1) {
    container.innerHTML = `
      <img src="manja.gif">
      <h1>Please think again</h1>
      <p>I will be sad</p>
      <div class="buttons">
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
      </div>
    `;
  }
  else if (noCount === 2) {
    container.innerHTML = `
      <img src="manja.gif">
      <h1>Ek baar aur Soch lo!</h1>
      <p>kyun aisa kar rahi ho plz man jao na</p>
      <div class="buttons">
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
      </div>
    `;
  }
  else {
    container.innerHTML = `
      <img src="manja.gif">
      <h1>Cutie, plz man jao na 😭</h1>
      <p>bahut galat baat hai yr</p>
      <div class="buttons">
        <button id="yesBtn">Yes</button>
      </div>
    `;
  }

  addListeners(); // 🔥 re-attach
}

function handleYesClick() {
  container.innerHTML = `
    <img src="happy.gif">
    <h1>I knew it 😍❤️</h1>
    <p>Best decision ever!</p>
  `;
}

// initial attach
addListeners();
