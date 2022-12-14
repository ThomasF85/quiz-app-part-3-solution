import createCard from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-list"]');

const cards = [
  {
    question: "Question 1",
    answer: "Answer 1",
    tag: "Tag 1",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
    tag: "Tag 2",
  },
  {
    question: "Question 3",
    answer: "Answer 3",
    tag: "Tag 3",
  },
];

cards.forEach((card) => {
  const cardElement = createCard(card.question, card.answer, card.tag);
  cardContainer.append(cardElement);
});
