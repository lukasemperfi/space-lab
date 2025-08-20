class LongArrowIcon extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <svg
  width="12"
  height="15"
  viewBox="0 0 12 15"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.04678 2.21852L5.08352 2.75805L7.38356 2.51224L9.6836 2.26638L4.90223 7.96459L0.120875 13.6628L0.536507 14.0115L0.952139 14.3603L5.73349 8.66211L10.5149 2.96389L10.6722 5.27193L10.8295 7.57992L11.3672 7.52169L11.905 7.46348L11.6844 4.22611L11.4638 0.988746L8.23696 1.33387L5.01007 1.679L5.04678 2.21852Z"
    fill="white"
  />
</svg>
    `;
  }
}

customElements.define('longarrow-icon', LongArrowIcon);
