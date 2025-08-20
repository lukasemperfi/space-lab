class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.isMobileMenuOpen = false;
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.innerHTML = `
      <header class="header">
        <div class="header__container">
          <div class="header__logo">
            <a href="/space-lab/">
              <img loading="lazy"  src="../assets/icons/logo.svg" alt="Logo" aria-label="Logo">
            </a>
          </div>
          <button class="header__burger-button" aria-label="Toggle mobile menu">
            <burger-icon></burger-icon>
          </button>
          <div class="header__navigation">
            <nav-menu link-class="header__link"></nav-menu>
            <nav-buttons></nav-buttons>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div class="header__mobile-menu" aria-hidden="true">
            <div class="header__mobile-navigation">
              <nav-menu link-class="header__mobile-link" list-class="header__mobile-list"></nav-menu>
              <nav-buttons></nav-buttons>
            </div>
              
        </div>
      </header>
    `;
  }

  attachEventListeners() {
    const burgerButton = this.querySelector('.header__burger-button');
    const mobileMenu = this.querySelector('.header__mobile-menu');

    burgerButton.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', e => {
      if (!this.contains(e.target) && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (this.isMobileMenuOpen && window.innerWidth >= 1100) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.isMobileMenuOpen = true;
    const mobileMenu = this.querySelector('.header__mobile-menu');
    const burgerButton = this.querySelector('.header__burger-button');

    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenu.classList.add('header__mobile-menu--open');
    burgerButton.classList.add('header__burger-button--active');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    const mobileMenu = this.querySelector('.header__mobile-menu');
    const burgerButton = this.querySelector('.header__burger-button');

    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.classList.remove('header__mobile-menu--open');
    burgerButton.classList.remove('header__burger-button--active');

    // Restore body scroll
    document.body.style.overflow = '';
  }
}

customElements.define('app-header', AppHeader);

export default AppHeader;
