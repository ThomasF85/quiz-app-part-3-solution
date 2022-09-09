const form = document.querySelector('[data-js="add-card-form"]');
const cardList = document.querySelector('[data-js="card-list"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createCard(data);
});

function createCard(cardData) {
  const card = document.createElement("li");
  card.classList.add("card-list__item");

  card.innerHTML = `<article class="card">
  <h2 class="card__question" data-js="card-question">
  </h2>
  <button
    class="card__button-answer"
    type="button"
    data-js="answer-button"
  >
    Show answer
  </button>
  <p class="card__answer" data-js="card-answer"></p>
  <ul class="card__tag-list">
    <li class="card__tag-list-item"></li>
  </ul>
  <div class="card__button-bookmark">
    <button
      class="bookmark"
      aria-label="bookmark"
      type="button"
      data-js="bookmark-button"
    >
      <svg
        class="bookmark__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 24 24"
      >
        <path
          d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        />
      </svg>
    </button>
  </div>
</article>`;

  card.querySelector('[data-js="card-question"]').textContent =
    cardData.question;
  card.querySelector('[data-js="card-answer"]').textContent = cardData.answer;
  card.querySelector("li.card__tag-list-item").textContent = `#${cardData.tag}`;
  cardList.append(card);

  // The following code is optional and adds functionality to the card.
  // It is duplicated code from index.js. We will learn in a future session
  // how to use JavaScript from a different file, so we don't have to duplicate
  // code here.
  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answer = card.querySelector('[data-js="card-answer"]');
  const bookmarkButton = card.querySelector('[data-js="bookmark-button"]');

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
}

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
