import "./App.css";

const App = () => {
  return (
    <>
      <main className="relative">
        <h1 className="text-3xl font-bold underline">Nike App</h1>
        <section className="x1:padding-1 wide:padding-r padding-b">
          Hero
        </section>
        <section className="padding">Popular Products</section>
        <section className="padding">Super Quality</section>
        <section className="padding-x py-10">Services</section>
        <section className="padding">Special Offer</section>
        <section className="padding bg-pale-blue">Customer Reviews</section>
        <section className="padding-x sm:py-32 w-full">Subscribe</section>
      </main>
      <footer className="padding-x padding-t pb-8 bg-black">Footer</footer>
    </>
  );
};

export default App;
