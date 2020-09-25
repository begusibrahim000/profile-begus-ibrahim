// ==================== component footer ====================
class ContentAbout extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
     this.innerHTML = `<div class="body1">
						<div class="body2">
							<div class="body3">
								<main class="main">
									<!-- component header begus -->
									<header-begus></header-begus>
									<!-- component header begus -->

									<section id="content">
										<div class="wrapper">
											<h2>About Me :</h2>	
											<div class="wrapper">	
												<aside>
													<div class="left marg_right1">
														<img src="images/myGAllery/begus.jpg" style="width: 200px;height: 200px;" alt="Foto tidak tersedia">
														<p>
															Begus Ibrahim <br>
															begusibrahim000@gmail.com <br>
															085722081528 <br>
															<a href="https://begusibrahim000.wordpress.com" target="_blank">Begus Ibrahim 1</a> <br>
															<a href="https://begusibrahim.zyrosite.com" target="_blank">Begus Ibrahim 2</a> <br>
															<a href="https://www.dicoding.com/users/769584" target="_blank">Profile dicoding</a> <br>
															<a href="https://www.sribulancer.com/id/users/myjobs12345" target="_blank">Sribulancer</a> <br>
															<a href="https://github.com/begusibrahim000" target="_blank">Github</a> <br>
														</p>								
													</div>
												</aside>
												<p>	
													<strong>
														A FULLSTACK WEB DEVELOPER USE LARAVEL FRAMEWORK + VUE.JS FRAMEWORK.
													</strong>
												</p>
												<p>
													Saya begus ibrahim seorang fullstack web developer yang bekerja di perusahaan HOUSECODER dan sambil ngambil project dari situs freelancer seperti <a href="https://upwork.com">UPWORK</a> dan khususnya sekarang di <a href="https://sribulancer.com">SRIBULANCER</a>.
												</p>
												<p>
													Selain keahlian dalam membuat website professional menggunakan tekhologi terbaru,saya juga bisa mengembangkan aplikasi berbasis android menggunakan tekhnologi KOTLIN,REACT NETIVE dan IONIC di bagian vue.js dan react.js nya.
												</p>
												<p>
													Saya juga bisa menerapkan tekhnologi merchine learning menggunakan tekhnologi PYTHON di webiste.
												</p>
											</div>
											<h2>Skills :</h2>
											<ul class="gallery">
												<li>
													<p>C</p>
													<img src="images/mySkills/c.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>C++</p>
													<img src="images/mySkills/c++.jpg" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>PHP</p>
													<img src="images/mySkills/php.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Javascript</p>
													<img src="images/mySkills/javascript.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Node.js</p>
													<img src="images/mySkills/nodejs.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Python</p>
													<img src="images/mySkills/python.jpg" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Java</p>
													<img src="images/mySkills/java.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Kotlin</p>
													<img src="images/mySkills/kotlin.jpg" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>HTML5</p>
													<img src="images/mySkills/html.jpg" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>CSS3</p>
													<img src="images/mySkills/css.jpg" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Laravel</p>
													<img src="images/mySkills/laravel.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Vue.js</p>
													<img src="images/mySkills/vuejs.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>React.js</p>
													<img src="images/mySkills/reactjs.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Bootstrap</p>
													<img src="images/mySkills/bootstrap.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Materializecss</p>
													<img src="images/mySkills/materializecss.jpg" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
												<li>
													<p>Github</p>
													<img src="images/mySkills/github.png" style="width: 100px;height: 100px;" alt="Foto tidak tersedia">
												</li>
											</ul>
										</div>
									</section>
								</main>
							</div>
						</div>
					</div>
					<!-- akhir content -->`
   }
}

 
window.customElements.define('content-about', ContentAbout)



