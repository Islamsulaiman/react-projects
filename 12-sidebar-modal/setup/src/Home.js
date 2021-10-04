import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

import { useGlobalExport } from "./context";

const Home = () => {
  const massage = useGlobalExport();
  console.log(massage);

  return <h2> {`${massage} from Home`} </h2>;
};

export default Home;
