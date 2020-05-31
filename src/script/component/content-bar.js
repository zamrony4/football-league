class contentBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        let cardData = `<div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-3">
                            <div id="content-bar" class="card border-0 bg-white shadow-sm">
                                <div class="card-body" id="content-list">
                                </div>
                            </div>
                        </div>
                    </div>`
        this.innerHTML = cardData
    }
}

customElements.define("content-bar", contentBar);