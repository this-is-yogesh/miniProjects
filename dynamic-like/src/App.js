import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { HeartIcon, SpinnerIcon } from './icons';

function App() {

  const [liked, setLiked] = useState(false)
   const [isPending, setIsPending] = useState(false)

   const actionfunction = async () => {
  try{
    setIsPending(!isPending)
    const response = await fetch("https://www.greatfrontend.com/api/questions/like-button",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({action: liked ? "like":"unlike"})
    })
  //action in stringify was mentioned
    
    if(!response.ok){
return
    }
    setLiked(!liked)
  }
  finally{
      setIsPending(false)
  }

  
}
  return (
    <div className="App">
<button onClick={actionfunction}
 className={`like-btn ${liked && "active-btn"}`}
 disabled={isPending}
 > 
{/* both classes , like button and active button together*/}
{isPending ? <SpinnerIcon/> :<HeartIcon/>}
{liked ? "Liked":"Like"}
</button>
    </div>
  );
}

export default App;
