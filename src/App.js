import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<LoginPage />}> </Route>
        <Route path='/home' element= {<LandingPage />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
