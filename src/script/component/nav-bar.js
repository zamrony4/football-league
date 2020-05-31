class navBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        const darkMode = (localStorage.getItem('dark-mode')) ? localStorage.getItem('dark-mode') : 0;
        
        let nameMode = darkMode == 1 ? "Light Mode" : "Dark Mode";
        let classMode = darkMode == 1 ? "navbar-dark bg-dark" : "navbar-light bg-white";
        let cardData = `<nav id="navbar-main" class="navbar navbar-expand-lg ${classMode} shadow-sm mb-3">
                        <a class="navbar-brand" href="index.html">FOOTBALL LEAGUE</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="show-profil" href="#profil">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="dark-mode" data-id="${darkMode}" href="javascript:void(0)">${nameMode}</a>
                                </li>
                            </ul>
                        </div>
                    </nav>`
        this.innerHTML = cardData
    }
}

customElements.define("nav-bar", navBar);