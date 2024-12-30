import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");         // To hold the input text
  const [todos, setTodos] = useState([]);       // To hold the list of todos

  const handleChange = (event) => {
    setText(event.target.value);  // Update the text state as user types
  };

  const handleAddTodo = () => {
    if (text.trim()) {  // Only add the todo if there is some text
      setTodos([...todos, text]);  // Add the new todo to the list
      setText("");  // Clear the input field
    }
  };

  return (
            <div className="p-9 flex flex-col">

                  <h1 className="text-lg font-bold mb-4 text-white">Todo</h1>
                  <div>
                    <ul id="listcontainer" className="space-y-2">
                      {todos.map((todo, index) => (
                        <li key={index} className="mb-2 p-2 border border-gray-300 rounded-lg shadow-sm">
                          {todo}
                        </li>
                      ))}
                    </ul>

                    <div className="mb-6">
                      <input
                        type="text"
                        id="input"
                        value={text}
                        onChange={handleChange} // Update the input value when the user types
                        className="bg-green-50 border border-gray-400 text-green-900 dark:text-gray-400 placeholder-gray-400 dark:placeholder-gray-400 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2 dark:bg-gray-700 dark:border-gray-400"
                        placeholder="Enter a new todo"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleAddTodo} // Handle button click to add the todo
                      className= " text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Add Todo
                    </button>
                  </div>

              </div>
  );
}

export default Home;
