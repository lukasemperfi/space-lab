import { teamData } from '../../data/home-page/team.min.js';

class TeamSection extends HTMLElement {
  constructor() {
    super();
    this.currentLimit = 8;
    this.isExpanded = false;
  }

  connectedCallback() {
    this.innerHTML = `
        <section class="team">
            <div class="team__container page-container">
              <img loading="lazy"  class="team__decor-left-mobile" src="../assets/images/team/decor-left-mobile.png" alt="team-background-1">
            <img loading="lazy"  class="team__decor-right-mobile" src="../assets/images/team/decor-right-mobile.png" alt="team-background-1">
            <img loading="lazy"  class="team__decor-left-desktop" src="../assets/images/team/decor-left-desktop.png" alt="team-background-1">
            <img loading="lazy"  class="team__decor-right-desktop" src="../assets/images/team/decor-right-desktop.png" alt="team-background-1">
            
                <h2 class="team__title">Our Team</span></h2>
                <div class="team__content">
                    <team-slider></team-slider>
                    <div class="team__grid">
                    <div class="team__grid-list">
                      ${this.renderTeamCards(8)}
                        </div>
                      <div class="team__button-container">
                        ${this.renderButton()}
                      </div>         
                    </div>
                </div>
    
                </div>
            </div>
        </section>
    `;

    // Set the data on the thesis-slider
    this.setTeamSliderData();
    this.bindEvents();
  }

  renderTeamCards(limit) {
    return teamData
      .slice(0, limit)
      .map(
        item => `
        <div class="team__grid-item">
          <team-card name="${item.name}" position="${item.position}" image="${item.image}" telegram="${item.telegram}" instagram="${item.instagram}" linkedin="${item.linkedin}" twitter="${item.twitter}"></team-card>
        </div>
    `
      )
      .join('');
  }

  renderButton() {
    if (this.currentLimit >= teamData.length) {
      return `
        <div class="team__end-message">
          <span>Больше ничего нет</span>
          <button class="team__collapse-button wavy-button-2">Свернуть</button>
        </div>
      `;
    }

    return `
      <button class="team__button wavy-button-2">More                 
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L8.27273 11.5L16 1.5" stroke="white" stroke-width="2" />
        </svg>
      </button> 
    `;
  }

  bindEvents() {
    const buttonContainer = this.querySelector('.team__button-container');

    buttonContainer.addEventListener('click', e => {
      if (e.target.closest('.team__button')) {
        this.loadMore();
      } else if (e.target.closest('.team__collapse-button')) {
        this.collapse();
      }
    });
  }

  loadMore() {
    this.currentLimit = Math.min(this.currentLimit + 4, teamData.length);
    this.isExpanded = true;

    const gridList = this.querySelector('.team__grid-list');
    const buttonContainer = this.querySelector('.team__button-container');

    gridList.innerHTML = this.renderTeamCards(this.currentLimit);
    buttonContainer.innerHTML = this.renderButton();
  }

  collapse() {
    this.currentLimit = 8;
    this.isExpanded = false;

    const gridList = this.querySelector('.team__grid-list');
    const buttonContainer = this.querySelector('.team__button-container');

    gridList.innerHTML = this.renderTeamCards(this.currentLimit);
    buttonContainer.innerHTML = this.renderButton();
  }

  setTeamSliderData() {
    // Wait for the next tick to ensure the DOM is ready
    setTimeout(() => {
      const teamSlider = this.querySelector('team-slider');
      if (teamSlider) {
        teamSlider.setData(teamData);
        console.log('Data set on team-slider:', teamSlider);
      } else {
        console.error('thesis-slider not found');
      }
    }, 0);
  }
}

customElements.define('team-section', TeamSection);

{
  /* <svg class="team__background-1" width="448" height="308" viewBox="0 0 448 308" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_5441_2907)">
  <path d="M378 114C378 153.488 193.111 203.5 153.579 203.5C114.047 203.5 70.5 263.989 70.5 224.5C70.5 185.012 114.047 70 153.579 70C193.111 70 378 74.5116 378 114Z" fill="url(#paint0_linear_5441_2907)" />
</g>
<defs>
  <filter id="filter0_f_5441_2907" x="0.5" y="0" width="447.5" height="307.881" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix" />
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
    <feGaussianBlur stdDeviation="35" result="effect1_foregroundBlur_5441_2907" />
  </filter>
  <linearGradient id="paint0_linear_5441_2907" x1="153.579" y1="154.46" x2="153.579" y2="203.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#8201AF" />
    <stop offset="1" stop-color="#0008CC" />
  </linearGradient>
</defs>
</svg> */
}
