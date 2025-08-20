class TokenRoadmapSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="token-roadmap">
        <div class="token-roadmap__container page-container">
          <h2 class="token-roadmap__title">Roadmap</h2>
          <p class="token-roadmap__description"> 
             There is a total of 1,000,000,000 FNT tokens. Binance Smart Chain is the Issuer of the FNT Token and will distribute FNT tokens in the following areas:
          </p>
          <roadmaplinevertical-icon></roadmaplinevertical-icon>
          <roadmaplineverticalwide-icon></roadmaplineverticalwide-icon>
          <img loading="lazy"  src="../assets/images/token-roadmap/decor-left-desktop.svg" alt="Roadmap Line Vertical" class="token-roadmap__decor-mobile-top " >
          <img loading="lazy"  src="../assets/images/token-roadmap/decor-left-desktop.svg" alt="Roadmap Line Vertical" class="token-roadmap__decor-mobile-middle ">
          <img loading="lazy"  src="../assets/images/token-roadmap/decor-left-desktop.svg" alt="Roadmap Line Vertical" class="token-roadmap__decor-mobile-bottom ">

          <img loading="lazy"  src="../assets/images/token-roadmap/decor-left-desktop.svg" alt="Roadmap Line Vertical" class="token-roadmap__decor-desktop-left ">
          <img loading="lazy"  src="../assets/images/token-roadmap/decor-right-desktop.svg" alt="Roadmap Line Vertical" class="token-roadmap__decor-desktop-right ">
        </div>
      </section>
    `;
  }
}

customElements.define('tokenroadmap-section', TokenRoadmapSection);
