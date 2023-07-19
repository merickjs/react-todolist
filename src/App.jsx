import { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const handleDeleteTask = (index) => {
    setMessage((prev) => prev.filter((item, i) => i != index));
  };
  return (
    <div className="container">
      <h1 className="title"> A To-Do-List!</h1>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="Todoinput"
          type="text"
          placeholder="What's your tasks today?"
        />
        <button
          onClick={() => {
            if (text.trim() != "") {
              setMessage((prev) => [...prev, text], setText(""));
            }
          }}
          className="AddBtn"
        >
          Add
        </button>
        <button onClick={() => setMessage([])} className="ClearBtn">
          Clear
        </button>
      </form>

      <ul className="tasklist">
        {message.length > 0}
        {message.map((msg, i) => (
          <li className="task" key={i}>
            <p>{msg}</p>
            <svg
              onClick={() => handleDeleteTask(i)}
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
