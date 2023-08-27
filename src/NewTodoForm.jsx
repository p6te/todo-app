import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;

    addTodo(newItem);

    setNewItem("");
  };

  return (
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          type="text"
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
