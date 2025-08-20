class ThesisSlider extends HTMLElement {
  constructor() {
    super();
    this.data = [];
    this.sliderOptions = this.getDefaultSliderOptions();
    this.sliderId = null;
  }

  setData(newData) {
    this.data = Array.isArray(newData) ? newData : [];
    this.render();
  }

  setOptions(options) {
    this.sliderOptions = { ...this.getDefaultSliderOptions(), ...options };
    if (this.swiperInstance) {
      this.destroySwiper();
      this.initSwiper();
    }
  }

  getDefaultSliderOptions() {
    return {
      slidesPerView: 1.25,
      spaceBetween: 51,
      loop: true,
      breakpoints: {
        450: { spaceBetween: 16, slidesPerView: 2 },
        650: { spaceBetween: 26, slidesPerView: 3 },
        800: { spaceBetween: 40, slidesPerView: 4 },
      },
    };
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // Get ID from attributes and store it as class property
    this.sliderId = this.getAttribute('id');

    this.innerHTML = `
      <div class="swiper thesis-slider-${this.sliderId}">
        <div class="swiper-wrapper"></div>
      </div>
    `;

    const wrapper = this.querySelector('.swiper-wrapper');

    this.data.forEach(item => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      const card = document.createElement('thesis-card');
      card.props = item;
      slide.appendChild(card);

      wrapper.appendChild(slide);
    });

    this.initSwiper();
  }

  initSwiper() {
    setTimeout(() => {
      if (typeof Swiper !== 'undefined') {
        this.swiperInstance = new Swiper(
          `.thesis-slider-${this.sliderId}`,
          this.sliderOptions
        );
      } else {
        console.error('Swiper is not loaded');
      }
    }, 0);
  }

  destroySwiper() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }

  disconnectedCallback() {
    this.destroySwiper();
  }
}

customElements.define('thesis-slider', ThesisSlider);
