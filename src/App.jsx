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
          <main className="flex w-full min-h-screen text-base font-custom">
            <section className="flex flex-col justify-between w-7/12 min-h-screen bg-gradientLinear1">
              <div className="flex flex-col flex-1 md:p-14 xl:p-20 gap-14">
                <Header />
                <Article />
              </div>
              <Footer />
            </section>
            <section className="flex flex-1 w-5/12 min-h-screen">
              <Hero />
            </section>
          </main>
        </>
      ) : (
        <>
          <main className="flex flex-col justify-between w-full min-h-screen text-base font-custom bg-gradientLinear1">
            <section className="flex flex-col flex-1">
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
