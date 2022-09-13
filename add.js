import createCard from "./components/card/card.js";
import { loadCards, saveCards } from "./components/localstorage.js";

const form = document.querySelector('[data-js="add-card-form"]');
const cardList = document.querySelector('[data-js="card-list"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    id: Math.random() + "",
    question: data.question,
    answer: data.answer,
    tag: data.tag,
  };

  const cards = loadCards();
  cards.push(newCard);
  saveCards(cards);
  alert("New Card created!");
  event.target.reset();
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
