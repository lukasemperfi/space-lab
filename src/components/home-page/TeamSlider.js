class TeamSlider extends HTMLElement {
  constructor() {
    super();
    this.data = [];
    this.sliderOptions = this.getDefaultSliderOptions();
  }

  static get observedAttributes() {
    return ['data', 'options'];
  }

  render() {
    this.innerHTML = `
    <div class="wrapper">
<div class="swiper team-slider">
  <div class="swiper-wrapper">
    ${this.data
      .map(
        item => `
      <div class="swiper-slide">
        <team-card 
          name="${item.name}" 
          position="${item.position}" 
          image="${item.image}"
          linkedin="${item.linkedin}"
          instagram="${item.instagram}"
          telegram="${item.telegram}"
          twitter="${item.twitter}">
        </team-card>
      </div>
    `
      )
      .join('')}
  </div>
    
</div>
<div class="swiper-button-next">
<svg width="26" height="42" viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 21L1 2L1 40L25 21Z" fill="url(#paint0_linear_2_962)" stroke="white" />
  <defs>
    <linearGradient id="paint0_linear_2_962" x1="1.00001" y1="33.7571" x2="13.3993" y2="1.36008" gradientUnits="userSpaceOnUse">
      <stop stop-color="#54D6FF" />
      <stop offset="0.546875" stop-color="#C275FF" />
      <stop offset="1" stop-color="#F36AFF" />
    </linearGradient>
  </defs>
</svg>
</div>
    <div class="swiper-button-prev">
    <svg width="26" height="42" viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 21L25 2L25 40L1 21Z" fill="url(#paint0_linear_2_961)" stroke="white" />
  <defs>
    <linearGradient id="paint0_linear_2_961" x1="25" y1="33.7571" x2="12.6007" y2="1.36008" gradientUnits="userSpaceOnUse">
      <stop stop-color="#54D6FF" />
      <stop offset="0.546875" stop-color="#C275FF" />
      <stop offset="1" stop-color="#F36AFF" />
    </linearGradient>
  </defs>
</svg>
    </div>
     <nav-tight-button direction="right"></nav-tight-button>
</div>
      `;

    // Initialize Swiper after the component is connected
    this.initSwiper();
  }

  getDefaultSliderOptions() {
    return {
      slidesPerView: 2,
      // autoHeight: true,
      spaceBetween: 10,
      loop: true,

      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    };
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data' && oldValue !== newValue) {
      this.data = JSON.parse(newValue || '[]');
      this.render();
    } else if (name === 'options' && oldValue !== newValue) {
      this.updateSliderOptions();
      if (this.swiperInstance) {
        this.destroySwiper();
        this.initSwiper();
      }
    }
  }

  updateSliderOptions() {
    const optionsAttr = this.getAttribute('options');
    if (optionsAttr) {
      try {
        const customOptions = JSON.parse(optionsAttr);
        this.sliderOptions = {
          ...this.getDefaultSliderOptions(),
          ...customOptions,
        };
      } catch (e) {
        console.warn('Invalid options attribute, using defaults');
        this.sliderOptions = this.getDefaultSliderOptions();
      }
    } else {
      this.sliderOptions = this.getDefaultSliderOptions();
    }
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

  connectedCallback() {
    this.updateSliderOptions();
    this.render();
  }

  initSwiper() {
    // Wait for the next tick to ensure DOM is ready
    setTimeout(() => {
      if (typeof Swiper !== 'undefined') {
        this.swiperInstance = new Swiper('.team-slider', this.sliderOptions);
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

customElements.define('team-slider', TeamSlider);
