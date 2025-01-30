import logo from './logo.svg';
import './App.css';
import Name from './Name/myName';
import Clock from './Clock/time';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
   <>
      <BrowserRouter>
          <Routes>
            <Route path='/name' element={<Name/>}/>
            <Route path='/time' element={<Clock/>}/>
          </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
