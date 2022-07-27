import './App.css';
import Login from './components/Login';
import Home from "./components/Home"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page from './components/Page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}>

          </Route>
          <Route path='home' element={<Home/>}>
            
          </Route>
          <Route path='page' element={<Page/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
