import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <>
      {items.map((item) => {
        let { id, value } = item;
        return (
          <article key={id}>
            <div>
              <p>{value}</p>
              <button
                onClick={() => {
                  editItem(id, value);
                }}
              >
                <FaEdit />
              </button>
              <button
                onClick={() => {
                  removeItem(id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
