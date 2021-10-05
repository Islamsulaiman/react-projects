import React from "react";
import { Tours } from "./Tours";
import { useGlobalContext } from "./context";

const url = "https://course-api.com/react-tours-project";
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
          {`${value} from context`}
          <Tours />
        </section>
      </main>
    </>
  );
};

export default App;
