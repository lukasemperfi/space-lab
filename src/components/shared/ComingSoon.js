class ComingSoon extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="coming-soon">
        <h1 class="coming-soon__title">Coming Soon</h1>
        <img loading="lazy"  src="../assets/images/coming-soon/decor-left.png" alt="Coming Soon" class="coming-soon__decor-left">
        <img loading="lazy"  src="../assets/images/coming-soon/decor-right.png" alt="Coming Soon" class="coming-soon__decor-right">
      </div>
    `;
  }
}

customElements.define('coming-soon', ComingSoon);
