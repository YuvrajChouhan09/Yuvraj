    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('toggleIcon');
    const text = document.getElementById('toggleText');
    const body = document.body;

    toggle.addEventListener('click', () => {
      const dark = body.classList.toggle('dark-mode');
      icon.textContent = dark ? 'dark_mode' : 'light_mode';
      text.textContent = dark ? 'Dark Mode' : 'Light Mode';
    });



  function toggleReadMore(btn) {
    const text = btn.previousElementSibling.querySelector('.more-text');
    const isHidden = text.style.display === "none";
    text.style.display = isHidden ? "inline" : "none";
    btn.textContent = isHidden ? "Read less" : "Read more";
  }
const games = ["Minecraft", "Valorant", "Among Us", "Real Racing 3", "Gta san andreas", "gta vice city", "BGMI", "Genshin Impact", "Asphalt 9", "FC mobile","Honkai: Star Rail"];

const container = document.getElementById("gameCardsContainer");

games.forEach(async (game) => {
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(game)}`);
    const data = await res.json();

    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${data.thumbnail?.source || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}" alt="${data.title}">
      <div class="card-body">
        <div class="title-type">
          <h3>${data.title}</h3>
          <span class="game-type">${data.description || 'Game'}</span>
        </div>
        <a href="${data.content_urls?.desktop?.page || '#'}" target="_blank" class="view-more-btn">View More</a>
      </div>
    `;
    container.appendChild(card);
  } catch (err) {
    console.error("Error loading:", game);
  }
});
    function sendMail() {
      const name = document.getElementById('name').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const message = document.getElementById('message').value.trim();

      const subject = encodeURIComponent(`Message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nContact: ${contact}\n\n${message}`);

      const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    }
    
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('section').forEach(elem => {
    gsap.to(elem, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elem,
        start: 'top 80%', // when top of element hits 80% of viewport
        toggleActions: 'play none none none',
      }
    });
  });

