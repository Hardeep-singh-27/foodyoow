import "./App.css";
import "./components/style.scss";
import Layout from "./components/Layout/Layout";
import { Routes,Route} from "react-router-dom";
import Login from "./components/Pages/login";
import NoPage from "./components/Pages/NoPage"
import SignUp from './components/Signup/SignUp'
import TestApp from "./components/Pages/testlogin";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="signup" element={<TestApp/>}/>
      <Route  path="dashboard" element={<Layout/>}>
     
       
      </Route>
      <Route path="*" element={<NoPage/>}/>

    </Routes>


  );
}

export default App;
