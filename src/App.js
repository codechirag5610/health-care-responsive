import { useState } from 'react';
import './App.css';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Slider from './components/Slider';

function App() {
  const [appointments, setAppointments] = useState([{name: 'Chirag', email:'sharmachirag465@gmail.com', service:'cardio', date: 5/5/2022, id: 1},]);

  const addAppointment = (appointment) => {
    appointments.id = Math.random();
    let appts = [...appointments, appointment];
    setAppointments(
      appts
    )
  };

  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Appointment addAppointment={addAppointment} />
      <Info />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
