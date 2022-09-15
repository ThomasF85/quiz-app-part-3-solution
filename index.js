import createCard from "./components/card/card.js";
import { loadCards, saveCards } from "./utilities/localstorage.js";

const cardContainer = document.querySelector('[data-js="card-list"]');

let cards = loadCards();

function toggleBookmark(id) {
  const toggledCardArray = cards.map((card) =>
    card.id === id ? { ...card, bookmarked: !card.bookmarked } : card
  );
  cards = toggledCardArray;
  saveCards(toggledCardArray);
}

cards.forEach((card) => {
  const cardElement = createCard(
    card.question,
    card.answer,
    card.tag,
    card.bookmarked,
    () => toggleBookmark(card.id)
  );
  cardContainer.append(cardElement);
});
