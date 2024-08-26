class ComicCard extends HTMLElement {
    static get observedAttributes() {
        return ['img', 'title', 'year'];
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
                :host {
                    display: block;
                    width: 200px;
                    margin: 10px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }
                .info {
                    padding: 10px;
                }
                h3 {
                    margin: 0;
                    font-size: 16px;
                }
                p {
                    margin: 5px 0 0;
                    font-size: 14px;
                    color: #666;
                }
            </style>
            <div>
                <img src="${this.img}" alt="${this.title}">
                <div class="info">
                    <h3>${this.title}</h3>
                    <p>${this.year}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('comic-card', ComicCard);


export default ComicCard;