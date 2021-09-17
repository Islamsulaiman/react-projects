import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  let [people, setPeople] = useState(data);

  return (
    <>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          let { id, name, age, image } = person;
          return (
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>
                  <h5>{age} years</h5>
                </p>
              </div>
            </article>
          );
        })}
        <button type='button' onClick={() => setPeople([])}>
          Clear All
        </button>
        ;
      </section>
    </>
  );
}

export default App;
