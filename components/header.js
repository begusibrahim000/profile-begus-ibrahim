// ==================== component header ====================
class HeaderBegus extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
     this.innerHTML = `<header>
                      <div class="wrapper" style="padding-top:35px;">
                        <h1><a href="https://begusibrahim000.wordpress.com" style="text-decoration: none;font-size: 40px;" target="_blank">Begus Ibrahim</a></h1>
                        <nav style="margin-top: 10px;">
                          <ul id="menu">
                            <li class="link-home active"><a href="index.html">Home</a></li>
                            <li class="link-about active"><a href="About.html">About</a></li>
                            <li class="link-folio active"><a href="Folio.html">Folio</a></li>
                            <li class="link-services active"><a href="Services.html">services</a></li>
                          </ul>
                        </nav>
                      </div>
                      </header>`
   }
}
 
window.customElements.define('header-begus', HeaderBegus)

