import logo from './logo.svg';
import './App.css'; 
import Login from './components/login/login';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*"} element={<Login />}>
        </Route>
        <Route path={"/Restaurant"} element={<Restaurant/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
