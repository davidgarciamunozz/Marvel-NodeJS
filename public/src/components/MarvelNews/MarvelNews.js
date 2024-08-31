class MarvelNewsCard extends HTMLElement {
    static get observedAttributes() {
        return ['image', 'category', 'title', 'days-ago', 'size', 'font', 'content'];
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
                    width: 100%;
                    margin-bottom: 20px;
                    font-family: Arial, sans-serif;
                }
                .card {
                    display: flex;
                    border-bottom: 1px solid #e0e0e0;
                    padding-bottom: 20px;
                    padding-left: 300px;
                }
                .image {
                    margin-right: 20px;
                }
                img {
                    width: ${this.size}px;
                    height: auto;
                    object-fit: cover;
                }
                .content {
                    width: ${this.content}px;
                }
                .category {
                    text-transform: uppercase;
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 5px;
                }
                .title {
                    font-size: ${this.font}px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .days-ago {
                    font-size: 12px;
                    color: #999;
                }
            </style>
            <div class="card">
                <div class="image">
                    <img src="${this.image}" alt="${this.title}">
                </div>
                <div class="content">
                    <div class="category">${this.category}</div>
                    <h2 class="title">${this.title}</h2>
                    <div class="days-ago">${this['days-ago']}</div>
                </div>
            </div>
        `;
    }
}

customElements.define('marvel-news-card', MarvelNewsCard);

export default MarvelNewsCard;