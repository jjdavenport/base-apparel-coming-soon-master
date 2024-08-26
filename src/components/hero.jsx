import data from "./assets/data.json";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <img
        className="w-full md:h-full md:object-cover"
        src={desktop ? data.heroDesktop : data.heroMobile}
      />
    </>
  );
};

export default Hero;
