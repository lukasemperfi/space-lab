class AppButton extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const childrenContent = this.innerHTML;
    const variant = this.getAttribute('variant') || 'primary';
    const href = this.getAttribute('href');
    const customClass = this.getAttribute('class') || '';
    const variantClass =
      variant === 'secondary' ? 'app-button--secondary' : 'app-button--primary';
    const allClasses = `app-button ${variantClass} ${customClass}`.trim();

    if (href) {
      this.innerHTML = `
        <a href="${href}" class="${allClasses}">
          ${childrenContent}
        </a>
      `;
    } else {
      this.innerHTML = `
        <button class="${allClasses}">
          ${childrenContent}
        </button>
      `;
    }
  }
}

customElements.define('app-button', AppButton);

export default AppButton;
