import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';
import Books from './components/Books/Books';
const books = [
  { name: 'Small Gaint', author: 'Solim Ullah' },
  { name: 'Buld to sell', author: 'Mumoin' },
  { name: 'K A Call', author: 'Jhon son' }
]

function App() {
  const [steps, setSteps] = useState(0);
  const handleIncriseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  }
  useEffect(() => {
    console.log(steps)
  }, [steps])
  return (
    <div style={{ border: "2px solid black", margin: "10px", padding: "5px" }} className="App">
      <h2>App.js</h2>
      <h4>My Steps: {steps}</h4>
      <button onClick={handleIncriseSteps}>Walk</button>
      <Device name="Phone" steps={steps} price="13000" />
      <Books books={books} />
    </div>
  );
}

export default App;
