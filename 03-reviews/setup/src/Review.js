import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [index, setIndex] = useState(0);

  return (
    <main>
      <section>
        <FaQuoteRight />
        <img src={people[index].image} alt={people[index].name} />
      </section>
      <h5>{people[index].name}</h5>
      <h5>{people[index].job}</h5>
      <p>{people[index].text}</p>
      <FaChevronLeft
        onClick={() => {
          if (index >= 1) {
            setIndex(index - 1);
          } else {
            setIndex(people.length - 1);
          }
        }}
      />
      <FaChevronRight
        onClick={() => {
          if (index <= people.length - 2) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
      />
      <button>Surprise me</button>
    </main>
  );
};

export default Review;
