class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer__container page-container">

        
        <div class="footer__content">

          <div class="footer__logo">                  
            <img loading="lazy"  src="../assets/icons/logo.svg" alt="Logo" aria-label="Logo">
          </div>

          <div class="footer__menu">
            <nav-menu></nav-menu>
        </div>

        <div class="footer__buttons">
          <nav-buttons></nav-buttons>
        </div>

        <div class="footer__copyright">
          This website is maintained by Tihon Belenkiy. The contents and opinions of this website are those of Finity Touch. 
Finity Touch provides links to cryptocurrency exchanges as a service to the public
        </div>
</div>
      
        <div class="footer__decor">
        <div class="footer__decor-inner">
          <img loading="lazy"  src="../assets/images/footer/diamond.png" alt="Diamond" class="footer__diamond">
          <img loading="lazy"  src="../assets/images/footer/coin.png" alt="Coin Two Comp" class="footer__coin">
        </div>
      </div>
       
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-section', Footer);
