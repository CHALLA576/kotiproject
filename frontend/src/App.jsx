import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Loginpage";
import Register from "./components/Registerpage";
import Home from "./components/Navbar/Home";
import Home1 from "./components/Home/Home1";
import Crearpage from "./components/crear/Crearpage";
import Gallery from "./components/Gallery/Gallery";
import Feedback from "./components/feedback/Feedback";
import App1 from "./components/Imagemongodb/App1";






const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Login/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/Home1" element={<Home1/>}/>
                <Route path="/Crearpage" element={<Crearpage/>}/>
                <Route path="/Gallery" element = {<Gallery/>} />
                <Route path="/feedback" element = {<Feedback/>} />
                <Route path="/api/images" element = {<App1/>} />
                <Route path="/api/upload" element = {<App1/>} />
            </Routes>
            </BrowserRouter>
          
         


           

        </div>
    )
}
export default App