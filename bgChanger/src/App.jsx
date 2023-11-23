import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center px-3 gap-3 ">
        <div className="fixed flex flex-wrap bg-white justify-center bottom-10 gap-7 p-4 rounded-3xl">
          <button
            className="text-black outline-none rounded-xl bg-blue-900 "
            onClick={() => setColor("blue")}
          >
            {" "}
            blue
          </button>
          <button
            className="text-black  outline-none rounded-xl bg-green-700"
            onClick={() => setColor("green")}
          >
            {" "}
            green
          </button>
          <button
            className="text-black  outline-none rounded-xl bg-yellow-500"
            onClick={() => setColor("yellow")}
          >
            {" "}
            yellow
          </button>
          <button
            className="text-black  outline-none ruounded-xl bg-purple-700"
            onClick={() => setColor("purple")}
          >
            {" "}
            purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
