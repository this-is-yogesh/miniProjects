import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import StarRating from './StarRating';

function App() {
  const [currentRating, setCurrentRating] = useState(3)

  return (
    <div className="App">

      <StarRating maxStars={5} currentRating={currentRating}
       setCurrentRating={setCurrentRating} />
    </div>
  );
}

export default App;
