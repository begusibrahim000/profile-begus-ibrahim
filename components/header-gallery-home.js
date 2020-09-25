// ==================== component header ====================
class HeaderGalleryHome extends HTMLElement {
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
                      <div class="relative">
                    <div id="gallery">
                      <ul id="myRoundabout">
                        <li><img src="images/myGallery/sertifikat-ngoding-begus-ibrahim-by-dicoding.PNG" alt="Foto tidak tersedia"></li>
                        <li><img src="images/myGallery/bukti-freelancer-sribulancer.PNG" alt="Foto tidak tersedia"></li>
                        <li><img src="images/myGallery/begus.jpg" alt="Foto tidak tersedia"></li>
                      </ul>
                    </div>
                  </div>
                      </header>`
   }
}
 
window.customElements.define('header-gallery-home', HeaderGalleryHome)

