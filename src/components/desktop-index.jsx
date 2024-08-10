import Logo from "./assets/images/logo.svg";
import Hero from "./assets/images/hero-desktop.jpg";
import Arrow from "./assets/images/icon-arrow.svg";

const DesktopIndex = () => {
  return (
    <>
      <main className="flex bg-gradient-linear-1 font-custom">
        <section className="flex flex-col">
          <header className="p-10">
            <img src={Logo} alt="" />
          </header>
          <article className="flex flex-col flex-1 p-16 text-center gap-4">
            <h1 className="text-5xl uppercase">We're coming soon</h1>
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gradient-linear-1 w-full border-2 border-black rounded-full p-4"
              />
              <button className="bg-gradient-linear-2 rounded-full p-4 hover:bg-gradient-linear-1">
                <img src={Arrow} alt="" />
              </button>
            </form>
          </article>
        </section>
        <img src={Hero} alt="" />
      </main>
    </>
  );
};

export default DesktopIndex;
