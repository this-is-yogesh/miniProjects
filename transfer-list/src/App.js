
import './App.css';
import { useEffect, useState } from 'react';
import List from './List';
function App() {

  const [listA, setListA] = useState({
    React: false,
    Angular: true,
    Vue: true
  })

  const [listB, setListB] = useState({
    Javascript: false,
    HTML: true,
    CSS: true
  })

  const [count,setCount] = useState(0)
  const [sw,setSwitch] = useState(true)
  const transfer = (setListFrom, setListTo) => {
    setListTo({ ...listA, ...listB })
    setListFrom({})
  }
  const hasnoSelectedItem =(list)=>{
    for(let k in list){
      if(list[k])
      return false
    }
    return true

  }

  const bulkOpertaion=(list,setList)=>{
    let l = {...list};
    setSwitch(!sw);
    if(sw){
      for(let key in l){
        l[key] = true 
         }
    }else{
      for(let key in l){
        l[key] = false 
         }
    }
  
    setList(l)
  }
  const singleTransfer = (from, setFrom, to, setTo) => {
    const f = { ...from }
    const t = { ...to }
    for (let key in f) {
      if (f[key]) {
        to[key] = f[key]
        delete f[key];
      }
    }
    setTo(to)
    setFrom(f)

  }
  return (
    <div className='list'>
      <List list={listA} setList={setListA} bulk={bulkOpertaion} switch={sw}/>
      <div className='buttons'>
        <button onClick={() => transfer(setListA, setListB)}>{">>"}</button>
        <button onClick={() => singleTransfer(listA, setListA, listB, setListB)} 
        disabled = {hasnoSelectedItem(listA)}>{">"}</button>
        <button onClick={() => transfer(setListB, setListA)}>{"<<"}</button>
        <button onClick={() => singleTransfer(listB, setListB, listA, setListA)}
         disabled = {hasnoSelectedItem(listB)}
        >{"<"}</button>
      </div>
      <List list={listB} setList={setListB} bulk={bulkOpertaion}/>
    </div>
   
  );
}

export default App;
