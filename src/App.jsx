import "./App.css";
import Footer from "./components/footer";
import { useMediaQuery } from "react-responsive";
import Hero from "./components/hero";
import Article from "./components/article";
import Header from "./components/header";

function App() {
  const desktop = useMediaQuery({ query: 768 });
  return (
    <>
      <div className="flex flex-col justify-between">
        {desktop ? (
          <>
            <Header />
            <Hero />
            <Article />
          </>
        ) : (
          <>
            <Header />
            <Hero />
            <Article />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
