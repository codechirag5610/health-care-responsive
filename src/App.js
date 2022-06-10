
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home, Services, Experts, FindDoctor, About, Locations, Blogs, Career, ContactUs, PatientInfo, BillPay, Testimonials } from './containers/index.js';
import { Profiles, Service } from './components';
import { doctors, allServices, allInfos } from './api/data'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services allServices={allServices} />} />
          <Route path="experts" element={<Experts doctors={doctors} />} />
          <Route path='experts/profiles/:id' element={<Profiles doctors={doctors} />} />
          <Route path='services/service/:id' element={<Service allServices={allServices} />} />
          <Route path="finddoctor" element={<FindDoctor />} />
          <Route path="about" element={<About />} />
          <Route path="locations" element={<Locations />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="career" element={<Career />} />
          <Route path="payment" element={<BillPay />} />
          <Route path="patient" element={<PatientInfo allInfos={allInfos} />} />
          <Route path='patient/info/:id' element={<Service allInfos={allInfos} />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
