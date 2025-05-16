import { useState } from "react";
export default function Form({ Todos, settodos }) {
  // const [Todo, settodo] = useState("");
  const [Todo, settodo] = useState({name: "",done:false});
  function HandleSubmit(e) {
    e.preventDefault();
    settodos([...Todos, Todo]);
    settodo({name: "",done:false});
  }
  return (
    <form
      onSubmit={HandleSubmit}
      className="bg-white-500 mt-[50px] mx-auto p-[20px] w-[500px] rounded shadow"
    >
      <div className="flex">
        <input
          className=" w-full rounded outline-none focus-none "
          type="text"
          placeholder="Enter Todo Item..."
          onChange={(e) => settodo({name:e.target.value,done:false})}
          value={Todo.name}
        />
        <button
          className="cursor-pointer bg-yellow-400 p-3 w-20 text-white hover:bg-yellow-300 rounded shadow"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
