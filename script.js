const dice = document.getElementById('dice')
const id = document.getElementById('id')
const advice = document.getElementById('advice');

function loadQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      id.innerHTML = `ADVICE #${response.slip.id}`;
      advice.innerHTML = `"${response.slip.advice}"`;
    });
}

loadQuote()

dice.addEventListener("click", loadQuote());
