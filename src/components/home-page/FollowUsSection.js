class FollowUsSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <section class="follow-us">
          <h2 class="follow-us__title">Follow Us On Social Media</h2>
          <div class="follow-us__image-container">
           <img loading="lazy"  class="follow-us__mask" src="../../assets/images/follow-us/mask.png" alt="mask" />
            <img loading="lazy"  class="follow-us__base" src="../../assets/images/follow-us/base.png" alt="base" />
            <img loading="lazy"  class="follow-us__token follow-us__token--instagram " src="../../assets/images/follow-us/token-instagram-2.png" alt="token instagram" />
            <img loading="lazy"  class="follow-us__token follow-us__token--twitter" src="../../assets/images/follow-us/token-twitter.png" alt="token twitter" />
            <img loading="lazy"  class="follow-us__token follow-us__token--telegram" src="../../assets/images/follow-us/token-telegram.png" alt="token telegram" />
            <img loading="lazy"  class="follow-us__token follow-us__token--discord" src="../../assets/images/follow-us/token-discord.png" alt="token discord" />
            <img loading="lazy"  class="follow-us__token follow-us__token--linkedIn" src="../../assets/images/follow-us/token-linkedIn.png" alt="token linkedIn" />
            <img loading="lazy"  class="follow-us__token follow-us__token--reddit" src="../../assets/images/follow-us/token-reddit.png" alt="token reddit" />
          </div>
        </section>
      `;
  }
}

customElements.define('followus-section', FollowUsSection);
