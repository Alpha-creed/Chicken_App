import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter,HashRouter,Route,Routes} from 'react-router-dom'
import About from './components/About'
import Register from "./Pages/Regsiter";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={
                <Navbar>
        <Home/>
        </Navbar>
}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
