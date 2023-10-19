import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./containers";
const App = () => {
  return (
    <>
      <main className="relative">
        <h1 className="text-3xl font-bold underline">Nike App</h1>
        <NavBar />
        <section className="x1:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 w-full">
          <Subscribe />
        </section>
      </main>
      <footer className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </footer>
    </>
  );
};

export default App;
