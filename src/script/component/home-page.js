class HomePage extends HTMLElement {
    set data(data) {
        this._data = data;
        this.render();
    }
    
    render() {
        const darkMode = (localStorage.getItem('dark-mode')) ? localStorage.getItem('dark-mode') : 0;
        
        let classMode = darkMode == 1 ? "bg-dark" : "bg-white";

        let cardData = `<div class="row">`
        this._data.forEach(value => {
            cardData += `
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 mb-3 d-flex">
                <div class="card border-0 ${classMode} shadow-sm card-home">
                    <a href="#${value.name}" class="select-league" data-id="${value.id}"><img class="card-img-top" src="${value.badge}" alt="Card image cap"></a>
                    <div class="card-body">
                    <h5 class="card-title text-dark text-center"><a href="#${value.name}" class="select-league nav-link" data-id="${value.id}">${value.name}</a></h5>
                    </div>
                </div>
            </div>`
        });
        cardData += `</div>`
        this.innerHTML = cardData
    }
}

customElements.define("home-page", HomePage);