import './App.css';

import ReactDOM from "react-dom";
import {InputForm} from "./Components/AddData"
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import Show from "./Components/ShowData"
export default function App() {
  return (
    <BrowserRouter>
      <div className='navbar'>
        <Link to="/add-country">Add data</Link>
        <Link to="/">All Data</Link>
      </div>
      <Routes>
        <Route path="/show" element={<Show />}>
        </Route>
          <Route path="/add-country" element={<InputForm />} /> 
     </Routes>
    </BrowserRouter>
  );
}


