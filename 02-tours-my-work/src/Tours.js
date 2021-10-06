import React from "react";
import { useGlobalContext } from "./context";
import { Tour } from "./Tour";

const Tours = () => {
  let { data, clearList, controller } = useGlobalContext();
  return (
    <>
      <section>
        <h1>Our Tours</h1>
        <hr />
      </section>
      <section>
        {data.map((i) => {
          let { id } = i;
          return (
            <article key={id}>
              <Tour {...i} />
            </article>
          );
        })}
      </section>

      {!controller.isEmptyData && (
        <button
          type='button'
          onClick={() => {
            clearList();
          }}
        >
          Clear List
        </button>
      )}
    </>
  );
};

export { Tours };
