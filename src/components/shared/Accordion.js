class Accordion extends HTMLElement {
  constructor() {
    super();
    this._questions = [];
    this.render();
    this.attachEventListeners();
    this.initializeActiveItem();
    this.attachResizeListener();
  }

  // Метод для установки вопросов
  setQuestions(questions) {
    this._questions = questions || [];
    this.render();
    this.attachEventListeners();
    this.initializeActiveItem();
  }

  render() {
    if (!this._questions || this._questions.length === 0) {
      this.innerHTML =
        '<div class="accordion"><p>Нет вопросов для отображения</p></div>';
      return;
    }

    const questionsHTML = this._questions
      .map(
        (question, index) => `
      <div class="accordion__item ${question.active ? 'active' : ''}">
        <button class="accordion__header">${question.title} <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 0V21M0 10H21" stroke="url(#paint0_linear_2_549)" stroke-width="3" />
  <defs>
    <linearGradient id="paint0_linear_2_549" x1="3.45" y1="8.51378e-06" x2="22.843" y2="4.68775" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FC84FF" />
      <stop offset="1" stop-color="#54D1FA" />
    </linearGradient>
  </defs>
</svg></button>
        <div class="accordion__content">
          ${question.content}
        </div>
      </div>
    `
      )
      .join('');

    this.innerHTML = `
      <div class="accordion">
        ${questionsHTML}
      </div>
    `;
  }

  initializeActiveItem() {
    // Find the item with 'active' class and set its content height
    const activeItem = this.querySelector('.accordion__item.active');
    if (activeItem) {
      const content = activeItem.querySelector('.accordion__content');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }

  attachResizeListener() {
    let resizeTimeout;

    // Debounced resize handler to avoid excessive recalculations
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.updateActiveItemHeight();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Store the listener for cleanup
    this._resizeListener = handleResize;
  }

  updateActiveItemHeight() {
    // Update height for all active items when window resizes
    const activeItems = this.querySelectorAll('.accordion__item.active');
    activeItems.forEach(item => {
      const content = item.querySelector('.accordion__content');
      if (content.style.maxHeight !== '0px') {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }

  attachEventListeners() {
    const headers = this.querySelectorAll('.accordion__header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.accordion__content');

        // Закрыть все остальные элементы
        this.querySelectorAll('.accordion__item').forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
            i.querySelector('.accordion__content').style.maxHeight = 0;
          }
        });

        // Переключить текущий элемент
        if (item.classList.contains('active')) {
          item.classList.remove('active');
          content.style.maxHeight = 0;
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }
}

customElements.define('faq-accordion', Accordion);

// // Check for default-active attribute first, then fall back to active class
// const defaultActiveIndex = this.getAttribute('default-active');
// let activeItem;

// if (defaultActiveIndex !== null) {
//   // Use the index from the attribute
//   const items = this.querySelectorAll('.accordion__item');
//   const index = parseInt(defaultActiveIndex);
//   if (index >= 0 && index < items.length) {
//     activeItem = items[index];
//     activeItem.classList.add('active');
//   }
// } else {
//   // Fall back to existing active class
//   activeItem = this.querySelector('.accordion__item.active');
// }
