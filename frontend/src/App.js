import logo from './logo.svg';
import './App.css';
import Name from './Name/myName';
import Clock from './Clock/time';
import StarPattern from './Pattern-1/pattern';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import StarPattern2 from './Pattern-2/pattern';
import Counter from './Counter/simpleCounter';
import TemperatureConverter from './tempConverter/converter';
import Home from './Home/home';
function App() {
  return (
   <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/name' element={<Name/>}/>
            <Route path='/time' element={<Clock/>}/>
            <Route path='/p1' element={<StarPattern rows={5}/>}/>
            <Route path='/p2' element={<StarPattern2 rows={5}/>}/>
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/temp' element={<TemperatureConverter/>}/>
          </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
