/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
      <div class="app-bar__brand">
        <img src="/Logo Ruangjahit 2.png" width="150px" alt="">
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <div>
          <ul>
              <li><a href="#/home" class="nav-link">Home</a></li>
              <li><a href="#/product" class="nav-link">Product</a></li>
              <li><a href="#/favorite" class="nav-link">Favorite</a></li>
              <li><a href="#/about-us" class="nav-link">About Us</a></li>

              <li class="login"><a href="#/masuk">Masuk</a></li>
              <li class="register"><a href="#/daftar">Daftar</a></li>
          </ul>

        </div>
      </nav>
      <div class="app-bar__menu">
        <input type="checkbox" id="hamburgerButton">
        <label for="hamburgerButton" class="btn-toggle">☰</label>
      </div>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);