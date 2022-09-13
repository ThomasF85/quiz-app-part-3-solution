import createCard from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-list"]');

const cards = [
  {
    question: "Question 1",
    answer: "Answer 1",
    tag: "Tag 1",
  },
  {
    question: "Question 1b",
    answer: "Answer 1b",
    tag: "Tag 1b",
  },
];

cards.forEach((card) => {
  const cardElement = createCard(card.question, card.answer, card.tag);
  cardContainer.append(cardElement);
});
