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
      <img src="manja3.webp">
      <h1>Please think again 🙄</h1>
      <p>I will be sad</p>
      <div class="buttons">
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
      </div>
    `;
  }
  else if (noCount === 2) {
    container.innerHTML = `
      <img src="manja2.webp">
      <h1>Ek baar aur Soch lo! 😖 </h1>
      <p>kyun aisa kar rahi ho plz man jao na</p>
      <div class="buttons">
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
      </div>
    `;
  }
  else {
    container.innerHTML = `
      <img src="baby-cry.webp">
      <h1>Cutie, plz man jao na 😭</h1>
      <h1> aur kitna code likh waogi</h1>
      <p>bahut galat baat hai yr</p>
      <div class="buttons">
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
      </div>
    `;
    function moveNoButton() {
      const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

      noBtn.style.position = "absolute";
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    }

    // Desktop
    noBtn.onmouseover = moveNoButton;

    // Mobile
    noBtn.ontouchstart = moveNoButton;


  }

  addListeners(); // 🔥 re-attach
}

function handleYesClick() {
  container.innerHTML = `
    <img src="mimibubu.webp">
    <h1>I knew it  You love me a lot 😘</h1>
    <p>Best decision ever!</p>
  `;
}

// initial attach
addListeners();
