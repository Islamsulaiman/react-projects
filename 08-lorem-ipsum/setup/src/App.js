import React, { useState } from "react";
import data from "./data";
function App() {
  let [num, setNum] = useState(0);
  let [para, setPara] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = [];
    for (let i = 1; i <= num; i++) {
      newData.push(data[i]);
    }
    setPara(newData);
  };
  return (
    <>
      <main>
        <h3>Tired of Lorem Ipsum?</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='counter'>Paragraphs: </label>
          <input
            type='number'
            name='counter'
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <button type='submit' className='btn'>
            Generate
          </button>
        </form>
      </main>
      <section>
        {para.map((i) => {
          return (
            <React.Fragment>
              <p>{i}</p>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
}

export default App;
