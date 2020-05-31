import league from "../data/league.js";

class LeagueList extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        let cardData = `<div class="row">`
        league.forEach(value => {
            cardData += `
            <div class="col-xs-3 col-sm-2 col-md-1 col-lg-1 mb-3">
                <a href="#${value.name}" class="select-league" data-id="${value.id}"><img width="100%" src="${value.badge}" alt="Card image cap"></a>
            </div>`
        });
        cardData += `</div>`
        this.innerHTML = cardData
    }
}

customElements.define("league-list", LeagueList);