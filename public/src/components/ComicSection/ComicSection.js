 class ComicSection extends HTMLElement {
    static get observedAttributes() {
        return ['data'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'data' && oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const comicData = JSON.parse(this.getAttribute('data') || '[]');
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 20px;
                    background-color: #f0f0f0;
                }
            </style>
            ${comicData.map(comic => `
                <comic-card
                    img="${comic.img}"
                    title="${comic.title}"
                    year="${comic.year}"
                ></comic-card>
            `).join('')}
        `;
    }
}

customElements.define('comic-section', ComicSection);

export default ComicSection;

