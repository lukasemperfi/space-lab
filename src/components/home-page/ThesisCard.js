class ThesisCard extends HTMLElement {
  constructor() {
    super();
    this._props = {};
  }

  set props(value) {
    this._props = value;
    this.render();
  }

  get props() {
    return this._props;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const {
      title = '',
      description = '',
      logo = '',
      buttonText = '',
    } = this._props || {};

    this.innerHTML = `
      <div class="thesis__card">
        <div class="thesis__card-logo">
          ${logo}
        </div>
        <div class="thesis__card-title">${title}</div>
        <div class="thesis__card-description">
          ${description}
        </div>
        <div class="thesis__card-actions">
          <button class="thesis__card-button">${buttonText}</button>
        </div>
      </div>
    `;
  }
}

customElements.define('thesis-card', ThesisCard);
