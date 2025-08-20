import { productsData } from '../../data/home-page/products.js';

class ProductSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }
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
    this.innerHTML = `
            <section class="product-section">
            <div class="product-section__container page-container">
                <div class="product-section__list">
                <div class="product-card product-card--1">
        <div class="product-card__container">
    <img loading="lazy"  src="../../assets/images/product/decor-right-mobile-1.png" alt="${productsData[0].title}" class="product-card__decor-right-mobile-1">
    <img loading="lazy"  src="../../assets/images/product/decor-right-desktop-1.png" alt="${productsData[0].title}" class="product-card__decor-right-desktop-1">
        <div class="product-card__col1">
            <video 
                class="product-card__video" 
                autoplay 
                muted 
                loop 
                playsinline
             
            >
                <source src="${productsData[0].video.mp4}" type="video/mp4">
                <source src="${productsData[0].video.webm}" type="video/webm">
                Your browser does not support the video tag.
          </video>
        </div>
        <div class="product-card__col2">        
            <div class="product-card__content">
                <div class="product-card__content-top">
                    <h2 class="product-card__title">${this.highlightTitleWords(productsData[0].title, productsData[0].highlightConfig)}</h2>
                    <p class="product-card__description">${productsData[0].description}</p>
                </div>
                <div class="product-card__content-bottom">
                    <button class="product-card__button wavy-button wavy-button--accent-4">Find out more <longarrow-icon></longarrow-icon></button>
                    <div class="product-card__decoration-wrapper">
                      <div class="product-card__decoration"></div>
                      <div class="product-card__product-number">Product 0${productsData[0].id}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
<div class="product-card product-card--2">
        <div class="product-card__container">
    <img loading="lazy"  src="../../assets/images/product/decor-right-mobile-2.png" alt="${productsData[0].title}" class="product-card__decor-right-mobile-2">
    <img loading="lazy"  src="../../assets/images/product/decor-right-desktop-2.png" alt="${productsData[0].title}" class="product-card__decor-right-desktop-2">
        <div class="product-card__col1">
            <video 
                class="product-card__video" 
                autoplay 
                muted 
                loop 
                playsinline
             
            >
                <source src="${productsData[1].video.mp4}" type="video/mp4">
                <source src="${productsData[1].video.webm}" type="video/webm">
                Your browser does not support the video tag.
          </video>
        </div>
        <div class="product-card__col2">        
            <div class="product-card__content">
                <div class="product-card__content-top">
                    <h2 class="product-card__title">${this.highlightTitleWords(productsData[1].title, productsData[1].highlightConfig)}</h2>
                    <p class="product-card__description">${productsData[1].description}</p>
                </div>
                <div class="product-card__content-bottom">
                    <button class="product-card__button wavy-button wavy-button--accent-2">Find out more <longarrow-icon></longarrow-icon></button>
                    <div class="product-card__decoration-wrapper">
                      <div class="product-card__decoration"></div>
                      <div class="product-card__product-number">Product 0${productsData[1].id}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>

      <div class="product-card product-card--3">
        <div class="product-card__container">
    <img loading="lazy"  src="../../assets/images/product/decor-right-mobile-3.png" alt="${productsData[0].title}" class="product-card__decor-right-mobile-3">
    <img loading="lazy"  src="../../assets/images/product/decor-right-desktop-3.png" alt="${productsData[0].title}" class="product-card__decor-right-desktop-3">
        <div class="product-card__col1">
            <video 
                class="product-card__video" 
                autoplay 
                muted 
                loop 
                playsinline
             
            >
                <source src="${productsData[2].video.mp4}" type="video/mp4">
                <source src="${productsData[2].video.webm}" type="video/webm">
                Your browser does not support the video tag.
          </video>
        </div>
        <div class="product-card__col2">        
            <div class="product-card__content">
                <div class="product-card__content-top">
                    <h2 class="product-card__title">${this.highlightTitleWords(productsData[2].title, productsData[2].highlightConfig)}</h2>
                    <p class="product-card__description">${productsData[2].description}</p>
                </div>
                <div class="product-card__content-bottom">
                    <button class="product-card__button wavy-button wavy-button--accent-3">Find out more <longarrow-icon></longarrow-icon></button>
                    <div class="product-card__decoration-wrapper">
                      <div class="product-card__decoration"></div>
                      <div class="product-card__product-number">Product 0${productsData[2].id}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
      </div>
                </div>
            </section>
        `;
  }
}

customElements.define('product-section', ProductSection);

// <svg
//   width="647"
//   height="965"
//   viewBox="0 0 647 965"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <g filter="url(#filter0_f_5431_2901)">
//     <path
//       d="M460.462 777.78C434.768 822.282 323.264 645.137 278.756 619.44C234.248 593.744 160.507 663.937 186.2 619.435C196.045 602.383 244.315 543.581 268.526 472.799C307.499 358.857 352.618 165.81 380.072 181.66C424.58 207.357 486.155 733.278 460.462 777.78Z"
//       fill="url(#paint0_linear_5431_2901)"
//     />
//   </g>
//   <defs>
//     <filter
//       id="filter0_f_5431_2901"
//       x="0.901545"
//       y="0.741699"
//       width="645.62"
//       height="964.175"
//       filterUnits="userSpaceOnUse"
//       color-interpolation-filters="sRGB"
//     >
//       <feFlood flood-opacity="0" result="BackgroundImageFix" />
//       <feBlend
//         mode="normal"
//         in="SourceGraphic"
//         in2="BackgroundImageFix"
//         result="shape"
//       />
//       <feGaussianBlur
//         stdDeviation="90"
//         result="effect1_foregroundBlur_5431_2901"
//       />
//     </filter>
//     <linearGradient
//       id="paint0_linear_5431_2901"
//       x1="225.923"
//       y1="532.622"
//       x2="316.16"
//       y2="770.797"
//       gradientUnits="userSpaceOnUse"
//     >
//       <stop stop-color="#B2FF0F" />
//       <stop offset="1" stop-color="#76FFEF" />
//     </linearGradient>
//   </defs>
// </svg>;
