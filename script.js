//
let balance = [
  {
    id: 1,
    title: "YIN&YANG",
    imageUrl: "https://cdn.pixabay.com/photo/2013/07/12/18/02/yin-and-yang-152829_640.png",
    description: "LIGHT AND DARK",
    likes: 0, 
  },
  {
    id: 2,
    title: "SCALES",
    imageUrl: "https://cdn.pixabay.com/photo/2024/05/12/10/05/libra-8756539_640.png",
    description: "TWO SIDES DIFFERENT OUTCOMES",
    likes: 0,
  },
  {
    id: 3,
    title: "MONY",
    imageUrl: "https://cdn.pixabay.com/photo/2023/05/11/11/05/glass-sphere-7986102_640.jpg",
    description: "HARMONY ALL AROUND",
    likes: 0,
  },
];

// ii inasva likes kwa localstorage.
function saveLikesToLocalStorage() {
  localStorage.setItem("likes", JSON.stringify(balance)); 
}

// inafetche na kuload likes kutoka localStorage
function loadLikesFromLocalStorage() {
  const savedLikes = JSON.parse(localStorage.getItem("likes"));
  if (savedLikes) {
    balance = savedLikes; 
  }
}

loadLikesFromLocalStorage();


function displayBalance({ id, title, imageUrl, description, likes }) {
  return `
    <div class="cardi">
      <h4>${title}</h4>
      <div>
        <img src="${imageUrl}" alt="${title}">
      </div>
      <div>
        <p>${description}</p>
      </div>
      <div>
        <button class="like-button" onclick="increaseLike(${id})">Like</button>
        <span id="like-count-${id}">${likes} Likes</span>
      </div>
    </div>
  `;
}

// ii fxn inaincrease likee counts na pia kuupdate
function increaseLike(id) {
  const item = balance.find((item) => item.id === id);
  if (item) {
    item.likes += 1;
    document.getElementById(`like-count-${id}`).textContent = `${item.likes} Likes`; 
    saveLikesToLocalStorage(); 
  }
}

let X = document.getElementById("card-container");

let y = balance.map((item) => displayBalance(item)).join("");

X.innerHTML = y;
