import React from "react";
import { Tours } from "./Tours";
import { Tour } from "./Tour";

const url = "https://course-api.com/react-tours-project";
const App = () => {
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
