import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
