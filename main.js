"use strict";

// Selecting elements
const navContainer = document.querySelector(".nav-container");
const mainOpenBtn = document
  .querySelector(".account-box")
  .querySelector("button");
const minorOpenBtn = document.querySelector(".minor-open-btn");
const accountText = document
  .querySelector(".account-box")
  .querySelectorAll("p");
const mainListContent = document.querySelectorAll(".main-list-text");
const smallIcon = document.querySelectorAll(".small-icon");
const minorList = document.querySelector(".minor-list");

// Event handlers
let navOpen = false;
mainOpenBtn.addEventListener("click", function () {
  navContainer.classList.toggle("closed");
  accountText.forEach((el) => {
    el.classList.toggle("visibility");
  });
  smallIcon.forEach((el) => {
    el.classList.toggle("visibility");
  });
  mainListContent.forEach((el) => {
    el.classList.toggle("visibility");
  });

  if (navOpen && !minorList.classList.contains("closed")) {
    minorList.classList.toggle("closed");
    minorOpenBtn.classList.toggle("closed");
  }

  navOpen = true ? navOpen === false : true;
});

minorOpenBtn.addEventListener("click", function () {
  if (navOpen) {
    minorList.classList.toggle("closed");
    minorOpenBtn.classList.toggle("closed");
    minorList.classList.add("visibility");
  }
});
