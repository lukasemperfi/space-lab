class FundContactUs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="fund-contact-us contact-us">
        <div class="contact-us__container page-container">
          <div class="contact-us__content">
            <div class="contact-card">
              <div class="contact-card__content-top">
                <h2 class="contact-card__title contact-us__title">Submit your application today</h2>
                <div class="contact-card__actions">
                  <button class="contact-card__button wavy-button--reverse">Contact Us</button>
                  <button class="contact-card__button wavy-button--reverse">Apply Now</button>
                </div>
              </div>
              <div class="contact-card__content-bottom">
                <div class="contact-card__social">
                  <linkedin-icon></linkedin-icon>
                  <instagram-icon></instagram-icon>
                  <telegram-icon></telegram-icon>                
                  <twitter-icon></twitter-icon>               
                  <reddit-icon></reddit-icon>
                  <discord-icon></discord-icon>
                </div>
              </div>
            </div>
            <div class="fund-contact-us__decor-left">
        <div class="fund-contact-us__decor-left-inner">
                  <img loading="lazy"  src="../../assets/images/fund-contact-us/diamond-left.svg" alt="decor" class="fund-contact-us__diamond-left">
 <img loading="lazy"  src="../../assets/images/fund-contact-us/coin-five-comp-left.png" alt="decor" class="fund-contact-us__coin-left">
        </div>
      </div>
      <div class="fund-contact-us__decor-right">
        <div class="fund-contact-us__decor-right-inner">
                    <img loading="lazy"  src="../../assets/images/fund-contact-us/diamond-right.svg" alt="decor" class="fund-contact-us__diamond-right">
           
            <img loading="lazy"  src="../../assets/images/fund-contact-us/coin-five-comp-right.png" alt="decor" class="fund-contact-us__coin-right">

        </div>
      </div>

          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('fundcontact-us', FundContactUs);
