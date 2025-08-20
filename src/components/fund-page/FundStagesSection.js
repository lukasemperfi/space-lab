class FundStagesSection extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <section class="fund-stages">
        <div class="page-container fund-stages__container">
      <img loading="lazy"  class="fund-stages__decor fund-stages__decor--left-mobile" src="../assets/images/fund-stages/decor-left-mobile.svg" alt="decor-left" >
      <img loading="lazy"  class="fund-stages__decor fund-stages__decor--right-mobile" src="../assets/images/fund-stages/decor-right-mobile.svg" alt="decor-right" >
      
      <img loading="lazy"  class="fund-stages__decor fund-stages__decor--desktop" src="../assets/images/fund-stages/decor-left-desktop.svg" alt="decor-left" >
      
      <img loading="lazy"  class="fund-stages__stages fund-stages__stages--mobile" src="../assets/images/fund-stages/stages-mobile.svg" alt="stages" >
      <img loading="lazy"  class="fund-stages__stages fund-stages__stages--desktop" src="../assets/images/fund-stages/stages-desktop.svg" alt="stages" >


      </div>
    </section>
    `;
  }
}

customElements.define('fundstages-section', FundStagesSection);
