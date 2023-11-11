// import default-ui
import "./node_modules/@t_g/default-ui/package/index";

// import site styles
import "./index.css";

const quotes = [
  "👋  Hi, I'm Tanner.",
  "😄  Nice to meet you!",
  "🐢 🌺 🖥️   I like turtles, fuchsia, and building things for the web.",
  "undefined",
  "🐛  You might have thought that was a bug!",
  "🤓  But I did that as a joke.",
  "😅  Ha ha.",
  "😎  BTW let's work together. Hire me!",
];

enum Settings {
  Sans = "sans",
  Serif = "serif",
  Monospace = "monospace",
  Cursive = "cursive",
  Fantasy = "fantasy",
  Math = "math",
}

const avatarQuoteContainer = document.querySelector(".avatar-quote-container");

const fontFamilyButton = document.querySelector("#toggle-font-family");

if (!fontFamilyButton) {
  throw new Error("Could not find #toggle-settings button");
}

// initialize to sans
fontFamilyButton.innerHTML = Settings.Sans;

fontFamilyButton.addEventListener("click", () => {
  const currentSetting = fontFamilyButton.innerHTML;

  const bodyElement = document.querySelector("body");

  if (!bodyElement) {
    throw new Error("Could not find html element");
  }

  const setSetting = (setting: Settings) => {
    bodyElement.setAttribute("setting", setting);
    fontFamilyButton.innerHTML = setting;
  };

  switch (currentSetting) {
    case Settings.Sans:
      setSetting(Settings.Serif);
      break;
    case Settings.Serif:
      setSetting(Settings.Monospace);
      break;
    case Settings.Monospace:
      setSetting(Settings.Cursive);
      break;
    case Settings.Cursive:
      setSetting(Settings.Fantasy);
      break;
    case Settings.Fantasy:
      setSetting(Settings.Math);
      break;
    case Settings.Math:
      setSetting(Settings.Sans);
      break;
  }
});

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

  const currentQuoteElement = document.querySelector('[current-quote="true"]');

  if (currentQuoteElement) {
    currentQuoteElement.removeAttribute("current-quote");
  }

  nextQuote.setAttribute("current-quote", "true");
  nextQuote.innerText = quotes[nextQuoteIndex];
  avatarQuoteContainer.appendChild(nextQuote);
}

let interval: number | null = null;

function resetQuotes() {
  if (!avatarQuoteContainer) return;

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
  avatarQuoteContainer.appendChild(initialQuote);

  interval = setInterval(() => {
    setQuotes(quotes);
  }, 2100);
}

// Initial start
resetQuotes();
