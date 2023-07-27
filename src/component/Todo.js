import { observer } from "mobx-react";
import { createStore } from "../store/CreateStore";
import { useEffect, useState } from "react";

const Todo = observer(() => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length >= 0) {
      setError("");
      setTitle(e.target.value);
    } else {
      setError("Please fill this");
    }
  };
  
  const submitData = () => {
    if (!title) {
      setError("Required*");
    } else {
      if (createStore.id) {
        createStore.updateData(createStore.id, title);
        createStore.id = "";
      } else {
        createStore.addData(title);
      }
      setTitle("");
    }
  };

  const editR = (index) => {
    createStore.EditData(index);
  };

  const deleteR = (index) => {
    createStore.deleteData(index);
  };

  useEffect(() => {
    if (createStore.id) {
      setTitle(createStore.editable_data);
    }
  }, [createStore.id]);

  return (
    <>
      <h1>{createStore.secondsPassed}</h1>
      <input
        type="text"
        placeholder="Enter_title"
        value={title}
        onChange={handleChange}
      />
      <p style={{ color: "tomato" }}>{error}</p>
      <button onClick={submitData}>
        {createStore.id ? "update" : "submit"}
      </button>
      <div>
        {createStore.data?.map((item, index) => (
          <p key={index}>
            {item} - <button onClick={() => editR(index + 1)}>Edit</button>
            <button onClick={() => deleteR(index)}>delete</button>
          </p>
        ))}
      </div>
    </>
  );
});

export default Todo;
