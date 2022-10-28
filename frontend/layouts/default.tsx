
import Header from '../components/layouts/client/header';
import Footer from '../components/layouts/client/footer';

export default function LayoutDefault({ children }: any) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
