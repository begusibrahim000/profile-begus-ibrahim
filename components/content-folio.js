// ==================== component content folio ==================== 
class ContentFolio extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
     this.innerHTML = `<div class="body1">
     					<div class="body2">
						<div class="body3">
							<main class="main">
								<!-- component gallery folio -->
								<header-gallery-folio></header-gallery-folio>
								<!-- akhir component gallery folio -->

								<!-- content -->
								<section id="content" id="content">
									<div class="line1 wrapper">
										<div class="wrapper tabs">
											<article class="col2 pad_left1 tab-content">
												<h2>Website Client :</h2>
												<ul class="gallery">
													<a href="http://centralagung.com" target="_blank">Central AGung</a>
													<p>Perusahaan yang bergerak di bidang bordir</p>
													<li>
														<a href="images/myFolio/central-agung-com.jpg">
															<img style="width: 220px;height: 220px;" src="images/myFolio/central-agung-com.jpg"  alt="Foto tidak tersedia">
														</a>
													</li>
													<a href="http://arifsinergyecoracing.com" target="_blank">Arif Sinergy Ecoracing</a>
													<p>Pembisnis ecoracing indonesia</p>
													<li>
														<a href="images/myFolio/arif-sinergy-ecoracing-com.jpg">
															<img style="width: 220px;height: 220px;" src="images/myFolio/arif-sinergy-ecoracing-com.jpg" alt="Foto tidak tersedia">
														</a>
													</li>
													<a href="https://hitungan.net" target="_blank">Hitungan</a>
													<p>System kalkulator saham dan pembisnis saham</p>
													<li class="end">
				                                    	<a href="images/myFolio/hitungan-net.PNG">
				                                        	<img style="width: 220px;height: 220px;" src="images/myFolio/hitungan-net.PNG" alt="Foto tidak tersedia">
				                                        </a>
													</li>
												</ul>
											</article>
										</div>
									</div>
								</section>
							</main>
						</div>
					</div>
				</div>
				<!-- akhir content -->`
   }
}

 
window.customElements.define('content-folio', ContentFolio)



