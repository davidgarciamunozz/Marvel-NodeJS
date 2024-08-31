import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setComicData();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <nav-bar></nav-bar>
            <hero-component></hero-component>
            <banner-compose 
                minisrc="https://cdn.marvel.com/content/1x/mulogo_lob_log_eye_01_1.png" 
                mainsrc="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg" 
                pretitle="AVAILABLE NOW" 
                title="NEW ON MARVEL UNLIMITED" 
                description="Read these plus 30,000+ digital comics for $9.99 a month" 
                buttontext="GET MARVEL UNLIMITED">
            </banner-compose>
            <comic-section id="comicSection1"></comic-section>
            <banner-compose
                mainsrc="https://cdn.marvel.com/content/1x/new_com_20240821_set_01.jpg"
                pretitle="ON SALE 8/21"
                title="NEW COMICS THIS WEEK"
                description="Check out all of our latest releases"
                buttontext="RELEASE CALENDAR">
            </banner-compose>
            <comic-section id="comicSection2"></comic-section>

            <h1 style="padding-left:300px">THE LATEST</h1>
            <div  style="display: flex;">
            <div>
            <marvel-news-card
            content="300"
            font="18"
            size="300"
            image="https://cdn.marvel.com/content/1x/m85_kv_card.png"
            category="COMICS"
            title="Marvel's 85th Anniversary: Marvel Comics Through the Decades"
            days-ago="1 DAY AGO"
            >
            </marvel-news-card>
            <marvel-news-card
            content="300"
            font="18"
            size="300"
            image="https://cdn.marvel.com/content/1x/dpool2024007_card.jpg"
            category="COMICS"
            title="Marvel's 85th Anniversary: Marvel Comics Through the Decades"
            days-ago="12121 DAYS AGO"
            >
            </marvel-news-card>
            <marvel-news-card
            content="300"
            font="18"
            size="300"
            image="https://cdn.marvel.com/content/1x/dpoolwolv_slipcase_card.jpg"
            category="COMICS"
            title="Marvel's 85th Anniversary: Marvel Comics Through the Decades"
            days-ago="1 DAY AGO"
            >
            </marvel-news-card>
            <marvel-news-card
            content="300"
            font="18"
            size="300"
            image="https://cdn.marvel.com/content/1x/m85_kv_card.png"
            category="COMICS"
            title="Marvel's 85th Anniversary: Marvel Comics Through the Decades"
            days-ago="1 DAY AGO"
            >
            </div>

            <div style="padding-left: 100px;">
            <h2 style ="padding-left:270px">THE HYPE BOX</h2>
            <marvel-news-card
            content="200"
            font="14"
            size="100"
            image="https://cdn.marvel.com/content/1x/m85_kv_card.png"
            category="COMICS"
            title="Marvel's 85th Anniversary: Marvel Comics Through the Decades"
            days-ago="1 DAY AGO"
            >
            </marvel-news-card>
            <marvel-news-card
            content="200"
            font="14"
            size="100"
            image="https://cdn.marvel.com/content/1x/dpool2024007_card.jpg"
            category="COMICS"
            title="Marvel's 85th Anniversary: Marvel Comics Through the Decades"
            days-ago="12121 DAYS AGO"
            >
            </marvel-news-card>
            <marvel-news-card
            content="200"
            font="14"
            size="100"
            image="https://cdn.marvel.com/content/1x/dpoolwolv_slipcase_card.jpg"
            category="COMICS"
            title="Marvel's 85th Anniversary: Marvel Comics Through the Decades"
            days-ago="1 DAY AGO"
            >
            </div>
            </div>
            <video-banner></video-banner>
            <insider-component></insider-component>
            <footer-component></footer-component>
        
        `;
    }

    setComicData() {
        const comicData1 = [
            {
                id: 1,
                title: 'Ultimates (2024) #1',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/8/03/66634dc363119/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 2,
                title:'Ultimates (2024) #2',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/a/40/66a7f5e6547ed/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 3,
                title: 'DOOM (2024) #1',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/40/663e5c7f71819/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 4,
                title: 'Venom: Separation Anxiety (2024) #1',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/4/10/663e5c7198d07/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 5,
                title: 'Alien: Black, White & Blood (2024) #5',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/663e5c9e7b735/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 6,
                title: 'Amazing Spider-Man: Blod Hunt (2024) #1',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/7/40/663e5c9e6187c/portrait_uncanny.jpg',
                year: 2024,
            }
        ];

        const comicData2 = [
            {
                id: 1,
                title: 'Predator Vs. Black Panther (2024) #1',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/1/30/66bb716729729/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 2,
                title:'Wolverine: Revenge (2024) #1',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/b0/66bb7145805e7/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 3,
                title: 'Wolverine: Revenge - Red Brand (2024) #1',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/b0/66bb7145805e7/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 4,
                title: 'Venom War: Venomous (2024) #1',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/10/66bb7144e2054/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 5,
                title: 'Venom War Carnage (2024) #1',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/6/80/66bb7142277fc/portrait_uncanny.jpg',
                year: 2024,
            },
            {
                id: 6,
                title: 'Ultimate Spider-man (2024) #8',
                img: 'https://cdn.marvel.com/u/prod/marvel/i/mg/3/70/66bb714635a92/portrait_uncanny.jpg',
                year: 2024,
            }
        ];

        this.shadowRoot.getElementById('comicSection1').setAttribute('data', JSON.stringify(comicData1));
        this.shadowRoot.getElementById('comicSection2').setAttribute('data', JSON.stringify(comicData2));
    }
}

customElements.define('app-container', AppContainer);