import data from "./assets/data.json";
import { useState } from "react";

const Article = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setError("Please provide an email address");
      return false;
    } else if (!email.match(regex)) {
      setError("Please provide a valid email address");
      return false;
    } else {
      setError("");
      setEmail("");
      return true;
    }
  };

  const submit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <>
      <article className="flex flex-col flex-1 p-10 md:p-0 py-14 lg:w-10/12 xl:w-7/12 text-center gap-8 md:text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl uppercase flex flex-col tracking-widest md:text-7xl font-light text-desaturatedRed">
            {data.h1}
            <span className="text-black font-semibold">{data.span}</span>
          </h1>
          <p className="text-desaturatedRed font-normal">{data.p}</p>
        </div>
        <form onSubmit={submit} className="flex items-start" noValidate>
          <div className="flex flex-col gap-2 w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={data.placeholder}
              className={`${
                error
                  ? "outline-2 outline outline-softRed bg-no-repeat bg-customBg bg-error"
                  : "outline outline-1 outline-desaturatedRed"
              }   bg-gradient-linear-1 w-full h-16 font-normal placeholder:text-desaturatedRed md:pl-8 rounded-full p-4`}
            />
            {error && (
              <p className="text-red-500 text-left pl-4 h-10 font-normal">
                {error}
              </p>
            )}
          </div>
          <button className="bg-gradientLinear2 transform ease-in-out duration-300 hover:opacity-40 rounded-full -ml-20 p-4 w-20 h-16 flex justify-center items-center">
            <img src={data.icon} />
          </button>
        </form>
      </article>
    </>
  );
};

export default Article;
