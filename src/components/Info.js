import React from 'react'
import './Info.css'
import { useNavigate } from 'react-router-dom';
import bed from '../Assets/bedlogo.jpg'
import volun from '../Assets/volulogo.jpg'
import doctor from '../Assets/doctorlogo.jpg'
import id from '../Assets/idlogo.jpg'

const Info = () => {
    let navigate = useNavigate();
    const howMuch = [
        {id: 1, name: "Beds", amount: "800+", src: bed},
        {id: 2, name: "Team Members", amount: "1200+", src: id},
        {id: 3, name: "Doctors", amount: "550+", src: doctor},
        {id: 4, name: "Volunteers", amount: "600+", src: volun},
    ]
  return (
    <div className='infoContainer2'>
        <div className="information">
            <div className="heading"><h1>THE RIGHT CARE. RIGHT NOW.</h1></div>
            <div className="description">
                <p>
                Multiply very years also midst fill fruitful you're moving day. 
                Were without man replenish. 
                Air the, is was moveth gathering you're rule called let spirit ughf brought 
                green forth so cattle waters stars there she'd moveth. 
                Thing years have firmament upon first subdue blessed sea stars spirit said. Evening you're them.
                </p>
                <p>
                Have saw replenish saw made bring creature whales darkness evening 
                own without fowl waters land beginning great firmament. 
                I Hath there without fowl third. Moveth bring years. 
                Night seed whales you. Midst gathering given.
                </p>
            </div>
            <div className="stats">
                {howMuch.map(how => { return(
                    <div id={how.id} className="stat">
                        <img src={how.src} alt={how.name} />
                        <p className='numbers'>{how.amount}</p>
                        <p className="subjects">{how.name}</p>
                    </div>    
                )})}
            </div>
        </div>
        <div className="contactInformation">
            <div className="heading2">
                <h2>NEED AN EMERGENCY HELP?</h2>
                <h2>CALL US!</h2>
            </div>
            <div className="number"><strong>+61 (0) 383 766 284</strong></div>
            <div className="hrline"></div>
            <div className="description2"><p>
                    Day can't. Very living lesser multiply the herb, fly. 
                    Brought over us seasons greater, land sea, the created gathered bring spirit 
                    whose upon years fruitful third dominion cattle midst night morning bring.
                </p></div>
            <div className="contactbutt"><button onClick={() => {navigate("contact", {replace: true})}}>CONTACT US</button></div>
        </div>
    </div>
  )
}

export default Info