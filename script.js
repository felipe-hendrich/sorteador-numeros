const form = document.querySelector("form");
const totalNumbersInput = document.querySelector("#totalNumbersInput");
const lowestValueInput = document.querySelector("#lowestValueInput");
const highestValueInput = document.querySelector("#highestValueInput");
const numberToggle = document.querySelector("#number-toggle");
const resultsSection = document.querySelector(".results");
const resultValues = document.querySelector(".results-values");
const btnAgain = document.querySelector(".btn-again");
const errorMessage = document.querySelector(".error-message");
const closeButton = document.querySelector(".close-button");

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
  closeButton.classList.remove("hidden");
}

function clearError() {
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
  closeButton.classList.add("hidden");
}
