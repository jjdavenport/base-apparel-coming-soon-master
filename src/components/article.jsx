import data from "./assets/data.json";
import { useState } from "react";

const Article = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setError("empty");
      return false;
    } else if (!email.match(regex)) {
      setError("Invalid");
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
      <article className="flex flex-col flex-1 p-16 text-center gap-4">
        <h1 className="text-5xl uppercase">
          {data.h1}
          <span>{data.span}</span>
        </h1>
        <p>{data.p}</p>
        <form onSubmit={submit} className="flex items-center" noValidate>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={data.placeholder}
            className="bg-gradient-linear-1 w-full border-2 border-black rounded-full p-4"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button className="bg-gradient-linear-2 rounded-full p-4">
            <img src={data.icon} />
          </button>
        </form>
      </article>
    </>
  );
};

export default Article;
