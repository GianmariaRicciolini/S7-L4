//

const urlFirst = "https://api.pexels.com/v1/search?query=kitty";
const urlSecond = "https://api.pexels.com/v1/search?query=Horse";

function newPhoto(url) {
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `WvR3mdw1RmrDh0WQFsTQJ3G3jotT84rRTjtL01detNTcrqr9DR9Kv41i`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.photos && data.photos.length > 0) {
        const cards = document.querySelectorAll(".card");
        for (let i = 0; i < cards.length; i++) {
          const cardImage = cards[i].querySelector(".bd-placeholder-img.card-img-top");
          const cardIdText = cards[i].querySelector(".text-muted");

          const nuovoURL = data.photos[i % data.photos.length].src.medium;
          const photoId = data.photos[i % data.photos.length].id;

          if (cardImage) {
            cardImage.src = nuovoURL;
          }
          if (cardIdText) {
            cardIdText.innerText = `ID:${photoId}`;
          }
        }
      } else {
        console.error("NESSUNA IMMAGINE");
      }
    })
    .catch((error) => console.error("Errore:", error));
}
//
function changeText(element, text) {
  element.innerText = text;
}

function addClass(element, style) {
  element.classList.add(style);
}

const hideButton = document.querySelectorAll(".btn-group button:nth-child(2)");

hideButton.forEach((button) => {
  changeText(button, "Hide");
  const card = button.closest(".card");

  button.onclick = () => {
    addClass(card, "d-none");
  };
});
