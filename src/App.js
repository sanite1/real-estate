// import CardT from "./Components/Card";
import Navbar from "./Components/Navbar";
import Project from "./Components/Projects";
import Details from "./Components/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"




function App() {

    const year = new Date().getFullYear()

    return (
        <div className="App">
          <div className="">
            
            <Navbar />
            <Router>
                <Routes>
                  <Route exact path="/" element={<Project/>} />
                  <Route exact path="/:id" element={<Details />} />
                  
                
                </Routes>
            </Router>
          </div>
          <div className="footer">
              <a href="/" className="txt">Copyright {year}. Biteville Technologies</a>
          </div>
        </div>
    );
}
  
export default App;