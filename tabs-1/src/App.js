import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tabs, setTabs] = useState("HTML")
  let Tabs = [{ label: "HTML", content: "this is HTML content" }
    , { label: "CSS", content: "this is CSS content" },
  { label: "Javascript", content: "this is javascript content" }]

  return (
    <div className="App">
      <div>
        {Tabs.map((t) => (
          <button onClick={() => setTabs(t.label)} className={t.label === tabs && "active"}> {t.label} </button>
        ))}
      </div>
      <div>
        {Tabs.map((t) => (<p>{t.label === tabs && t.content} </p>))}
      </div>

    </div>
  );
}

export default App;
