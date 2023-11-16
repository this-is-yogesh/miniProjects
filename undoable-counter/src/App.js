
import './App.css';
import { useState } from 'react';
import Button from './Button';
import Table from './Table';

function App() {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const [undoHistory, setundoHistory] = useState([])

  const OPERATION_LABEL = {
    "/2": { type: "divide", number: 2 },
    "-1": { type: "decrement", number: 1 },
    "+1": { type: "increment", number: 1 },
    "x2": { type: "muliply", number: 2 },
  }

  function doOpr(o) {
    switch (o.type) {
      case "divide":
        return counter / o.number

      case "decrement":
        return counter - o.number

      case "increment":
        return counter + o.number

      case "muliply":
        return counter * o.number

      default:

    }
  }
  function Operation(opr) {
    const oldCounter = counter;
    const newCounter = doOpr(OPERATION_LABEL[opr])
    setCounter(newCounter)
    const newHistory = { opr, oldCounter, newCounter }
    setHistory([newHistory, ...history])
  }
  function Reset() {
    setCounter(0);
    setundoHistory([]);
    setHistory([]);
  }
  function Undo() {
    const [latest, ...earlierHistory] = history; //greatway to destructure
    setCounter(latest.oldCounter);
    setundoHistory([latest, ...undoHistory]);
    setHistory(earlierHistory)

  }
  function Redo() {
    const [latest, ...eh] = undoHistory;
    setCounter(latest.newCounter);
    setundoHistory(eh);
    setHistory([latest, ...history])
  }
  return (
    <>
      <Button counter={counter} Operation={Operation} Undo={Undo} history={history}
        Redo={Redo} undoHistory={undoHistory} Reset={Reset}
      />
      <Table history={history} />
    </>
  );
}

export default App;
