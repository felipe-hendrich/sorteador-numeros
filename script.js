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
form.addEventListener("submit", (event) => {
  event.preventDefault();

  clearError();

  const totalValue = totalNumbersInput.value.trim();
  if (totalValue === "") {
    showError("Informe a quantidade de números.");
    return;
  }

  const totalNumber = Number(totalValue);

  if (totalNumber <= 0) {
    showError("A quantidade de números deve ser maior que zero.");
    return;
  }

  if (!Number.isInteger(totalNumber)) {
    showError("A quantidade de números deve ser um valor inteiro.");
    return;
  }

  const lowsValue = lowestValueInput.value.trim();
  if (lowsValue === "") {
    return;
  }

  const lowsNumber = Number(lowsValue);

  if (!Number.isInteger(lowsNumber)) {
    showError("A quantidade de números deve ser um valor inteiro.");
    return;
  }

  const highestValue = highestValueInput.value.trim();
  if (highestValue === "") {
    return;
  }

  const highestNumber = Number(highestValue);

  if (!Number.isInteger(highestNumber)) {
    showError("A quantidade de números deve ser um valor inteiro.");
    return;
  }

  if (lowsNumber > highestNumber) {
    showError("O menor valor não pode ser maior que o maior valor.");
    return;
  }

  const noRepeat = numberToggle.checked;

  const availableNumbers = highestNumber - lowsNumber + 1;

  if (noRepeat && totalNumber > availableNumbers) {
    showError("A quantidade solicitada é maior que os números disponíveis no intervalo.");
    return;
  }
  const results = [];

  while (results.length < totalNumber) {
    const randomNumber = Math.floor(Math.random() * (highestNumber - lowsNumber + 1)) + lowsNumber;

    if (noRepeat && results.includes(randomNumber)) {
      continue;
    }

    results.push(randomNumber);
  }

  form.classList.add("hidden");
  resultsSection.classList.remove("hidden");
  btnAgain.classList.add("hidden");

  results.forEach((result, index) => {
    setTimeout(() => {
      const resultTemplate = document.createElement("div");

      resultTemplate.classList.add("result-value");
      resultTemplate.textContent = result;

      resultValues.append(resultTemplate);

      if (index === results.length - 1) {
        resultTemplate.addEventListener(
          "animationend",
          () => {
            btnAgain.classList.remove("hidden");
          },
          { once: true }
        );
      }

      requestAnimationFrame(() => {
        resultTemplate.classList.add("show");
      });
    }, index * 2000);
  });
});
