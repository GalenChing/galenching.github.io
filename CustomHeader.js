class CustomHeader extends HTMLElement {
  constructor() {
    super();

    let location = window.location.pathname.split("/").pop()


    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand me-auto" href="index.html">
            <picture>
              <source srcset="favicon-dark.ico" media="(prefers-color-scheme: dark)">
              <img src="favicon-light.ico">
            </picture>
          </a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link`+(location === "index.html" ? " active" : "")+`" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link`+(location === "about.html" ? " active" : "")+`" aria-current="page" href="about.html">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`;
  }
}

customElements.define('custom-header', CustomHeader);
