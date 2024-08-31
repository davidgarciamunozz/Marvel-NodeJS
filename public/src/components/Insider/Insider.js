class Insider extends HTMLElement {
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
                section{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 7rem;
                    width: 100%;
                    background-color: black;
                }
                #insider-img{
                    margin-right: 5rem;
                }
                #insider-content{
                    color: white;
                    padding: 20px;
                    text-align: center;
                    padding-top: 3rem;
                }
                #insider-content button {
                    padding: 10px 20px;
                    background-color: red;
                    color: white;
                    font-weight: bold;
                    border: none;
                    cursor: pointer;
                    margin-top: 20px;
                }
                #insider-content  span{
                    font-size: 20px;
                    font-weight: bold;
                    color: red;
                }
                #insider-content  h1 {
                    margin-bottom: 15px;
                    margin-top: 15px;
                }
            </style>
            <section>
                <div id="insider-img">
                    <img src="https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg" alt="">
                </div>
                <div id="insider-content">
                    <span>MARVEL INSIDER</span>
                    <h1>Watch, Earn, Redeem!</h1>
                    <p>Get rewarded for doing what you already do as a fan</p>
                    <button>JOIN NOW</button>
                </div>
           </section>
        `;
    }
}

customElements.define('insider-component', Insider);

export default Insider;