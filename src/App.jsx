import logo from './logo.svg';
import './App.css';
import {Main} from "../src/Components/Main"
import {Marvel} from "../src/Components/Marvel"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/:id" element={<Marvel/>}/>
    </Routes>
    </div>
  );
}

export default App;
