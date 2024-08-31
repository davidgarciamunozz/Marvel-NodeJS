class VideoBanner extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
            <style>
            
            section {
                display: flex;
                align-items: center;
                width: 100%;
                height: 60vh;
                flex-direction: column;
                padding-top: 4rem;
                padding-bottom: 7rem;
            }
            #content {
                text-align: left;
                width: 50%;
                display: flex;
                flex-direction: column;
                gap: .5rem;
            }

            </style>
            
                <section>
                    <div>
                        <iframe src="https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6351255690112&brand=marvel"width="750" height="470" allowFullScreen frameBorder="0"></iframe>
                    </div>
                    <div id="content">
                        <span>Trailers & Extras</span>
                        <h1>Marvel Rivals | Map Reveal | YGGSGARD - WORLD TREE & KINGDOM OF GODS</h1>
                        <p>After the Timestream Entanglement, Asgard fused with Yggdrasill, the World Tree that connects all Ten Realms. Now Loki, the God of Mischief, uses his tricks to seize control and build his new kingdom: Yggsgard in Marvel Rivals!</p>
                    </div>
                </section>

            
           
        `;
    }
}

customElements.define('video-banner', VideoBanner);

export default VideoBanner;