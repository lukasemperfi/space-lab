class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.props = {
      productTitle: '',
      productDescription: '',
      productVideoMp4: '',
      productVideoWebm: '',
      productNumber: '',
      iconBackground: '',
      highlightConfig: null,
    };
  }

  // Method to set props from outside, similar to React class components
  setProps(newProps) {
    this.props = { ...this.props, ...newProps };
    this.render();
  }

  // Method to find words in title and add needed classes
  highlightTitleWords(title, highlightConfig) {
    let highlightedTitle = title;

    if (highlightConfig && highlightConfig.words && highlightConfig.class) {
      highlightConfig.words.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        highlightedTitle = highlightedTitle.replace(
          regex,
          `<span class="${highlightConfig.class}">${word}</span>`
        );
      });
    }

    return highlightedTitle;
  }

  render() {
    const {
      productTitle,
      productDescription,
      productVideoMp4,
      productVideoWebm,
      productNumber,
      iconBackground,
      highlightConfig,
    } = this.props;

    // Apply highlighting to the title
    const highlightedTitle = this.highlightTitleWords(
      productTitle,
      highlightConfig
    );

    this.innerHTML = `
      <div class="product-card product-card--${productNumber}">
        <div class="product-card__container">

        <div class="product-card__col1">
            <video 
                class="product-card__video" 
                muted 
                loop 
                playsinline
             
            >
                <source src="${productVideoMp4}" type="video/mp4">
                <source src="${productVideoWebm}" type="video/webm">
                Your browser does not support the video tag.
          </video>
        </div>
        <div class="product-card__col2">        
            <div class="product-card__content">
                <div class="product-card__content-top">
                    <h2 class="product-card__title">${highlightedTitle}</h2>
                    <p class="product-card__description">${productDescription}</p>
                </div>
                <div class="product-card__content-bottom">
                    <button class="product-card__button wavy-button wavy-button--accent-3">Find out more <longarrow-icon></longarrow-icon></button>
                    <div class="product-card__decoration"></div>
                    <div class="product-card__product-number">Product 0${productNumber}</div>
                </div>
            </div>
        </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    // Component starts with default props, must be set from outside
    this.render();
  }
}

customElements.define('product-card', ProductCard);

{
  /* <div class="product-card__decoration">
<img loading="lazy"  src="/assets/images/product/product-card-grant-blur.png" alt="product-card-grant">
</div> */
}
