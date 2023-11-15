
import './App.css';
import { useState } from 'react';
import Form from './Form';
import Table from "./Table"

// NO LINE BREAK AFTER RETURN
/* correct use of map and return -> array.map(()=>{
  return ()
})*/

function App() {
  const [rows, setRows] = useState("");
  const [cols, setCols] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    setRows(data.get("rows"))
    setCols(data.get("columns"))
  }
  return (
    <div className="App">
    <Form submitForm={submitForm}/>
    <Table rows={rows} cols={cols}/>
    </div>
  );
}

export default App;
