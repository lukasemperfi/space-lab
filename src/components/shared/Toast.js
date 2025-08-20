class Toast extends HTMLElement {
  constructor() {
    super();
    this.visible = false;
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="toast ${this.visible ? 'toast--visible' : ''}" id="toast">
        <div class="toast__content">
          <span class="toast__message"></span>
          <button class="toast__close" id="toast-close">&times;</button>
        </div>
      </div>
    `;

    this.messageElement = this.querySelector('.toast__message');
    this.closeButton = this.querySelector('#toast-close');
    this.toastElement = this.querySelector('#toast');

    this.closeButton.addEventListener('click', () => this.hide());
  }

  show(message, type = 'success') {
    this.messageElement.textContent = message;
    this.toastElement.className = `toast toast--visible toast--${type}`;
    this.visible = true;

    // Автоматически скрыть через 5 секунд
    setTimeout(() => {
      this.hide();
    }, 5000);
  }

  hide() {
    this.toastElement.className = 'toast';
    this.visible = false;
  }
}

customElements.define('toast-notification', Toast);
