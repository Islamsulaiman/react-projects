import React from "react";
import items from "./data";

const Menu = (food) => {
  const choice = food.food.food;

  if (choice === "all") {
    return (
      <>
        {items.map((item) => {
          const { id, title, category, price, img, desc } = item;
          return (
            <React.Fragment key={id}>
              <article key={id}>
                <section>
                  <img src={img} alt={title} />
                </section>
                <section>
                  <h4>{title}</h4>
                  <h4>{price}</h4>
                  <br />
                  <p>{desc}</p>
                </section>
              </article>
            </React.Fragment>
          );
        })}
      </>
    );
  } else {
    let targetItems = items.filter((item) => {
      return item.category === choice;
    });
    return (
      <>
        {targetItems.map((item) => {
          const { id, title, category, price, img, desc } = item;
          return (
            <React.Fragment key={id}>
              <section>
                <img src={img} alt={title} />
              </section>
              <section>
                <h4>{title}</h4>
                <h4>{price}</h4>
                <br />
                <p>{desc}</p>
              </section>
            </React.Fragment>
          );
        })}
      </>
    );
  }
};

// const { id, title, category, price, img, desc } = items;

export default Menu;
