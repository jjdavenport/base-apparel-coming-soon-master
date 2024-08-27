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
      <article className="flex flex-1 flex-col gap-8 p-10 py-14 text-center md:p-0 md:text-left lg:w-10/12 xl:w-7/12">
        <div className="flex flex-col gap-4">
          <h1 className="flex flex-col text-5xl font-light uppercase tracking-widest text-desaturatedRed md:text-7xl">
            {data.h1}
            <span className="font-semibold text-black">{data.span}</span>
          </h1>
          <p className="font-normal text-desaturatedRed">{data.p}</p>
        </div>
        <form onSubmit={submit} className="flex items-start" noValidate>
          <div className="flex w-full flex-col gap-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={data.placeholder}
              className={`${
                error
                  ? "bg-error bg-customBg bg-no-repeat outline outline-2 outline-softRed"
                  : "outline outline-1 outline-desaturatedRed"
              } bg-gradient-linear-1 h-16 w-full rounded-full p-4 font-normal placeholder:text-desaturatedRed md:pl-8`}
            />
            {error && (
              <p className="h-10 pl-4 text-left font-normal text-red-500">
                {error}
              </p>
            )}
          </div>
          <button className="-ml-20 flex h-16 w-20 transform items-center justify-center rounded-full bg-gradientLinear2 p-4 duration-300 ease-in-out hover:opacity-40">
            <img src={data.icon} />
          </button>
        </form>
      </article>
    </>
  );
};

export default Article;
