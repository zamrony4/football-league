class modalView extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        const darkMode = (localStorage.getItem('dark-mode')) ? localStorage.getItem('dark-mode') : 0;
        
        let classMode = darkMode == 1 ? "bg-dark text-light" : "";
        let cardData = `<div class="modal fade" id="modal-view" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div id="modal-content" class="modal-content ${classMode}">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">MY PROFILE</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body text-center">
                                        <h4>Muhammad Zamroni</h4>
                                        <h4>Jepara, 1 Oktober 1993</h4>
                                        <h4>RT 003 RW 002, Kelurahan Bapangan, Jepara</h4>
                                        <h4>Freelance</h4>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
        this.innerHTML = cardData
    }
}

customElements.define("modal-view", modalView);