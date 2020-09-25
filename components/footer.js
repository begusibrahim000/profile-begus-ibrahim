// ==================== component footer ====================
class FooterBegus extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
     this.innerHTML = `<footer>
						<div class="wrapper" style="margin-top:10px;">
							<span>
							&copy; Copyright 2020 - by <a href="https://begusibrahim.zyrosite.com" target="_blank">Begus Ibrahim</a><br>
							</span>
						</div>
					</footer>`
   }
}

 
window.customElements.define('footer-begus', FooterBegus)



