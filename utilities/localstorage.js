function loadCards() {
  const cards = localStorage.getItem("cards");
  if (cards === null) {
    return [];
  }
  return JSON.parse(cards);
}

function saveCards(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
}

export { loadCards, saveCards };
