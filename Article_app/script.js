// Sample article data
const articles = [
  {
    id: 1,
    title: "Health: Staying Fit in a Busy World",
    thumbnail: "https://via.placeholder.com/600x300?text=Health",
    preview: "Discover quick and effective ways to stay healthy and active, even with a packed schedule...",
    content: "Health is wealth. Small changes like walking, hydration, and mindful eating go a long way..."
  },
  {
    id: 2,
    title: "Travel: Exploring the Mountains of India",
    thumbnail: "https://via.placeholder.com/600x300?text=Travel",
    preview: "Mountains are calling! Explore the scenic beauty, local culture, and hidden gems of Himachal...",
    content: "From Manali to Spiti, every region offers something unique. Here's how to plan your next adventure..."
  },
  {
    id: 3,
    title: "Work: Balancing Productivity and Peace",
    thumbnail: "https://via.placeholder.com/600x300?text=Work",
    preview: "Burnout is real. Here’s how to maintain work efficiency while keeping mental peace intact...",
    content: "To avoid burnout, prioritize tasks, take breaks, and set boundaries. Learn more strategies here..."
  }
];











const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function setSlide(index) {
  showSlide(index);
}

setInterval(nextSlide, 5000); // Auto-slide every 5 seconds

























document.addEventListener("DOMContentLoaded", () => {
  const feedEl = document.getElementById("feed");
  const readerEl = document.getElementById("reader");
  const readerTitle = document.getElementById("reader-title");
  const readerImg = document.getElementById("reader-img");
  const readerContent = document.getElementById("reader-content");

  // Render article feed
  function renderFeed() {
    articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.cursor = "pointer";
      card.innerHTML = `
        <img src="${article.thumbnail}" alt="${article.title}" />
        <h3>${article.title}</h3>
        <p>${article.preview}</p>
      `;
      card.addEventListener("click", () => openArticle(article));
      feedEl.appendChild(card);
    });
  }

  function openArticle(article) {
    readerTitle.textContent = article.title;
    readerImg.src = article.thumbnail;
    readerContent.textContent = article.content;
    readerEl.classList.remove("hidden");
    readerEl.scrollIntoView({ behavior: "smooth" });
  }

  function goBack() {
    readerEl.classList.add("hidden");
  }

  renderFeed();

  // Smooth scroll on Get Started
  const getStartedBtn = document.getElementById("getStartedBtn");
  if (getStartedBtn && feedEl) {
    getStartedBtn.addEventListener("click", () => {
      feedEl.scrollIntoView({ behavior: "smooth" });
    });
  }
});


