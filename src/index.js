// Style
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// JS
import main from "./script/view/main.js";

// Component
import "./script/component/nav-bar.js";
import "./script/component/content-bar.js";
import "./script/component/modal-view.js";
import "./script/component/loading-page.js";

document.addEventListener("DOMContentLoaded", main);