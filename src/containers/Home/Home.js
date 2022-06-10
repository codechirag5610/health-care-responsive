import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navbar, Slider, Appointment, Info, Services, Doctors, Testimonials, FindCare, Blog, Footer } from '../../components/index.js'
import { doctors } from "../../api/data";

const Home = () => {
  const [appointments, setAppointments] = useState([{name: 'Chirag', email:'sharmachirag465@gmail.com', service:'cardio', date: 5/5/2022, id: 1},]);
  let navigate = useNavigate();
  const isVisible = true;
  const initialDoctors = doctors.slice(0, 3)
  const handleClick = () => {
      navigate("/experts", { replace: true});
  }

  const addAppointment = (appointment) => {
    appointment.id = Math.random();
    let appts = [...appointments, appointment];
    setAppointments(
      appts
    )
  };
  return (
    <div>
        <Navbar />
        <Slider />
        <Appointment addAppointment={addAppointment} />
        <Info />
        <Services />
        <Doctors handleClick={handleClick} doctors={initialDoctors} isVisible={isVisible} />
        <Testimonials />
        <FindCare />
        <Blog /> 
        <Footer />
    </div>
  )
}

export default Home