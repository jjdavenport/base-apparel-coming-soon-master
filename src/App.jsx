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
          <main className="flex min-h-screen w-full font-custom text-base">
            <section className="flex min-h-screen w-7/12 flex-col justify-between bg-gradientLinear1">
              <div className="flex flex-1 flex-col gap-14 md:p-14 xl:p-20">
                <Header />
                <Article />
              </div>
              <Footer />
            </section>
            <section className="flex min-h-screen w-5/12 flex-1">
              <Hero />
            </section>
          </main>
        </>
      ) : (
        <>
          <main className="flex min-h-screen w-full flex-col justify-between bg-gradientLinear1 font-custom text-base">
            <section className="flex flex-1 flex-col">
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
