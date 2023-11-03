const quotes = [
  "👋  Hey, I'm Tanner.",
  "😄  Nice to meet you!",
  "🐢 🌺 🖥️   I like turtles, fuchsia, and building things for the web.",
  "undefined",
  "🐛  You might have thought that was a bug!",
  "🤓  But I did that as a joke.",
  "😅  Ha ha.",
  "😎  Anyway, let's work together. Hire me!",
];

const avatarQuoteContainer = document.querySelector(".avatar-quote-container");

if (!avatarQuoteContainer) {
  throw new Error("Could not find .avatar-quote-container");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      resetQuotes();
    }
  });
});

observer.observe(avatarQuoteContainer);

function setQuotes(quotes: string[]) {
  const avatarQuoteContainer = document.querySelector(
    ".avatar-quote-container"
  );

  if (!avatarQuoteContainer) {
    throw new Error("Could not find .avatar-quote-container");
  }

  const avatarQuotes = avatarQuoteContainer.querySelectorAll(".avatar-quote");

  const currentQuote = avatarQuotes[avatarQuotes.length - 1];
  let nextQuoteIndex = quotes.indexOf(currentQuote.innerHTML) + 1;
  const nextQuote = document.createElement("p");

  if (nextQuoteIndex >= quotes.length) {
    const allQuotes = document.querySelectorAll(".avatar-quote");
    allQuotes.forEach((quote) => quote.remove());
    nextQuoteIndex = 0;
  }

  nextQuote.classList.add("avatar-quote");
  nextQuote.setAttribute("avatar-quote-number", `${nextQuoteIndex + 1}`);

  const allQuotes = document.querySelectorAll(".avatar-quote");
  allQuotes.forEach((quote) => quote.removeAttribute("current-quote"));

  nextQuote.setAttribute("current-quote", "true");
  nextQuote.innerText = quotes[nextQuoteIndex];
  avatarQuoteContainer?.appendChild(nextQuote);
}

let interval: number | null = null;

function resetQuotes() {
  if (interval) {
    clearInterval(interval);
  }

  const existingQuotes = document.querySelectorAll(".avatar-quote");
  existingQuotes.forEach((quote) => quote.remove());

  const initialQuote = document.createElement("p");
  initialQuote.classList.add("avatar-quote");
  initialQuote.setAttribute("avatar-quote-number", "1");
  initialQuote.setAttribute("current-quote", "true");
  initialQuote.innerText = quotes[0];
  avatarQuoteContainer?.appendChild(initialQuote);

  interval = setInterval(() => {
    setQuotes(quotes);
  }, 2100);
}

// Initial start
resetQuotes();
