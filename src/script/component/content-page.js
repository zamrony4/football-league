class ContentPage extends HTMLElement {
    set data(data) {
        this._data = data;
        this.render();
    }
    
    render() {
        const strBanner = this._data.strBanner ? this._data.strBanner : `https://via.placeholder.com/1000x185/000033/FFFFFF?text=${this._data.strLeague}`;
        const darkMode = (localStorage.getItem('dark-mode')) ? localStorage.getItem('dark-mode') : 0;
        let cardMode = "bg-white";
        let tableMode = "";
        if (darkMode == 1) {
            cardMode = "bg-dark text-light";
            tableMode = "table-dark";
        }
        let cardData = `<div class="row">
            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 mb-3">
                <div class="card border-0 ${cardMode} shadow-sm card-content">
                    <img class="card-img-top" width="100%" src="${strBanner}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${this._data.strLeague}</h5>
                        <p class="card-text text-justify">${this._data.strDescriptionEN}</p>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Club</h5>
                        <div class="row" id="club-list">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-3">
                <div class="card border-0 ${cardMode} shadow-sm mb-3 card-content">
                    <div class="card-header">
                        FIXTURES
                    </div>
                    <table class="table table-sm ${tableMode} table-content">
                        <tbody id="fixtures-list">
                            <div class="text-center p-3" id="loading-fixtures">
                                <div class="spinner-grow text-info" style="width: 3rem; height: 3rem;" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </tbody>
                    </table>
                </div>

                <div class="card border-0 ${cardMode} shadow-sm mb-3 card-content">
                    <div class="card-header">
                        TABLE
                    </div>
                    <div class="card-body text-center" id="loading-table">
                        <div class="spinner-grow text-info p-3" style="width: 3rem; height: 3rem;" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <table class="table table-sm ${tableMode} table-content" hidden>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Team Name</th>
                                <th>P</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GD</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody id="klasemen-list">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`
        this.innerHTML = cardData
        
    }
}

customElements.define("content-page", ContentPage);