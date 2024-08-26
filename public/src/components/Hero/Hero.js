class Hero extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        
        #HeroMain {
            height: 60vh;
            margin-bottom: 2rem;
            background-image: url('https://cdn.marvel.com/content/1x/20240812-agatha_com_mas_dsk_02.jpg');
            background-size: cover;
            position: relative;
        }

        #text {
            position: absolute;
            top: 40%;
            width: 50%;
            color: white;
            margin-left: 2.5rem;
        }

        #HeroMain button {
            color: white;
            background-color: red;
            border: none;
            padding: 1rem 2rem;
            font-weight: bolder;
            cursor: pointer;
        }

        article {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        #HeroFooter {
            position: absolute;
            background-color: white;
            bottom: 0;
            margin-left: 24rem; 
            padding-right: 2rem; 
            width: 50vw;
            color: black;
        }

        #HeroFooter ul {
            list-style: none;
            bottom: 0;
            left: 70%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 1.5rem;
            padding: 1rem;
            font-weight: bolder;
        }
        /* media query */
        @media screen and (max-width: 1400px) {
            #HeroFooter {
                display: none;
            }
        }


        </style>

        <section id="HeroMain">
        <div id="text">
            <article>
                <h1>ALL THE MARVEL NEWS FROM D23 2024</h1>
                <p>Read all of the biggest  news from D23:The Ultimate Disney Fan Event, from film and TV to music, games and more!</p>
            </article>
            <button>READ MORE  </button>
        </div>
        <div id="HeroFooter">
        <ul>
            <li>Marvel At D23 <br> 2024</li>
            <li>The Official Marvel <br> Podcast</li>
            <li>Marvel At San Diego <br> Comic-Con 2024</li>
            <li>This Week's <br> New Comics</li>
            <li>Free Deadpool & <br> Wolverine Comics</li>
        </ul>

        </div>
        </section>

            
        `;
    }
}

//Definir el componente
customElements.define('hero-component', Hero);

//Exportar el componente
export default Hero;