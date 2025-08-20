import { homeFAQData } from '../../data/home-page/faq.min.js';

class FAQSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="home-faq faq">
        <div class="faq__container">
          <div class="faq__col1">
            <h2 class="faq__title">Frequently Asked Questions</h2>
            <video 
                class="faq__video" 
                muted 
                loop 
                playsinline      
                autoplay
            >
                <source src="../../assets/video/faq.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
          </div> 
          <div class="faq__col2">
            <faq-accordion></faq-accordion> 
          </div>
        </div>
      </section>
    `;

    requestAnimationFrame(() => {
      this.passDataToAccordion();
    });
  }

  passDataToAccordion() {
    const accordion = this.querySelector('faq-accordion');
    if (accordion && typeof accordion.setQuestions === 'function') {
      accordion.setQuestions(homeFAQData);
    } else {
      console.error(
        'faq-accordion не найден или метод setQuestions недоступен'
      );
    }
  }
}

customElements.define('homefaq-section', FAQSection);
