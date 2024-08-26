class BannerCompose extends HTMLElement {
    //Atributos
    static get observedAttributes() {
        return ['minisrc','mainsrc','pretitle', 'title', 'description', 'buttontext'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
            #main-component{
                width: 100%;
                display: flex;
                height: 65vh;
            }

            #sub-main-component {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between; 
            }
            #mini-logo {
                width: 101px;
                height: 140px;
                background-image: url('${this.minisrc}');
                background-size: cover;
            }
            #banner-img-container{
                width: 50%;
                background-image: url('${this.mainsrc}');
                background-size: cover;
            }
            #left-container{
                padding-left: 100px;
                padding-top: 1rem;
                padding-bottom: 2rem;
                width: 50%;
                display: flex;
                gap: 10px;
                flex-direction: column;
                justify-content: center;
                align-items: left;
                color: white;
                background-color: #151515;
            }
            #left-container h1{
                font-size: 2.5rem;
            }
            #marvel-button{
                width: 200px;
                height: 50px;
                background-color: #202020;
                color: white;
                border: white 2px solid;
                cursor: pointer;
            }
            </style>

                <section id="main-component">
                    <div id="sub-main-component">
                        <div id="left-container">
                            <div id="mini-logo"></div>
                            <h2>${this.pretitle}</h2>
                            <h1>${this.title}</h1>
                            <p>${this.description}</p>
                            <div>
                                <button id="marvel-button">${this.buttontext}</button>
                            </div>
                        </div>
                        <div id="banner-img-container">
                        </div>
                    </div>
                </section>

        `;
    }
  
}

// Define the new element
customElements.define('banner-compose', BannerCompose);
// Export the component

export default BannerCompose;