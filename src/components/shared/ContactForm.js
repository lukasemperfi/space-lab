class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
    this.errors = {};
    this.isValid = false;
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="contact-form-container">
        <form class="contact-form" id="contact-form">
          <div class="contact-form__field">
            <input 
              class="contact-form__input" 
              type="text" 
              name="name" 
              id="name"
              placeholder="Name" 
              autocomplete="off"
            />
            <div class="contact-form__error" id="name-error"></div>
          </div>
          
          <div class="contact-form__field">
            <input 
              class="contact-form__input" 
              type="email"  
              name="email" 
              id="email"
              placeholder="Mail" 
              autocomplete="off"
            />
            <div class="contact-form__error" id="email-error"></div>
          </div>
          
          <div class="contact-form__field">
            <input 
              class="contact-form__input" 
              type="text" 
              name="message" 
              id="message"
              placeholder="Your message" 
              autocomplete="off"
            />
            <div class="contact-form__error" id="message-error"></div>
          </div>
          
                    <button 
            class="contact-form__button wavy-button--reverse" 
            type="submit"
            id="submit-btn"
            disabled
          >
            Send
          </button>
        </form>
      </div>
    `;

    this.initializeForm();
  }

  initializeForm() {
    this.form = this.querySelector('#contact-form');
    this.submitBtn = this.querySelector('#submit-btn');
    this.inputs = this.querySelectorAll('.contact-form__input');
    this.errorElements = this.querySelectorAll('.contact-form__error');

    // Добавляем обработчики событий
    this.form.addEventListener('submit', e => this.handleSubmit(e));
    this.inputs.forEach(input => {
      input.addEventListener('input', () => this.handleInputChange(input));
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('focus', () => this.clearFieldError(input));
    });

    // Инициализируем валидацию
    this.updateSubmitButton();
  }

  handleInputChange(input) {
    const fieldName = input.name;
    this.formData[fieldName] = input.value.trim();
    this.validateField(input);
    this.updateSubmitButton();
  }

  validateField(input) {
    const fieldName = input.name;
    const value = input.value.trim();
    const errorElement = this.querySelector(`#${fieldName}-error`);

    let error = '';

    switch (fieldName) {
      case 'name':
        if (!value) {
          error = 'Name is required';
        } else if (value.length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (value.length > 50) {
          error = 'Name must be less than 50 characters';
        }
        break;

      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!this.isValidEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'message':
        if (!value) {
          error = 'Message is required';
        } else if (value.length < 10) {
          error = 'Message must be at least 10 characters';
        } else if (value.length > 500) {
          error = 'Message must be less than 500 characters';
        }
        break;
    }

    if (error) {
      this.errors[fieldName] = error;
      this.showFieldError(input, error);
    } else {
      delete this.errors[fieldName];
      this.clearFieldError(input);
    }

    return !error;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showFieldError(input, error) {
    const fieldName = input.name;
    const errorElement = this.querySelector(`#${fieldName}-error`);

    if (errorElement) {
      errorElement.textContent = error;
      errorElement.style.display = 'block';
    }

    input.classList.add('contact-form__input--error');
  }

  clearFieldError(input) {
    const fieldName = input.name;
    const errorElement = this.querySelector(`#${fieldName}-error`);

    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }

    input.classList.remove('contact-form__input--error');
  }

  updateSubmitButton() {
    const hasErrors = Object.keys(this.errors).length > 0;
    const hasAllFields = Object.values(this.formData).every(
      value => value.trim() !== ''
    );

    this.isValid = !hasErrors && hasAllFields;
    this.submitBtn.disabled = !this.isValid;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.isValid) {
      return;
    }

    // Показываем тост об успешной отправке
    this.showSuccessToast();

    // Очищаем форму
    this.resetForm();
  }

  showSuccessToast() {
    // Ищем существующий тост или создаем новый
    let toast = document.querySelector('toast-notification');
    if (!toast) {
      toast = document.createElement('toast-notification');
      document.body.appendChild(toast);
    }

    toast.show(
      'Form submitted successfully! Thank you for your message.',
      'success'
    );
  }

  resetForm() {
    this.form.reset();
    this.formData = { name: '', email: '', message: '' };
    this.errors = {};

    // Очищаем все ошибки
    this.errorElements.forEach(errorEl => {
      errorEl.textContent = '';
      errorEl.style.display = 'none';
    });

    // Убираем классы ошибок с инпутов
    this.inputs.forEach(input => {
      input.classList.remove('contact-form__input--error');
    });

    this.updateSubmitButton();
  }
}

customElements.define('contact-form', ContactForm);
