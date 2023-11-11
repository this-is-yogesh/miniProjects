import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <div style={{margin:"10px",display:"flex",justifyContent:"center",gap:"10px",size:"20px"}}> 
       <button onClick={()=>setCount(count+1)}> 
increment
 </button>
 <button onClick={()=>setCount(count-1)}> 
decrement
 </button>
 </div>
 <div style={{margin:"10px"}}> 
  {count}
 </div>
    </div>
  );
}

export default App;
