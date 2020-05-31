class loadingPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        let cardData = `<div id="overlay" class="text-center">
                            <div class="spinner-grow text-info p-3 align-middle" style="width: 10rem; height: 10rem;" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <h4 class="text-light mt-2">Mohon Tunggu</h4>
                        </div>`
        this.innerHTML = cardData
    }
}

customElements.define("loading-page", loadingPage);