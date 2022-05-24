
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home, Services, Experts, FindDoctor, About, Locations, Blogs, Career } from './containers/index.js';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="experts" element={<Experts />} />
          <Route path="finddoctor" element={<FindDoctor />} />
          <Route path="about" element={<About />} />
          <Route path="locations" element={<Locations />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
