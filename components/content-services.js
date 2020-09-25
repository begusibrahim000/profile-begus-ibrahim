// ==================== component content services ====================
class ContentServices extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
     this.innerHTML = `<div class="body1">
						<div class="body2">
							<div class="body3">
								<main class="main">
									
								<!-- component header -->
								<header-begus></header-begus>
								<!-- akhir component header -->

									<!-- content -->
									<section id="content">
										<div class="line1">
											<div class="line2 wrapper">
												<div class="wrapper">
													<article class="col1">
														<img style="width: 250px;height: 250px;" src="images/myServices/web-developer.png" alt="Foto tidak tersedia">
														<h2>WEB DEVELOPER</h2>
														<div class="pad">
															<p class="pad_bot2">
																<strong>1.Toko Online</strong>
															</p>
															<p>
																Saya bisa bisa membuat aplikasi toko online berbasis website. 
															</p>
															<p class="pad_bot2">
																<strong>2.Portfolio</strong>
															</p>
															<p>
																Saya bisa bisa membuat aplikasi portfolio berbasis website. 
															</p>
															<p class="pad_bot2">
																<strong>3.Restoran</strong>
															</p>
															<p>
																Saya bisa bisa membuat aplikasi restoran berbasis website. 
															</p>
															<p class="pad_bot2">
																<strong>4.Pengaduan Masyarakat</strong>
															</p>
															<p>
																Saya bisa bisa membuat aplikasi pengaduan masyarakat berbasis website. 
															</p>
															<p class="pad_bot2">
																<strong>5.Arsip surat</strong>
															</p>
															<p>
																Saya bisa bisa membuat aplikasi arsip surat berbasis website. 
															</p>
															<p class="pad_bot2">
																<strong>6.DLL</strong>
															</p>
															<p>
																Dan aplikasi pengembangan lainnya,source code lengkap aplikasi yang telah saya buat ada di github saya menggunakan keamanan PRIVATE.
																<a href="https://github.com/begusibrahim000" target="_blank">Begus Ibrahim | GITHUB</a> 
															</p>
														</div>
													</article>
													<article class="col2 pad_left1">
														<img style="width: 250px;height: 250px;" src="images/myServices/android-developer.jpg" alt="Foto tidak tersedia">
														<h2>ANDROID DEVELOPER</h2>
														<div class="pad">
															<p class="pad_bot2">
																<strong>Aplikasi system informasi perusahaan</strong>
															</p>
															<p>
																Saya bisa membuat aplikasi system informasi perusahaan berbasis android
															</p>
														</div>
													</article>
													<article class="col3 pad_left1">
														<img style="width: 250px;height: 250px;" src="images/myServices/machine-learning-developer.png" alt="Foto tidak tersedia">
														<h2>MACHINE LEARNING</h2>
														<div class="pad">
															<p class="pad_bot2">
																<strong>Data</strong>
															</p>
															<p>
																Saya bisa mempermudah dalam pengelolan data yang banyak dengan teknik machine learning khsusunya di website.
															</p>
														</div>
													</article>
												</div>
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

 
window.customElements.define('content-services', ContentServices)



