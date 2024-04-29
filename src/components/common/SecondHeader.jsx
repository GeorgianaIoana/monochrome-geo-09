export function SecondHeader() {
  return (
    <>
      <div className="header-secondary">
        <div className="header-secondary-inner container">
          <section className="header-connect d-none d-lg-block">
            <ul>
              <li>
                <a
                  href="/"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>
              <li>
                <a href="tel:+44(0)1023456789" title="Call us">
                  <span>Call us</span> +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </section>

          <section className="header-controls">
            <h1 className="d-block d-lg-none">
              <a href="/" title="Home">
                Monochrome
              </a>
            </h1>
            <form className="home-page-search d-none d-lg-flex flex-row-reverse">
              <input
                type="search"
                name="search"
                id="search-lg"
                placeholder="Search"
              />
              <button type="submit" title="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <ul>
              <li>
                <a href="/" title="User">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>
              <li>
                <a href="/" title="Wish list">
                  <i className="fa-solid fa-heart-circle-bolt"></i>
                </a>
              </li>
              <li>
                <a href="/" title="Shopping cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="header-primary">
        <section className="header-menu">
          <div className="header-menu-inner container">
            <div className="header-menu-sm d-lg-none">
              <button type="button" title="Menu">
                <i className="fa-solid fa-bars"></i>
              </button>

              <form className="header-search d-flex gap-3">
                <input
                  type="search"
                  name="search"
                  id="search-lg"
                  placeholder="Search"
                />

                <button type="submit" title="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <ul className="header-menu-lg d-none d-lg-flex justify-content-between">
              <li>
                <a href="./" title="New arrivals">
                  New arrivals
                </a>
              </li>
              <li>
                <a href="/" title="Brands">
                  Brands
                </a>
              </li>
              <li>
                <a href="/" title="Men's">
                  Men{"'"}s
                </a>
              </li>
              <li>
                <a href="/" title="Women's">
                  Women{"'"}s
                </a>
              </li>
              <li>
                <a href="/" title="Accesories">
                  Accesories
                </a>
              </li>
              <li>
                <a href="/" title="Lookbook">
                  Lookbook
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="header-banner-sm d-block d-lg-none">
          <div className="container header-banner-sm-inner">
            <a className="mobile-banner-button" href="/" title="New in">
              New in
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
