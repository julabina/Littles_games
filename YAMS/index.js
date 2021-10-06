const dicesNumber = document.querySelectorAll(".diceNumber");
const dices = document.querySelectorAll(".dice");
const launchBtn = document.querySelector(".launchDice");
const previewContainer = document.querySelectorAll(".score-preview-container");
const preview = document.querySelectorAll(".score-preview");
console.log(previewContainer);

let value = [0, 0, 0, 0, 0, 0];
let one = 0,
  two = 0,
  three = 0,
  four = 0,
  five = 0,
  six = 0;
let count;
console.log(preview);

const randomizeDice = () => {
  val = Math.ceil(Math.random() * 6);
  return val;
};

const resetVal = () => {
  value = [0, 0, 0, 0, 0, 0];
};

const verifyThree = () => {
  if (
    value[0] > 2 ||
    value[1] > 2 ||
    value[3] > 2 ||
    value[4] > 2 ||
    value[5] > 2 ||
    value[2] > 2
  ) {
    let a =
      value[0] +
      value[1] * 2 +
      value[2] * 3 +
      value[3] * 4 +
      value[4] * 5 +
      value[5] * 6;
    preview[6].textContent = a;
  } else {
    preview[6].textContent = "0";
  }
};

const verifyFour = () => {
  if (
    value[0] > 3 ||
    value[1] > 3 ||
    value[3] > 3 ||
    value[4] > 3 ||
    value[5] > 3 ||
    value[2] > 3
  ) {
    let a =
      value[0] +
      value[1] * 2 +
      value[2] * 3 +
      value[3] * 4 +
      value[4] * 5 +
      value[5] * 6;
    preview[7].textContent = a;
  } else {
    preview[7].textContent = "0";
  }
};

const verifyFull = () => {
  if (
    (value[0] == 3 && value[1] == 2) ||
    (value[0] == 3 && value[2] == 2) ||
    (value[0] == 3 && value[3] == 2) ||
    (value[0] == 3 && value[4] == 2) ||
    (value[0] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[1] == 3 && value[0] == 2) ||
    (value[1] == 3 && value[2] == 2) ||
    (value[1] == 3 && value[3] == 2) ||
    (value[1] == 3 && value[4] == 2) ||
    (value[1] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[2] == 3 && value[1] == 2) ||
    (value[2] == 3 && value[0] == 2) ||
    (value[2] == 3 && value[3] == 2) ||
    (value[2] == 3 && value[4] == 2) ||
    (value[2] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[3] == 3 && value[1] == 2) ||
    (value[3] == 3 && value[2] == 2) ||
    (value[3] == 3 && value[0] == 2) ||
    (value[3] == 3 && value[4] == 2) ||
    (value[3] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[4] == 3 && value[1] == 2) ||
    (value[4] == 3 && value[2] == 2) ||
    (value[4] == 3 && value[3] == 2) ||
    (value[4] == 3 && value[0] == 2) ||
    (value[4] == 3 && value[5] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    (value[5] == 3 && value[1] == 2) ||
    (value[5] == 3 && value[2] == 2) ||
    (value[5] == 3 && value[3] == 2) ||
    (value[5] == 3 && value[4] == 2) ||
    (value[5] == 3 && value[0] == 2)
  ) {
    preview[8].textContent = "25";
  } else if (
    value[0] == 5 ||
    value[1] == 5 ||
    value[2] == 5 ||
    value[3] == 5 ||
    value[4] == 5 ||
    value[5] == 5
  ) {
    preview[8].textContent = "25";
  } else {
    preview[8].textContent = "0";
  }
};

const verifySmall = () => {
  if (value[0] == 1 && value[1] == 1 && value[2] == 1 && value[3] == 1) {
    preview[9].textContent = "30";
  } else if (value[0] == 2 && value[1] == 1 && value[2] == 1 && value[3] == 1) {
  } else if (value[0] == 1 && value[1] == 2 && value[2] == 1 && value[3] == 1) {
    preview[9].textContent = "30";
  } else if (value[0] == 1 && value[1] == 1 && value[2] == 2 && value[3] == 1) {
    preview[9].textContent = "30";
  } else if (value[0] == 1 && value[1] == 1 && value[2] == 1 && value[3] == 2) {
    preview[9].textContent = "30";
  } else if (value[1] == 1 && value[2] == 1 && value[3] == 1 && value[4] == 1) {
    preview[9].textContent = "30";
  } else if (value[1] == 2 && value[2] == 1 && value[3] == 1 && value[4] == 1) {
    preview[9].textContent = "30";
  } else if (value[1] == 1 && value[2] == 2 && value[3] == 1 && value[4] == 1) {
    preview[9].textContent = "30";
  } else if (value[1] == 1 && value[2] == 1 && value[3] == 2 && value[4] == 1) {
    preview[9].textContent = "30";
  } else if (value[1] == 1 && value[2] == 1 && value[3] == 1 && value[4] == 2) {
    preview[9].textContent = "30";
  } else if (value[2] == 1 && value[3] == 1 && value[4] == 1 && value[5] == 1) {
    preview[9].textContent = "30";
  } else if (value[2] == 2 && value[3] == 1 && value[4] == 1 && value[5] == 1) {
    preview[9].textContent = "30";
  } else if (value[2] == 1 && value[3] == 2 && value[4] == 1 && value[5] == 1) {
    preview[9].textContent = "30";
  } else if (value[2] == 1 && value[3] == 1 && value[4] == 2 && value[5] == 1) {
    preview[9].textContent = "30";
  } else if (value[2] == 1 && value[3] == 1 && value[4] == 1 && value[5] == 2) {
    preview[9].textContent = "30";
  } else {
    preview[9].textContent = "0";
  }
};

const verifyLarge = () => {
  if (
    value[0] == 1 &&
    value[1] == 1 &&
    value[2] == 1 &&
    value[3] == 1 &&
    value[4] == 1
  ) {
    preview[10].textContent = "40";
  } else if (
    value[1] == 1 &&
    value[2] == 1 &&
    value[3] == 1 &&
    value[4] == 1 &&
    value[5] == 1
  ) {
    preview[10].textContent = "40";
  } else {
    preview[10].textContent = "0";
  }
};

const verifyYams = () => {
  if (
    value[0] == 5 ||
    value[1] == 5 ||
    value[2] == 5 ||
    value[3] == 5 ||
    value[4] == 5 ||
    value[5] == 5
  ) {
    preview[11].textContent = "50";
  } else {
    preview[11].textContent = "0";
  }
};

const verifyLuck = () => {
  let a =
    value[0] +
    value[1] * 2 +
    value[2] * 3 +
    value[3] * 4 +
    value[4] * 5 +
    value[5] * 6;

  preview[12].textContent = a;
};

const verifyBonus = () => {
  a = one + two + three + four + five + six;
  if (a > 62) {
    preview[13].textContent = "35";
  } else {
    preview[13].textContent = a + "/63";
  }
};

const verifyNumber = () => {
  for (let i = 0; i < dicesNumber.length; i++) {
    for (let k = 0; k < 6; k++) {
      let b = k + 1;
      let a = b.toString();
      if (dicesNumber[i].textContent == a) {
        value[k] += 1;
      }
    }
  }
  console.log(value);
};

const verifyPts = () => {
  let val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 1) {
      val++;
    }
  }
  preview[0].textContent = val;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 2) {
      val++;
    }
  }
  preview[1].textContent = val * 2;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 3) {
      val++;
    }
  }
  preview[2].textContent = val * 3;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 4) {
      val++;
    }
  }
  preview[3].textContent = val * 4;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 5) {
      val++;
    }
  }
  preview[4].textContent = val * 5;
  val = 0;
  for (let i = 0; i < dicesNumber.length; i++) {
    if (dicesNumber[i].textContent == 6) {
      val++;
    }
  }
  preview[5].textContent = val * 6;
  val = 0;
  verifyNumber();
  verifyThree();
  verifyFour();
  verifyFull();
  verifySmall();
  verifyLarge();
  verifyYams();
  verifyLuck();
  verifyBonus();
  resetVal();
};

dices[0].addEventListener("click", () => {
  if (dices[0].classList.contains("diceSelected")) {
    dices[0].classList.remove("diceSelected");
  } else {
    dices[0].classList.add("diceSelected");
  }
});

dices[1].addEventListener("click", () => {
  if (dices[1].classList.contains("diceSelected")) {
    dices[1].classList.remove("diceSelected");
  } else {
    dices[1].classList.add("diceSelected");
  }
});

dices[2].addEventListener("click", () => {
  if (dices[2].classList.contains("diceSelected")) {
    dices[2].classList.remove("diceSelected");
  } else {
    dices[2].classList.add("diceSelected");
  }
});

dices[3].addEventListener("click", () => {
  if (dices[3].classList.contains("diceSelected")) {
    dices[3].classList.remove("diceSelected");
  } else {
    dices[3].classList.add("diceSelected");
  }
});

dices[4].addEventListener("click", () => {
  if (dices[4].classList.contains("diceSelected")) {
    dices[4].classList.remove("diceSelected");
  } else {
    dices[4].classList.add("diceSelected");
  }
});

launchBtn.addEventListener("click", () => {
  for (let i = 0; i < dicesNumber.length; i++) {
    if (!dices[i].classList.contains("diceSelected")) {
      randomizeDice();
      dicesNumber[i].textContent = val;
    }
  }
  verifyPts();
  if (count == undefined) {
    count = 1;
  } else if (count < 2) {
    count++;
  } else {
    count = 0;
  }
});

const resetFocused = () => {};

previewContainer[0].addEventListener("click", () => {
  resetFocused();
  if (previewContainer[0].classList.contains("focused")) {
    previewContainer[0].classList.remove("focused");
  } else {
    previewContainer[0].classList.add("focused");
  }
});
