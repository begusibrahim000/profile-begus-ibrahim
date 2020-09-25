// ==================== component content home ====================
class ContentHome extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
     this.innerHTML = `<div class="body1">
						<div class="body2">
							<div class="body3">
								<main class="main">
									<!-- component header-home  -->
									<header-gallery-home></header-gallery-home>
									<!-- akhir component header home  -->

									<!-- content -->
									<section id="content">
										<article>
											<h2>A FULLSTACK WEB DEVELOPER</h2>
											<h3>Jasa pembuatan webiste</h3>
											Saya begus ibrahim seorang fullstack web developer siap membuat website professional,aman dan bermanfaat.
										</article>
									</section>

								</main>
							</div>
						</div>
					</div>
					<!-- akhir content -->`
   }
}

 
window.customElements.define('content-home', ContentHome)




