class TokenContactUs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="token-contact-us ">

     
      <div class="token-contact-us__container">

        <h2 class="token-contact-us__title">Contact Us</h2> 
        <div class="token-contact-us__content">
          <contact-form></contact-form>
        </div>
        <toast-notification></toast-notification>

        <div class="token-contact-us__decor-left">
        <div class="token-contact-us__decor-left-inner">
          <img loading="lazy"  src="../assets/images/token-contact-us/diamond-left.png" alt="Diamond" class="token-contact-us__diamond-left">
          <img loading="lazy"  src="../assets/images/token-contact-us/coin-left.png" alt="Coin Two Comp" class="token-contact-us__coin-left">
        </div>
      </div>
      <div class="token-contact-us__decor-right">
        <div class="token-contact-us__decor-right-inner">
          <img loading="lazy"  src="../assets/images/token-contact-us/diamond-right.png" alt="Diamond" class="token-contact-us__diamond-right">
          <img loading="lazy"  src="../assets/images/token-contact-us/coin-right.png" alt="Coin Two Comp" class="token-contact-us__coin-right">
        </div>
      </div>
      </div>
      </section>
    `;
  }
}

customElements.define('tokencontact-us', TokenContactUs);
