const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="card-answer"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

answerButton.addEventListener("click", () => {
  if (answer.classList.contains("card__answer--active")) {
    answer.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  } else {
    answer.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  }
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
