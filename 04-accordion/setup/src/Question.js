import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [key, setKey] = useState(false);

  return (
    <>
      <article>
        <h4>{title}</h4>
        <button
          className='btn'
          onClick={() => {
            setKey(!key);
          }}
        >
          {key ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {key && <p>{info}</p>}
      </article>
    </>
  );
};

export default Question;
