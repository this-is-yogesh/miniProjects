import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [spclcharallowed, setspclcharallowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(
    function callback() {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberallowed) str += "1234567890";
      if (spclcharallowed) str += "~!@#$%^&*()_+";

      for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(char);
      }
      setPassword(pass);
    },
    [length, numberallowed, spclcharallowed]
  );
  useEffect(
    function effect() {
      passwordgenerator();
    },
    [length, numberallowed, spclcharallowed]
  );

  return (
    <>
      {" "}
      <div className="w-full text-orange-500 text-center max-w-md py-10 px-5 my-10 mx-auto bg-gray-800 shadow-md rounded-lg">
        <h1 className="text-center text-white">Password Generator </h1>
        <div className="flex rounded-lg shadow mb-4 gap-2">
          <input
            type="text"
            value={password}
            placeholder="Password"
            ref={passwordRef}
            readOnly
            className="w-full bg-black py-2 my-2 px-3 outline-none rounded-lg"
          />
          <button
            className="outline-none bg-blue-900 px-3 py-2 my-2 shrink-0 rounded-lg text-white"
            onClick={function copytoboard() {
              passwordRef.current?.select()
              window.navigator.clipboard.writeText(password);
            }}
          >
            {" "}
            Copy
          </button>
        </div>
        <div className="flex text-md gap-x-2 ">
          <div className="flex text-md items-center gap-x-1">
            <input
              min={8}
              max={99}
              value={length}
              type="range"
              className="cursor-pointer"
              onChange={(l) => setLength(l.target.value)}
            />
            <label> Length : {length}</label>
          </div>
          <div className="flex text-md items-center gap-x-1">
            <input
              defaultChecked={numberallowed}
              id="numberInput"
              type="checkbox"
              className="cursor-pointer"
              onChange={(l) =>
                setnumberallowed((prev) => {
                  return !prev;
                })
              }
            />
            <label htmlFor="numberInput"> Number</label>
          </div>
          <div className="flex text-md items-center gap-x-2">
            <input
              defaultChecked={spclcharallowed}
              id="charInput"
              type="checkbox"
              className="cursor-pointer"
              onChange={(l) =>
                setspclcharallowed((prev) => {
                  return !prev;
                })
              }
            />
            <label htmlFor="charInput"> Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
