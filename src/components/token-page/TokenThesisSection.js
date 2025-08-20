import { thesisData } from '../../data/token-page/token-thesis.min.js';

class TokenThesisSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <section class="thesis-section">
            <div class="thesis-section__container page-container">
                <thesis-slider id="token-slider"></thesis-slider>
            </div>
        </section>
    `;

    this.setThesisSliderData();
  }

  setThesisSliderData() {
    setTimeout(() => {
      const thesisSlider = this.querySelector('thesis-slider');
      if (thesisSlider) {
        thesisSlider.setData(thesisData);

        thesisSlider.setOptions({
          slidesPerView: 1.1,
          spaceBetween: 30,
          breakpoints: {
            400: { slidesPerView: 1.5 },
            500: { slidesPerView: 1.8, spaceBetween: 20 },
            600: { slidesPerView: 2, spaceBetween: 15 },
            800: { slidesPerView: 3, spaceBetween: 15 },
            1520: { slidesPerView: 3, spaceBetween: 40 },
          },
        });
      } else {
        console.error('thesis-slider not found');
      }
    }, 0);
  }
}

customElements.define('tokenthesis-section', TokenThesisSection);
