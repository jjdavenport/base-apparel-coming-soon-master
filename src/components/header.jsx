import data from "./assets/data.json";

const Header = () => {
  return (
    <>
      <header className="p-8 md:p-0">
        <img src={data.logo} />
      </header>
    </>
  );
};

export default Header;
