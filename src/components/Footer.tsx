export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-grid" id="about">
        <div className="footer-brand" id="about">
          <a className="brand footer-logo" href="#top">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>Dev Stack</span>
          </a>
          <p>Build a focused development toolkit with technologies that match your goals and workflow.</p>
          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Product</h4>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Your Stack</a>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#top">Careers</a>
        </div>
        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <a href="#top">Cookies</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div><a href="#top">Privacy</a><a href="#top">Terms</a></div>
      </div>
    </footer>
  )
}
