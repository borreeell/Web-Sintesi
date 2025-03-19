class CustomMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --primary-color: #2c3639;
          --hover-color: #3f4e4f;
          --background-color: #ffff;
          --menu-height: 70px;
        }

        .navbar {
          background: var(--background-color);
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          height: var(--menu-height);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          height: 40px;
          z-index: 2;
        }

        .logo img {
          height: 100%;
          width: auto;
        }

        .menu-items {
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .menu-items a {
          color: var(--primary-color);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .menu-items a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 1rem;
          right: 1rem;
          height: 2px;
          background-color: var(--hover-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .menu-items a:hover::after {
          transform: scaleX(1);
        }

        .hamburger {
          display: none;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
            width: 30px;
            height: 20px;
            position: relative;
            cursor: pointer;
            z-index: 2;
          }

          .hamburger span {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: var(--primary-color);
            border-radius: 2px;
            transition: all 0.3s ease;
          }

          .hamburger span:nth-child(1) { top: 0; }
          .hamburger span:nth-child(2) { top: 9px; }
          .hamburger span:nth-child(3) { top: 18px; }

          .menu-open .hamburger span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
          }

          .menu-open .hamburger span:nth-child(2) {
            opacity: 0;
          }

          .menu-open .hamburger span:nth-child(3) {
            transform: rotate(-45deg) translate(8px, -8px);
          }

          .menu-items {
            position: fixed;
            top: var(--menu-height);
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--background-color);
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 2rem;
            gap: 1.5rem;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
          }

          .menu-open .menu-items {
            transform: translateX(0);
          }

          .menu-items a {
            font-size: 1.2rem;
            padding: 1rem;
          }

          .menu-items a::after {
            display: none;
          }
        }
      </style>

      <nav class="navbar">
        <div class="nav-container">
          <div class="logo">
            <img src="../images/logo.png" alt="FastFact Logo">
          </div>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul class="menu-items">
            <li><a href="../index.html">Inici</a></li>
            <li><a href="../pages/quiSoc.html">Qui soc?</a></li>
            <li><a href="../pages/proces.html">Procés</a></li>
            <li><a href="../pages/fonaments.html">Fonaments</a></li>
            <li><a href="../pages/liniesFutures.html">Línies Futures</a></li>
          </ul>
        </div>
      </nav>

      <script src="../main.js"></script>
    `;
  }

  addEventListeners() {
    const hamburger = this.shadowRoot.querySelector('.hamburger');
    const navbar = this.shadowRoot.querySelector('.navbar');

    hamburger?.addEventListener('click', () => {
      navbar.classList.toggle('menu-open');
    });

    // Tancar el menú quan es fa clic a un enllaç
    const menuLinks = this.shadowRoot.querySelectorAll('.menu-items a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('menu-open');
      });
    });
  }
}

customElements.define("custom-menu", CustomMenu);