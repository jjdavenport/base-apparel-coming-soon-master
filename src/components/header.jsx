import data from "./assets/data.json";

const Header = () => {
  return (
    <>
      <header>
        <img src={data.logo} />
      </header>
    </>
  );
};

export default Header;
