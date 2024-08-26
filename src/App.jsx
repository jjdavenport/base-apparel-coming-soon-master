import Footer from "./components/footer";
import { useMediaQuery } from "react-responsive";
import Hero from "./components/hero";
import Article from "./components/article";
import Header from "./components/header";

function App() {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      {desktop ? (
        <>
          <main className="flex w-full min-h-screen">
            <section className="flex flex-col justify-between">
              <div>
                <Header />
                <Article />
              </div>
              <Footer />
            </section>
            <section>
              <Hero />
            </section>
          </main>
        </>
      ) : (
        <>
          <main className="flex flex-col justify-between w-full min-h-screen">
            <section>
              <Header />
              <Hero />
              <Article />
            </section>
            <section>
              <Footer />
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default App;
