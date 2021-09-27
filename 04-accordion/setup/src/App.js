import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <>
      <main className='container'>
        <section>
          <h2>Questions And Answers About Login</h2>
        </section>
        <section>
          {data.map((q) => {
            return <SingleQuestion key={q.id} {...q} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
