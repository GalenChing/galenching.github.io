class CustomFooter extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <footer class="text-center p-5">
        <div class="container">
          <p>Hosted on <a href="https://github.com/GalenChing/galenching.github.io">GitHub</a> with <a href="https://pages.github.com/">Pages</a></p>
          <small>© 2022</small>
        </div>
      </footer>`;
  }
}

customElements.define('custom-footer', CustomFooter);
