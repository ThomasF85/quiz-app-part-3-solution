import createCard from "./components/card/card.js";

const form = document.querySelector('[data-js="add-card-form"]');
const cardList = document.querySelector('[data-js="card-list"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = createCard(data.question, data.answer, data.tag);
  cardList.append(newCard);
});

const question = document.querySelector('[data-js="question"]');
const questionCounter = document.querySelector('[data-js="question-counter"]');
const answer = document.querySelector('[data-js="answer"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');

function initializeCounter(element, elementCounter) {
  const maxLength = parseInt(element.getAttribute("maxlength"));
  element.addEventListener("input", () => {
    const length = element.value.length;
    const remainingCharacters = maxLength - length;
    elementCounter.textContent = `${remainingCharacters} characters left`;
  });
}

initializeCounter(question, questionCounter);
initializeCounter(answer, answerCounter);
