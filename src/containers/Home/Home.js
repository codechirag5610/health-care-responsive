import { useState } from 'react';
import { Navbar, Slider, Appointment, Info, Services, Doctors, Testimonials, FindCare, Blog, Footer } from '../../components/index.js'

const Home = () => {
  const [appointments, setAppointments] = useState([{name: 'Chirag', email:'sharmachirag465@gmail.com', service:'cardio', date: 5/5/2022, id: 1},]);

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
        <Doctors />
        <Testimonials />
        <FindCare />
        <Blog /> 
        <Footer />
    </div>
  )
}

export default Home