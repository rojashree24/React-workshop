import logo from './logo.svg';
import './App.css'; 
import Login from './components/login/login';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*"} element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
