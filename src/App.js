// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { AddCountry } from './pages/AddCountry';
import { EditCountry } from './pages/EditCountry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path= "/" element={<Home/>}/>
        <Route exact path= "/addcountry" element={<AddCountry/>}/>
        <Route exact path= "/editcountry/:id" element={<EditCountry/>}/>
      </Routes>
    </div>
  );
}

export default App;
