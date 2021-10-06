import React from "react";
import { Tours } from "./Tours";
import { Loading } from "./Loading";
import { useGlobalContext } from "./context";

const App = () => {
  const { data, controller } = useGlobalContext();

  return (
    <>
      <main>
        <section>{controller.isLoading ? <Loading /> : <Tours />}</section>
      </main>
    </>
  );
};

export default App;
