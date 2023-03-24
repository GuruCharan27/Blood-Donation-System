import { Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateComponent from './Components/UpdateComponent';
import ViewByIdComponent from './Components/ViewByIdComponent';
import Home from './Pages/Home';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path='/update' element={<UpdateComponent /> } />
      <Route path='/view' element={<ViewByIdComponent /> } />
     </Routes>
    </div>
  );
}

export default App;
