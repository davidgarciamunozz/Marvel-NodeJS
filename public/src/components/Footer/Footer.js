class Footer extends HTMLElement {
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
            footer{
                padding: 0 50px;
                background-color: #202020;
                color: #fff;
            }
            #top-main{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 30px 150px;
                font-weight: 600;
            }

            #bottom ul{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 3rem;
                font-size: .7rem;
                padding: 40px 0;
                color: gray;
            }
               
            </style>
            <footer>
        <div id="top-main">
            <div>
                <img src="./src/assets/Captura de pantalla 2024-08-31 153839.png" alt="">
            </div>
            <div> 
                <ul style="list-style: none;">
                    <li>ABOUT MARVEL</li>
                    <li>HELP/FAQS</li>
                    <li>CAREERS</li>
                    <li>INTERNSHIPS</li>
                </ul>
            </div>
            <div>
                <ul style="list-style: none;">
                    <li>ADVERTISING</li>
                    <li>DISNEY</li>
                    <li>MARVEL HQ</li>
                    <li>REEDEM </li>
                </ul>
            </div>
            <div>
                <div>
                    <img src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png" alt="">
                    <span></span>
                </div>
                <div>
                    <img src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png" alt="">
                    <span></span>
                </div>
            </div>
            <div>
                <span>
                    FOLLOW MARVEL
                </span>
            </div>
        </div>
        <div id="bottom">
            <ul style="list-style: none;">
                <li>Condiciones para el uso</li>
                <li>Politica de privacidad</li>
                <li>Anuncion basados en intereses</li>
                <li>Acuerdo de licencia</li>
                <li>@2024 Marvel</li>
            </ul>
        </div>

    </footer>
        `;
    }
}

customElements.define('footer-component', Footer);

export default Footer;