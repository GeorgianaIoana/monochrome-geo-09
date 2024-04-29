import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { CatalogPreview } from '@/components/catalog/CatalogPreview';
import { HomeContent } from '@/components/homeContent/HomeContent';

export default function Home() {
  const products = [
    {
      productName: 'Ariel',
      productPrice: 399,
      productImageSource: '/images/products/white_watch.png',
      productImageAlt: "Ariel, women's watch",
    },

    {
      productName: 'Hurricane',
      productPrice: 680,
      productImageSource: '/images/products/dad_watch.png',
      productImageAlt: 'Hurricane, strong attitude',
    },

    {
      productName: 'Gray sky',
      productPrice: 430,
      productImageSource: '/images/products/gray_Watch.png',
      productImageAlt: 'Gray, suitable for suit',
    },

    {
      productName: 'Angel',
      productPrice: 630,
      productImageSource: '/images/products/woman_watch.png',
      productImageAlt: 'Angel, pure elegance',
    },
  ];
  return (
    <>
      <header className="header">
        <Header></Header>
      </header>
      <main className="content container">
        <section className="catalog-preview mt-4">
          <h1>New Stuff</h1>
          <CatalogPreview productTiles={products}></CatalogPreview>
        </section>

        <section className="catalog-preview">
          <h1>Most loved</h1>
          <CatalogPreview productTiles={products}></CatalogPreview>
        </section>

        <section className="home-content d-flex">
          <HomeContent></HomeContent>
        </section>

        <section className="catalog-preview">
          <h1 className="text-uppercase">Men{"'"}s</h1>
          <CatalogPreview productTiles={products}></CatalogPreview>
          <a
            href="/"
            title="Watch the watches"
            className="button button-primary-outline button-lg"
          >
            View all
          </a>
        </section>

        <section className="catalog-preview">
          <h1 className="text-uppercase">Women{"'"}s</h1>
          <CatalogPreview productTiles={products}></CatalogPreview>
          <a
            href="/"
            title="Watch the watches"
            className="button button-primary-outline button-lg"
          >
            View all
          </a>
        </section>
      </main>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
