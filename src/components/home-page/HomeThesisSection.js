import { thesisData } from '../../data/home-page/thesis.js';

class HomeThesisSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <section class="home-thesis">
            <div class="home-thesis__container page-container">
                <h2 class="home-thesis__title">Designed with the <span class="home-thesis__title--highlight">idea</span></h2>
                <div class="home-thesis__content">
                    <thesis-slider id="test-2"></thesis-slider>
                </div>
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

        // Pass custom options
        thesisSlider.setOptions({
          breakpoints: {
            450: { spaceBetween: 16, slidesPerView: 1 },
            650: { spaceBetween: 26, slidesPerView: 2 },
            800: { spaceBetween: 26, slidesPerView: 2 },
            950: { spaceBetween: 26, slidesPerView: 3 },
            1520: { spaceBetween: 30, slidesPerView: 4 },
          },
        });

        console.log('Data set on thesis-slider:', thesisSlider);
      } else {
        console.error('thesis-slider not found');
      }
    }, 0);
  }
}

customElements.define('homethesis-section', HomeThesisSection);
