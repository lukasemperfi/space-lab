class TeamCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute('name');
    const position = this.getAttribute('position');
    const image = this.getAttribute('image');
    const telegram = this.getAttribute('telegram');
    const instagram = this.getAttribute('instagram');
    const linkedin = this.getAttribute('linkedin');
    const twitter = this.getAttribute('twitter');

    this.innerHTML = `
      <div class="team-card">
        <div class="team-card__image-container">
          <img loading="lazy"  src="${image}" alt="${name}" class="team-card__image" /> 
        </div>
          <h3 class="team-card__name">${name}</h3>
          <p class="team-card__position">${position}</p>
        <div class="team-card__social">
            <a href="https://www.linkedin.com/in/${linkedin}" target="_blank" class="team-card__social-link">
              <linkedin-icon></linkedin-icon>
            </a>
            <a href="https://www.instagram.com/${instagram}" target="_blank" class="team-card__social-link">
              <instagram-icon></instagram-icon>
            </a>
            <a href="https://t.me/${telegram}" target="_blank" class="team-card__social-link">
            <telegram-icon></telegram-icon>
            </a>
            <a href="https://twitter.com/${twitter}" target="_blank" class="team-card__social-link">
              <twitter-icon></twitter-icon>
            </a>
        </div>
      </div>
    `;
  }
}

customElements.define('team-card', TeamCard);
