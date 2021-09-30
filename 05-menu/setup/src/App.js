import React, { useState } from "react";
import Categories from "./Categories";

function App() {
  let [food, setFood] = useState("all");

  return (
    <>
      <main className='container'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
        <section>
          <button
            type='button'
            onClick={() => {
              setFood("all");
            }}
          >
            All
          </button>
          <button
            type='button'
            onClick={() => {
              setFood("breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            type='button'
            onClick={() => {
              setFood("lunch");
            }}
          >
            Lunch
          </button>
          <button
            type='button'
            onClick={() => {
              setFood("shakes");
            }}
          >
            Shakes
          </button>
        </section>
        <section>
          <Categories food={food} />
        </section>
      </main>
    </>
  );
}

export default App;
