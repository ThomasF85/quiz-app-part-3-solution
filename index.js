import createCard from "./components/card/card.js";
import { loadCards } from "./utilities/localstorage.js";

const cardContainer = document.querySelector('[data-js="card-list"]');

const cards = loadCards();

cards.forEach((card) => {
  const cardElement = createCard(card.question, card.answer, card.tag);
  cardContainer.append(cardElement);
});
