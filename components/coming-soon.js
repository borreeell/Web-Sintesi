class ComingSoon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .container-coming-soon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .coming-soon {
                    text-align: center;
                }

                .coming-soon h1 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                }

                .coming-soon p {
                    font-size: 1rem;
                }
            </style>
            <div class="container-coming-soon">
                <div class="coming-soon">
                    <h1>FastFact</h1>
                    <p>Estem treballant en la nostra web. Torni en uns dies.</p>
                </div>
            </div>
        `;
    }
}

customElements.define("coming-soon", ComingSoon);