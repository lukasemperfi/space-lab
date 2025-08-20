class NavMenu extends HTMLElement {
  constructor() {
    super();
    this.render();
    this.attachEventListeners();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    if (path === '/space-lab/') return 'home';
    if (path === '/space-lab/marketplace-page.html') return 'marketplace';
    if (path === '/space-lab/token-page.html') return 'token';
    if (path === '/space-lab/fund-page.html') return 'fund';
    return 'home';
  }

  render() {
    const linkClass = this.getAttribute('link-class');
    const listClass = this.getAttribute('list-class');
    const currentPage = this.getCurrentPage();

    this.innerHTML = `
      <nav class="nav-menu">
        <ul class="nav-menu__list ${listClass}">
          <li class="nav-menu__item">
            <a href="/space-lab/" class="nav-menu__link ${linkClass} ${currentPage === 'home' ? 'nav-menu__link--active' : ''}" ${currentPage === 'home' ? 'onclick="return false;"' : ''}>Home</a>
          </li>
          <li class="nav-menu__item">
            <a href="/space-lab/marketplace-page.html" class="nav-menu__link ${linkClass} ${currentPage === 'marketplace' ? 'nav-menu__link--active' : ''}" ${currentPage === 'marketplace' ? 'onclick="return false;"' : ''}>Marketplace</a>
          </li>
          <li class="nav-menu__item">
            <a href="/space-lab/token-page.html" class="nav-menu__link ${linkClass} ${currentPage === 'token' ? 'nav-menu__link--active' : ''}" ${currentPage === 'token' ? 'onclick="return false;"' : ''}>Token</a>
          </li>
          <li class="nav-menu__item">
            <a href="/space-lab/fund-page.html" class="nav-menu__link ${linkClass} ${currentPage === 'fund' ? 'nav-menu__link--active' : ''}" ${currentPage === 'fund' ? 'onclick="return false;"' : ''}>Fund</a>
          </li>
          <li class="nav-menu__separator"></li>
          <li class="nav-menu__item nav-menu__item--language">
            <div class="nav-menu__language-dropdown">
              <button class="nav-menu__language-btn" aria-expanded="false" aria-haspopup="true">
                <span class="nav-menu__language-text nav-menu__link ${linkClass}">EN</span>
                <svg class="nav-menu__language-arrow" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.5L6.73913 6.5L13 0.5" stroke="#959595" />
                </svg>           
              </button>
              <ul class="nav-menu__language-options" aria-hidden="true">
                <li><button type="button" class="nav-menu__language-option" data-value="en">EN</button></li>
                <li><button type="button" class="nav-menu__language-option" data-value="ua">UA</button></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    `;
  }

  attachEventListeners() {
    const languageBtn = this.querySelector('.nav-menu__language-btn');
    const languageOptions = this.querySelector('.nav-menu__language-options');
    const optionButtons = this.querySelectorAll('.nav-menu__language-option');
    const languageText = this.querySelector('.nav-menu__language-text');

    if (languageBtn && languageOptions) {
      // Toggle dropdown
      languageBtn.addEventListener('click', () => {
        const isExpanded = languageBtn.getAttribute('aria-expanded') === 'true';
        languageBtn.setAttribute('aria-expanded', !isExpanded);
        languageOptions.setAttribute('aria-hidden', isExpanded);

        if (isExpanded) {
          languageOptions.classList.remove('nav-menu__language-options--open');
        } else {
          languageOptions.classList.add('nav-menu__language-options--open');
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', event => {
        if (!this.contains(event.target)) {
          languageBtn.setAttribute('aria-expanded', 'false');
          languageOptions.setAttribute('aria-hidden', 'true');
          languageOptions.classList.remove('nav-menu__language-options--open');
        }
      });

      // Handle language selection
      optionButtons.forEach(option => {
        option.addEventListener('click', event => {
          event.stopPropagation();
          const selectedValue = option.getAttribute('data-value');
          const selectedText = option.textContent;

          languageText.textContent = selectedText;
          languageBtn.setAttribute('aria-expanded', 'false');
          languageOptions.setAttribute('aria-hidden', 'true');
          languageOptions.classList.remove('nav-menu__language-options--open');

          // Dispatch custom event for language change
          this.dispatchEvent(
            new CustomEvent('languageChange', {
              detail: { value: selectedValue, text: selectedText },
              bubbles: true,
            })
          );
        });
      });
    }
  }
}

customElements.define('nav-menu', NavMenu);

export default NavMenu;
