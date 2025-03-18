class CustomMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          max-width: 1050px;
          width: 90%;
          margin: auto;
        }

        .navbar {
          width: 100%;
          box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 62px;
        }

        .navbar .menu-items {
          display: flex;
        }

        .navbar .nav-container li {
          list-style: none;
        }

        .navbar .nav-container a {
          text-decoration: none;
          color: #0e2431;
          font-weight: 500;
          font-size: 1.2rem;
          padding: 0.7rem;
        }

        .navbar .nav-container a:hover{
            font-weight: bolder;
        }

        .nav-container {
          display: block;
          position: relative;
          height: 60px;
        }

        .nav-container .checkbox {
          position: absolute;
          display: block;
          height: 32px;
          width: 32px;
          top: 20px;
          left: 20px;
          z-index: 5;
          opacity: 0;
          cursor: pointer;
        }

        .nav-container .hamburger-lines {
          display: block;
          height: 26px;
          width: 32px;
          position: absolute;
          top: 17px;
          left: 20px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .nav-container .hamburger-lines .line {
          display: block;
          height: 4px;
          width: 100%;
          border-radius: 10px;
          background: #0e2431;
        }

        .nav-container .hamburger-lines .line1 {
          transform-origin: 0% 0%;
          transition: transform 0.4s ease-in-out;
        }

        .nav-container .hamburger-lines .line2 {
          transition: transform 0.2s ease-in-out;
        }

        .nav-container .hamburger-lines .line3 {
          transform-origin: 0% 100%;
          transition: transform 0.4s ease-in-out;
        }

        .navbar .menu-items {
          padding-top: 120px;
          box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
          height: 100vh;
          width: 100%;
          transform: translate(-150%);
          display: flex;
          flex-direction: column;
          margin-left: -40px;
          padding-left: 50px;
          transition: transform 0.5s ease-in-out;
          text-align: center;
        }

        .navbar .menu-items li {
          margin-bottom: 1.2rem;
          font-size: 1.5rem;
          font-weight: 500;
        }

        .logo {
          position: absolute;
          top: 5px;
          right: 15px;
          font-size: 1.2rem;
          color: #0e2431;
        }

        .nav-container input[type="checkbox"]:checked ~ .menu-items {
          transform: translateX(0);
        }

        .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
          transform: rotate(45deg);
        }

        .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
          transform: scaleY(0);
        }

        .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
          transform: rotate(-45deg);
        }

        .nav-container input[type="checkbox"]:checked ~ .logo{
          display: none;
        }

        @media (max-width: 768px) {
          .nav-container {
            display: block;
            position: relative;
            height: 60px;
          }

          .nav-container .checkbox {
            position: absolute;
            display: block;
            height: 32px;
            width: 32px;
            top: 20px;
            left: 20px;
            z-index: 5;
            opacity: 0;
            cursor: pointer;
          }

          .nav-container .hamburger-lines {
            display: flex;
            height: 26px;
            width: 32px;
            position: absolute;
            top: 17px;
            left: 20px;
            z-index: 2;
            flex-direction: column;
            justify-content: space-between;
          }

          .nav-container .hamburger-lines .line {
            display: block;
            height: 4px;
            width: 100%;
            border-radius: 10px;
            background: #0e2431;
            transition: transform 0.4s ease-in-out;
          }

          .navbar .menu-items {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            height: 100vh;
            background: white;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            transform: translateX(-100%);
            transition: transform 0.5s ease-in-out;
          }

          .navbar .menu-items li {
            margin-bottom: 1.5rem;
          }

          .nav-container input[type="checkbox"]:checked ~ .menu-items {
            transform: translateX(0);
          }

          .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
            opacity: 0;
          }

          .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
            transform: rotate(-45deg) translate(5px, -5px);
          }
        }
      </style>
      <nav>
        <div class="navbar">
          <div class="container nav-container">
            <input class="checkbox" type="checkbox"/>
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <div class="logo">
              <img src="./images/logo.png">
            </div>
            <div class="menu-items">
              <li><a href="#">Inici</a></li>
              <li><a href="pages/quiSoc.html">Qui soc?</a></li>
              <li><a href="pages/proces.html">Procés</a></li>
              <li><a href="pages/fonaments.html">Fonaments</a></li>
              <li><a href="pages/liniesFutures.html">Linies Futures</a></li>
            </div>
          </div>
        </div>
      </nav>
    `;

    this.addEventListeners();
  }

  addEventListeners() {
    const hamburger = this.shadowRoot.querySelector("#hamburger");
    const menu = this.shadowRoot.querySelector("#menu");

    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
}

customElements.define("custom-menu", CustomMenu);