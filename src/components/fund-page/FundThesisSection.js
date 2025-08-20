import { thesisData } from '../../data/fund-page/fund-thesis.min.js';

class FundThesisSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <section class="fund-thesis-section thesis-section">
            <div class="thesis-section__container page-container">
                <thesis-slider id="token-slider"></thesis-slider>
            </div>
        </section>
    `;

    // Set the data on the thesis-slider
    this.setThesisSliderData();
  }

  setThesisSliderData() {
    // Wait for the next tick to ensure the DOM is ready
    setTimeout(() => {
      const thesisSlider = this.querySelector('thesis-slider');
      if (thesisSlider) {
        thesisSlider.setData(thesisData);

        // Set custom slider options for the token page
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

        console.log('Data and options set on thesis-slider:', thesisSlider);
      } else {
        console.error('thesis-slider not found');
      }
    }, 0);
  }
}

customElements.define('fundthesis-section', FundThesisSection);
