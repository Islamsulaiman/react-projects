import React from "react";
import { useGlobalContext } from "./context";

const Tour = () => {
  let { data } = useGlobalContext();
  console.log(data);
  return <article>hello</article>;
};

export { Tour };
