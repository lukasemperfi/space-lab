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
            <a href="/">
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
    // const closeButton = this.querySelector('.header__mobile-close');

    burgerButton.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    // closeButton.addEventListener('click', () => {
    //   this.closeMobileMenu();
    // });

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
{
  /* <div class="header__mobile-top">
<div class="header__container">
 <div class="header__logo">
   <img loading="lazy"  src="../assets/icons/logo.svg" alt="Logo" aria-label="Logo">
 </div>
 <button class="header__mobile-close" aria-label="Close mobile menu">
   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M17.4853 0.514719C17.6728 0.702255 17.7782 0.956609 17.7782 1.22183C17.7782 1.48704 17.6728 1.7414 17.4853 1.92893L10.4142 9L17.4853 16.0711C17.6728 16.2586 17.7782 16.513 17.7782 16.7782C17.7782 17.0434 17.6728 17.2977 17.4853 17.4853C17.2977 17.6728 17.0434 17.7782 16.7782 17.7782C16.5129 17.7782 16.2586 17.6728 16.071 17.4853L8.99998 10.4142L1.92891 17.4853C1.74138 17.6728 1.48702 17.7782 1.22181 17.7782C0.956591 17.7782 0.702237 17.6728 0.5147 17.4853C0.327164 17.2977 0.221807 17.0434 0.221807 16.7782C0.221807 16.513 0.327164 16.2586 0.5147 16.0711L7.58577 9L0.5147 1.92893C0.327164 1.7414 0.221807 1.48704 0.221807 1.22183C0.221807 0.956609 0.327164 0.702255 0.5147 0.514719C0.702237 0.327182 0.956591 0.221825 1.22181 0.221825C1.48702 0.221825 1.74138 0.327182 1.92891 0.514719L8.99998 7.58579L16.071 0.514719C16.2586 0.327182 16.5129 0.221825 16.7782 0.221825C17.0434 0.221825 17.2977 0.327182 17.4853 0.514719Z" fill="#fff" />
   </svg>
 </button>
 </div>
</div> */
}
