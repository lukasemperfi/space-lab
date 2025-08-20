class HeroSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="hero page-container">
        <div class="hero__column hero__column--left">
          <video 
            class="hero__video" 
            poster="/assets/video/coin-poster.webp"https://lukasemperfi.github.io/spase-lab/assets/video/coin.mp4
            autoplay 
            muted 
            loop 
            playsinline
            aria-label="Finity Touch promotional video"
          >
            <source src="/assets/video/coin.mp4" type="video/mp4">
            <source src="/assets/video/coin.webm" type="video/webm">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="hero__column hero__column--right">
          <div class="hero__content">
            <h1 class="hero__title">Finity Touch</h1>
            <p class="hero__subtitle">Creating an ecosystem WEB 3.0 that you really want to use</p>
            <p class="hero__description">
              Finity Touch creates the infrastructure for a secure and innovative future
            </p>
          </div>
          <nav-buttons></nav-buttons>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);

export default HeroSection;
