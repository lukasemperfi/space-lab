class HomeMarquee extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="home-marquee" aria-label="Partner logos scrolling banner">
       <div class="home-marquee__wrapper fadeout-horizontal">
          <div class="home-marquee__text">
            <div class="home-marquee__text-track">
                    <inch-logo></inch-logo>
                    <coingecko-logo></coingecko-logo>
                    <coinmarketcap-logo></coinmarketcap-logo>
                    <trustwallet-logo></trustwallet-logo>
                    <metamask-logo></metamask-logo>
                    <bsc-logo></bsc-logo>
                    <pancakeswap-logo></pancakeswap-logo>  

                    <inch-logo></inch-logo>
                    <coingecko-logo></coingecko-logo>
                    <coinmarketcap-logo></coinmarketcap-logo>
                    <trustwallet-logo></trustwallet-logo>
                    <metamask-logo></metamask-logo>
                    <bsc-logo></bsc-logo>
                    <pancakeswap-logo></pancakeswap-logo>  

                    <inch-logo></inch-logo>
                    <coingecko-logo></coingecko-logo>
                    <coinmarketcap-logo></coinmarketcap-logo>
                    <trustwallet-logo></trustwallet-logo>
                    <metamask-logo></metamask-logo>
                    <bsc-logo></bsc-logo>
                    <pancakeswap-logo></pancakeswap-logo>  

                    <inch-logo></inch-logo>
                    <coingecko-logo></coingecko-logo>
                    <coinmarketcap-logo></coinmarketcap-logo>
                    <trustwallet-logo></trustwallet-logo>
                    <metamask-logo></metamask-logo>
                    <bsc-logo></bsc-logo>
                    <pancakeswap-logo></pancakeswap-logo>  
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('home-marquee', HomeMarquee);

{
  /* <div class="marquee__text-track">
              <p style="color: yellow;">JavaScript</p>
              <p>TypeScript</p>
              <p>CSS</p>
              <p>TailwindCSS</p>
              <p>Accessibility</p>
              <p>React</p>
              <p>Angular</p>
              <p style="color: green;" aria-hidden="true">JavaScript</p>
              <p aria-hidden="true">TypeScript</p>
              <p aria-hidden="true">CSS</p>
              <p aria-hidden="true">TailwindCSS</p>
              <p aria-hidden="true">Accessibility</p>
              <p aria-hidden="true">React</p>
              <p aria-hidden="true">Angular</p>
              <p style="color: red;">JavaScript</p>
              <p>TypeScript</p>
              <p>CSS</p>
              <p>TailwindCSS</p>
              <p>Accessibility</p>
              <p>React</p>
              <p>Angular</p>
              <p style="color: blue;" aria-hidden="true">JavaScript</p>
              <p aria-hidden="true">TypeScript</p>
              <p aria-hidden="true">CSS</p>
              <p aria-hidden="true">TailwindCSS</p>
              <p aria-hidden="true">Accessibility</p>
              <p aria-hidden="true">React</p>
              <p aria-hidden="true">Angular</p>
            </div> */
}
