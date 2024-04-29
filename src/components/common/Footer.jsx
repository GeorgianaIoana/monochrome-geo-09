export default function Footer() {
  return (
    <>
      <div className="footer-inner container-fluid container-lg">
        <section className="footer-contact d-none d-lg-block">
          <ul>
            <li>
              <a href="tel:+44(0)1023456789" title="Call us">
                call us
              </a>
            </li>
            <li>
              <a href="tel:+44(0)1023456789" title="Call us">
                +44 (0)10 2345 6789{' '}
              </a>
            </li>
            <li>
              <a href="mailto:monochrome@gmail.com" title="Email us">
                email customer care
              </a>
            </li>
          </ul>
        </section>
        <section className="footer-nav text-center">
          <div className="footer-nav-inner container container-lg-fluid">
            <header className="d-block d-lg-none">
              <h1>How can we help?</h1>
            </header>

            <div className="nav-menu d-flex d-lg-grid">
              <ul>
                <li>
                  <a href="" title="about us">
                    about us
                  </a>
                </li>

                <li>
                  <a href="" title="careers">
                    careers
                  </a>
                </li>

                <li>
                  <a href="" title="affiliates">
                    affiliates
                  </a>
                </li>

                <li>
                  <a href="" title="advertising">
                    advertising
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="" title="style and fit">
                    <span className="d-none d-lg-inline">
                      style & fit advice
                    </span>
                    <span className="d-inline d-lg-none">style and fit</span>
                  </a>
                </li>

                <li>
                  <a href="" title="faqs">
                    faqs
                  </a>
                </li>

                <li>
                  <a href="" title="delivery">
                    delivery
                  </a>
                </li>

                <li>
                  <a href="" title="returns">
                    <span className="d-none d-lg-inline">exchanges & </span>
                    returns
                  </a>
                </li>
              </ul>
            </div>

            <footer className="d-flex d-lg-none">
              <a href="" title="terms and conditions">
                terms & conditions
              </a>

              <a href="" title="privacy and cookies">
                privacy & cookies
              </a>
            </footer>
          </div>
        </section>
        <section className="footer-connect text-center text-lg-start">
          <div className="footer-connect-inner container container-lg-fluid p-lg-0">
            <form className="footer-newsletter d-flex flex-column align-items-lg-start">
              <h1 className="d-block d-lg-none heading">Let{"'"}s connect</h1>
              <label htmlFor="connect">
                <span className="d-inline d-lg-none">
                  Be the first to receive exclusive offers
                </span>
                <span className="d-none d-lg-inline">
                  sign up for our newsletter
                </span>
              </label>

              <input
                type="email"
                name="email"
                id="connect"
                placeholder="Email"
                required
              />
              <button type="submit" title="subscribe">
                submit
              </button>
              <div className="agree-checkbox">
                <input type="checkbox" name="agree" id="agree" required />
                <label htmlFor="agree">
                  I agree with{' '}
                  <a href="" title="Privacy Policy">
                    Privacy Policy
                  </a>{' '}
                  and I want to receive emails from Monochrome
                </label>
              </div>
            </form>

            <div className="footer-social">
              <h1 className="d-block d-lg-none">We are highly likeable</h1>
              <ul className="d-flex justify-content-center justify-content-lg-start">
                <li>
                  <a href="" title="youtube">
                    {' '}
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="" title="twitter">
                    {' '}
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="" title="facebook">
                    {' '}
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="" title="instagram">
                    {' '}
                    <i className="fa-brands fa-square-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
