import Header from '@/components/Header';
import './globals.scss';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <header className="header">
        <Header></Header>
      </header>
      <main className="content"></main>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
