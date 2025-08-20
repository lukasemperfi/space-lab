class NavButtons extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="nav-buttons">
        <a href="#" class="app-button app-button--secondary">Contact Us</a>
        <a href="#" class="app-button app-button--primary">Buy Token</a>
      </div>
    `;
  }
}

customElements.define('nav-buttons', NavButtons);

export default NavButtons;
