let twitterBtn = document.getElementById("twitter");
let facebookBtn = document.getElementById("facebook");
let pinterestBtn = document.getElementById("pinterest");
let linkedinBtn = document.getElementById("linkedin");
let dribbbleBtn = document.getElementById("dribbble");
let tumblrBtn = document.getElementById("tumblr");
let behanceBtn = document.getElementById("behance");
let settingBtn = document.getElementById("setting");
let knob = document.querySelector(".rotation");
let goBtn = document.getElementById("knob");
let label = document.querySelector(".label");
let knobBase = document.querySelector(".knob-base");

let rot = 0;

goBtn.addEventListener("click", function () {
  this.classList.toggle("pressed");
  label.classList.toggle("pressed");
  knobBase.classList.toggle("pressed");

  if (this.classList == "knob") {
    removeActive();
    newRotate(0);
  }
});

twitterBtn.addEventListener("click", function () {
  rotateHandle(this, 0);
});

facebookBtn.addEventListener("click", function () {
  rotateHandle(this, 45);
});

pinterestBtn.addEventListener("click", function () {
  rotateHandle(this, 89);
});

linkedinBtn.addEventListener("click", function () {
  rotateHandle(this, 128);
});

dribbbleBtn.addEventListener("click", function () {
  rotateHandle(this, 180);
});

tumblrBtn.addEventListener("click", function () {
  rotateHandle(this, 230);
});

behanceBtn.addEventListener("click", function () {
  rotateHandle(this, 270);
});

settingBtn.addEventListener("click", function () {
  rotateHandle(this, 310);
});

function removeActive() {
  let elementWithActive = document.querySelector(".active");

  if (elementWithActive) {
    elementWithActive.classList.remove("active");
  }
}

function addActive(element) {
  element.classList.add("active");
}

function addActive2() {
  this.classList.add("active");
}

function newRotate(newRot) {
  let apparentRot = rot % 360;

  if (apparentRot < 0) {
    apparentRot += 360;
  }

  if (apparentRot < 180 && newRot > apparentRot + 180) {
    // rotate back
    rot -= 360;
  }

  if (apparentRot >= 180 && newRot <= apparentRot - 180) {
    // rotate forward
    rot += 360;
  }

  rot += newRot - apparentRot;

  knob.style.transform = `rotate(${rot}deg)`;
}

function rotateHandle(element, newRot) {
  if (goBtn.classList == "knob pressed") {
    removeActive();
    addActive(element);
    newRotate(newRot);
  }
}
