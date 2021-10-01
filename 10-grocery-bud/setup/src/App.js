import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //handle no name
      showAlert(true, "danger", "No name entered");
    } else if (name && isEdit) {
      //handle edit
      list.forEach((i) => {
        if (i.id === editID) {
          i.value = name;
        }
      });
      console.log(list);
      setName("");
    } else {
      showAlert(true, "success", "Item added");
      let newName = { id: new Date().getTime().toString(), value: name };
      setList([...list, newName]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearItems = () => {
    showAlert(true, "danger", "Clear List");
    setList([]);
  };

  const removeItem = (id) => {
    const newList = list.filter((i) => {
      return i.id != id;
    });
    showAlert(true, "danger", "Item removed");
    setList(newList);
  };

  const editItem = (id, value) => {
    setIsEdit(true);
    setName(value);
    setEditID(id);
  };

  return (
    <>
      <main className='grocery-container'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} getAlert={showAlert} />}
          <h3>Grocery Bud</h3>
          <input
            className='grocery-input'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='grocery-btn'>
            {isEdit ? "Edit" : "Submit"}
          </button>
        </form>
        {list.length > 0 && (
          <section>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button onClick={clearItems}>Clear List</button>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
