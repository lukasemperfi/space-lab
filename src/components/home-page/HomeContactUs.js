class HomeContactUs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="home-contact-us ">

     
      <div class="home-contact-us__container ">
        <h2 class="home-contact-us__title ">Contact Us</h2> 
        <div class="home-contact-us__content ">
          <contact-form></contact-form>
        </div>
        <toast-notification></toast-notification>
              <div class="home-contact-us__decor-left">
        <div class="home-contact-us__decor-left-inner">
          <img loading="lazy"  src="../assets/images/home-contact-us/diamond-left.svg" alt="Diamond" class="home-contact-us__diamond-left">
          <img loading="lazy"  src="../assets/images/home-contact-us/coin-left.png" alt="Coin Two Comp" class="home-contact-us__coin-left">
        </div>
      </div>
      <div class="home-contact-us__decor-right">
        <div class="home-contact-us__decor-right-inner">
          <img loading="lazy"  src="../assets/images/home-contact-us/diamond-right.svg" alt="Diamond" class="home-contact-us__diamond-right">
          <img loading="lazy"  src="../assets/images/home-contact-us/coin-right.png" alt="Coin Two Comp" class="home-contact-us__coin-right">
        </div>
      </div>
      </div>
      </section>
    `;
  }
}

customElements.define('homecontact-us', HomeContactUs);
