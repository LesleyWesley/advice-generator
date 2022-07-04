//Selects span with advice number
const adviceNumSpan = document.querySelector(".advice-num");

//Selects blockquote that contains advice
const blockquote = document.querySelector("blockquote");

//Selects button to choose new advice
const button = document.querySelector("button");

//================================================================

//Function to retrieve and parse API data

const getQuote = async function () {
    const results = await fetch("https://api.adviceslip.com/advice");
    const parsedQuotes = await results.json();

    showInfo(parsedQuotes);
};

//================================================================

//Function to populate page with number of advice and quote

const showInfo = function (parsedQuotes) {
  const adviceNum = parsedQuotes.slip.id;
  const advice = parsedQuotes.slip.advice;

  adviceNumSpan.innerText = `${adviceNum}`;
  blockquote.innerText = `"${advice}"`;
}

//================================================================

button.addEventListener("click", function () {
  getQuote();
});
