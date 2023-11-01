import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Container from './Container';
import Hello from './Hello';

function App() {
  
const [id, setId] = useState(0)

// useEffect(()=>{
//   setInterval(() => {
//     console.log("set interval")
//     setId(id+1)
//   }, 1000);
// })
  // const useCounter = (initialValue)=>{
  //   const [count,setCount] = useState(initialValue)
  //     const increment = () =>{
  //       setCount(count+1)
  //     }
  //     const decrement = () =>{
  //       setCount(count-1) 
  //     }
  //     const reset = () =>{
  //       setCount(initialValue)
  //     }
  //     return {count,increment,decrement,reset} 
  //   }

  // const {count,increment,decrement,reset}= useCounter(0)
  const SampleComponent = Container(Hello)

  return (
  
    <div className="App">
     {/* <h1>{count}</h1>
     <button onClick={increment}>increment </button>
     <button onClick={decrement}>decrement </button>
     <button onClick={reset}>reset </button>
     <Parent id={id} salary={1000}/> */}
<SampleComponent />
    </div>
  );
}

export default App;
