const numbers = document.querySelectorAll(".gridNumber");
const selectedNumbers = document.querySelectorAll(".selectNumber");
const bonuss = document.querySelectorAll(".bonusNumber");
const randomNumber = document.querySelectorAll(".randomNumber");
const selectedContainer = document.querySelectorAll(".selected");
const resultContainer = document.querySelector(".result");
const launchBtn = document.getElementById("launchBtn");
const resetBtn = document.getElementById("resetBtn");
const resultSelectedContainer = document.querySelectorAll(".selectedResult");
const numbersSelected = document.querySelectorAll(".numberSelected");
const bonusSelected = document.querySelectorAll(".bonusSelected");
const bonusResult = document.querySelector(".bonusResult");
const bonusChoice = document.querySelector(".bonusChoice");
const bonusMatch = document.querySelector(".bonusMatch");
const bonusMatch2 = document.querySelector(".bonusMatch2");

let result = 0;
let randomed = [0, 0, 0, 0, 0];
let selected = [0, 0, 0, 0, 0];
let bonus = 0;
let bonusChecked = 0;

const random = () => {
  val = Math.ceil(Math.random() * 49);
  return val;
};

const randomBonus = () => {
  val = Math.ceil(Math.random() * 10);
  return val;
};

function reset() {
  result = 0;
  randomed = [0, 0, 0, 0, 0];

  for (let i = 0; i < resultSelectedContainer.length; i++) {
    resultSelectedContainer[i].classList.add("invisible");
    numbersSelected[i].classList.add("invisible");
  }

  bonusMatch.classList.add("invisible");
  bonusMatch2.classList.add("invisible");
  bonusResult.textContent = "";
}

function resetSelect() {
  for (let i = 0; i < selectedContainer.length; i++) {
    selectedContainer[i].classList.add("invisible");
  }

  for (let i = 0; i < bonuss.length; i++) {
    bonusSelected[i].classList.add("invisible");
  }

  for (let i = 0; i < selectedNumbers.length; i++) {
    selectedNumbers[i].textContent = "";
    randomNumber[i].textContent = "";
  }

  resultContainer.textContent = "";
  selected = [0, 0, 0, 0, 0];
  bonus = 0;
  bonusChoice.textContent = "";
  bonusChecked = 0;
}

let ii = [1, 1, 1, 1, 1];
let iiBonus = 1;

const animation = (a, b) => {
  setTimeout(function () {
    if (b === undefined) {
      val = random();
    } else {
      val = b;
    }
    if (
      val === randomed[1] ||
      val === randomed[0] ||
      val === randomed[2] ||
      val === randomed[3] ||
      val === randomed[4]
    ) {
      reset();
      return animation(a);
    } else {
      b = val;
      c = random();
      randomNumber[a].textContent = c;
    }

    ii[a]++;
    if (ii[a] < 20) {
      animation(a, b);
    } else {
      randomed[a] = b;
      randomNumber[a].textContent = b;
    }
  }, 50);
};

const tirageBonus = () => {
  setTimeout(function () {
    a = randomBonus();
    bonusResult.textContent = a;

    iiBonus++;
    if (iiBonus < 20) {
      tirageBonus();
    } else {
      val = randomBonus();
      bonusResult.textContent = val;
      console.log(val);
    }
  }, 50);
};

const resultComp = () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === randomed[0]) {
      result += 1;
      resultSelectedContainer[0].classList.remove("invisible");
      numbersSelected[i].classList.remove("invisible");
    } else if (selected[i] === randomed[1]) {
      result += 1;
      resultSelectedContainer[1].classList.remove("invisible");
      numbersSelected[i].classList.remove("invisible");
    } else if (selected[i] === randomed[2]) {
      result += 1;
      resultSelectedContainer[2].classList.remove("invisible");
      numbersSelected[i].classList.remove("invisible");
    } else if (selected[i] === randomed[3]) {
      result += 1;
      resultSelectedContainer[3].classList.remove("invisible");
      numbersSelected[i].classList.remove("invisible");
    } else if (selected[i] === randomed[4]) {
      result += 1;
      resultSelectedContainer[4].classList.remove("invisible");
      numbersSelected[i].classList.remove("invisible");
    }
  }

  bonusResultTransform = parseInt(bonusResult.textContent);
  if (bonusResultTransform === bonus) {
    bonusMatch.classList.remove("invisible");
    bonusMatch2.classList.remove("invisible");
    resultContainer.textContent = result + " + 1";
  } else {
    resultContainer.textContent = result;
  }
};

numbers[0].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 1;
      selectedContainer[0].classList.remove("invisible");
      selectedNumbers[i].textContent = 1;
      break;
    }
  }
});
numbers[1].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 2;
      selectedContainer[1].classList.remove("invisible");
      selectedNumbers[i].textContent = 2;
      break;
    }
  }
});
numbers[2].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 3;
      selectedContainer[2].classList.remove("invisible");
      selectedNumbers[i].textContent = 3;
      break;
    }
  }
});
numbers[3].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 4;
      selectedContainer[3].classList.remove("invisible");
      selectedNumbers[i].textContent = 4;
      break;
    }
  }
});
numbers[4].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 5;
      selectedContainer[4].classList.remove("invisible");
      selectedNumbers[i].textContent = 5;
      break;
    }
  }
});
numbers[5].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 6;
      selectedContainer[5].classList.remove("invisible");
      selectedNumbers[i].textContent = 6;
      break;
    }
  }
});
numbers[6].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 7;
      selectedContainer[6].classList.remove("invisible");
      selectedNumbers[i].textContent = 7;
      break;
    }
  }
});
numbers[7].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 8;
      selectedContainer[7].classList.remove("invisible");
      selectedNumbers[i].textContent = 8;
      break;
    }
  }
});
numbers[8].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 9;
      selectedContainer[8].classList.remove("invisible");
      selectedNumbers[i].textContent = 9;
      break;
    }
  }
});
numbers[9].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 10;
      selectedContainer[9].classList.remove("invisible");
      selectedNumbers[i].textContent = 10;
      break;
    }
  }
});
numbers[10].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 11;
      selectedContainer[10].classList.remove("invisible");
      selectedNumbers[i].textContent = 11;
      break;
    }
  }
});
numbers[11].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 12;
      selectedContainer[11].classList.remove("invisible");
      selectedNumbers[i].textContent = 12;
      break;
    }
  }
});
numbers[12].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 13;
      selectedContainer[12].classList.remove("invisible");
      selectedNumbers[i].textContent = 13;
      break;
    }
  }
});
numbers[13].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 14;
      selectedContainer[13].classList.remove("invisible");
      selectedNumbers[i].textContent = 14;
      break;
    }
  }
});
numbers[14].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 15;
      selectedContainer[14].classList.remove("invisible");
      selectedNumbers[i].textContent = 15;
      break;
    }
  }
});
numbers[15].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 16;
      selectedContainer[15].classList.remove("invisible");
      selectedNumbers[i].textContent = 16;
      break;
    }
  }
});
numbers[16].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 17;
      selectedContainer[16].classList.remove("invisible");
      selectedNumbers[i].textContent = 17;
      break;
    }
  }
});
numbers[17].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 18;
      selectedContainer[17].classList.remove("invisible");
      selectedNumbers[i].textContent = 18;
      break;
    }
  }
});
numbers[18].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 19;
      selectedContainer[18].classList.remove("invisible");
      selectedNumbers[i].textContent = 19;
      break;
    }
  }
});
numbers[19].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 20;
      selectedContainer[19].classList.remove("invisible");
      selectedNumbers[i].textContent = 20;
      break;
    }
  }
});
numbers[20].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 21;
      selectedContainer[20].classList.remove("invisible");
      selectedNumbers[i].textContent = 21;
      break;
    }
  }
});
numbers[21].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 22;
      selectedContainer[21].classList.remove("invisible");
      selectedNumbers[i].textContent = 22;
      break;
    }
  }
});
numbers[22].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 23;
      selectedContainer[22].classList.remove("invisible");
      selectedNumbers[i].textContent = 23;
      break;
    }
  }
});
numbers[23].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 24;
      selectedContainer[23].classList.remove("invisible");
      selectedNumbers[i].textContent = 24;
      break;
    }
  }
});
numbers[24].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 25;
      selectedContainer[24].classList.remove("invisible");
      selectedNumbers[i].textContent = 25;
      break;
    }
  }
});
numbers[25].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 26;
      selectedContainer[25].classList.remove("invisible");
      selectedNumbers[i].textContent = 26;
      break;
    }
  }
});
numbers[26].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 27;
      selectedContainer[26].classList.remove("invisible");
      selectedNumbers[i].textContent = 27;
      break;
    }
  }
});
numbers[27].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 28;
      selectedContainer[27].classList.remove("invisible");
      selectedNumbers[i].textContent = 28;
      break;
    }
  }
});
numbers[28].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 29;
      selectedContainer[28].classList.remove("invisible");
      selectedNumbers[i].textContent = 29;
      break;
    }
  }
});
numbers[29].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 30;
      selectedContainer[29].classList.remove("invisible");
      selectedNumbers[i].textContent = 30;
      break;
    }
  }
});
numbers[30].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 31;
      selectedContainer[30].classList.remove("invisible");
      selectedNumbers[i].textContent = 31;
      break;
    }
  }
});
numbers[31].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 32;
      selectedContainer[31].classList.remove("invisible");
      selectedNumbers[i].textContent = 32;
      break;
    }
  }
});
numbers[32].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 33;
      selectedContainer[32].classList.remove("invisible");
      selectedNumbers[i].textContent = 33;
      break;
    }
  }
});
numbers[33].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 34;
      selectedContainer[33].classList.remove("invisible");
      selectedNumbers[i].textContent = 34;
      break;
    }
  }
});
numbers[34].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 35;
      selectedContainer[34].classList.remove("invisible");
      selectedNumbers[i].textContent = 35;
      break;
    }
  }
});
numbers[35].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 36;
      selectedContainer[35].classList.remove("invisible");
      selectedNumbers[i].textContent = 36;
      break;
    }
  }
});
numbers[36].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 37;
      selectedContainer[36].classList.remove("invisible");
      selectedNumbers[i].textContent = 37;
      break;
    }
  }
});
numbers[37].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 38;
      selectedContainer[37].classList.remove("invisible");
      selectedNumbers[i].textContent = 38;
      break;
    }
  }
});
numbers[38].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 39;
      selectedContainer[38].classList.remove("invisible");
      selectedNumbers[i].textContent = 39;
      break;
    }
  }
});
numbers[39].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 40;
      selectedContainer[39].classList.remove("invisible");
      selectedNumbers[i].textContent = 40;
      break;
    }
  }
});
numbers[40].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 41;
      selectedContainer[40].classList.remove("invisible");
      selectedNumbers[i].textContent = 41;
      break;
    }
  }
});
numbers[41].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 42;
      selectedContainer[41].classList.remove("invisible");
      selectedNumbers[i].textContent = 42;
      break;
    }
  }
});
numbers[42].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 43;
      selectedContainer[42].classList.remove("invisible");
      selectedNumbers[i].textContent = 43;
      break;
    }
  }
});
numbers[43].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 44;
      selectedContainer[43].classList.remove("invisible");
      selectedNumbers[i].textContent = 44;
      break;
    }
  }
});
numbers[44].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 45;
      selectedContainer[44].classList.remove("invisible");
      selectedNumbers[i].textContent = 45;
      break;
    }
  }
});
numbers[45].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 46;
      selectedContainer[45].classList.remove("invisible");
      selectedNumbers[i].textContent = 46;
      break;
    }
  }
});
numbers[46].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 47;
      selectedContainer[46].classList.remove("invisible");
      selectedNumbers[i].textContent = 47;
      break;
    }
  }
});
numbers[47].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 48;
      selectedContainer[47].classList.remove("invisible");
      selectedNumbers[i].textContent = 48;
      break;
    }
  }
});
numbers[48].addEventListener("click", () => {
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] === 0) {
      selected[i] = 49;
      selectedContainer[48].classList.remove("invisible");
      selectedNumbers[i].textContent = 49;
      break;
    }
  }
});

bonuss[0].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 1;
    bonusChoice.textContent = 1;
    bonusSelected[0].classList.remove("invisible");
    bonusChecked = 1;
  }
});
bonuss[1].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 2;
    bonusChoice.textContent = 2;
    bonusSelected[1].classList.remove("invisible");
    bonusChecked = 1;
  }
});
bonuss[2].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 3;
    bonusChoice.textContent = 3;
    bonusSelected[2].classList.remove("invisible");
    bonusChecked = 1;
  }
});
bonuss[3].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 4;
    bonusChoice.textContent = 4;
    bonusSelected[3].classList.remove("invisible");
    bonusChecked = 1;
  }
});
bonuss[4].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 5;
    bonusChoice.textContent = 5;
    bonusSelected[4].classList.remove("invisible");
    bonusChecked = 1;
  }
});
bonuss[5].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 6;
    bonusChoice.textContent = 6;
    bonusSelected[5].classList.remove("invisible");
    bonusChecked = 1;
  }
});
bonuss[6].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 7;
    bonusChoice.textContent = 7;
    bonusSelected[6].classList.remove("invisible");
    bonusChecked = 1;
  }
});
bonuss[7].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 8;
    bonusChoice.textContent = 8;
    bonusSelected[7].classList.remove("invisible");
    bonusChecked = 1;
  }
});
bonuss[8].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 9;
    bonusChoice.textContent = 9;
    bonusSelected[8].classList.remove("invisible");
    bonusChecked = 1;
  }
});
bonuss[9].addEventListener("click", () => {
  if (bonus === 0) {
    bonus = 10;
    bonusChoice.textContent = 10;
    bonusSelected[9].classList.remove("invisible");
    bonusChecked = 1;
  }
});

launchBtn.addEventListener("click", () => {
  let val = 0;
  for (let i = 0; i < selected.length; i++) {
    if (selected[i] != 0) {
      val += 1;
    }
  }

  if (val === selected.length && bonusChecked === 1) {
    reset();
    ii = [1, 1, 1, 1, 1];
    iiBonus = 1;

    animation(0);
    animation(1);
    animation(2);
    animation(3);
    animation(4);
    tirageBonus();
    setTimeout(function () {
      resultComp();
    }, 1200);
  }
});

resetBtn.addEventListener("click", () => {
  reset();
  resetSelect();
});
