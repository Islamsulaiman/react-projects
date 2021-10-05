import React from "react";
import { Tours } from "./Tours";
import { useGlobalContext } from "./context";

const App = () => {
  const value = useGlobalContext();
  return (
    <>
      <main>
        <section>
          <h1>Our Tours</h1>
          <hr />
        </section>
        <section>
          <Tours />
        </section>
      </main>
    </>
  );
};

export default App;
