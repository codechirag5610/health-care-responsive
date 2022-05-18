import React from 'react'
import './Info.css'
import bed from '../Assets/bedlogo.jpg'
import volun from '../Assets/volulogo.jpg'
import doctor from '../Assets/doctorlogo.jpg'
import id from '../Assets/idlogo.jpg'

const Info = () => {
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
                <div className="stat">
                    <img src={bed} alt="bed" />
                    <p className='numbers'>800+</p>
                    <p className="subjects">Beds</p>
                </div>
                <div className="stat">
                    <img src={id} alt="members" />
                    <p className='numbers'>1200+</p>
                    <p className="subjects">Team Members</p>
                </div>
                <div className="stat">
                    <img src={doctor} alt="doctors" />
                    <p className="numbers">550+</p>
                    <p className="subjects">Doctors</p>
                </div>
                <div className="stat">
                    <img src={volun} alt="volunteers" />
                    <p className="numbers">600+</p>
                    <p className="subjects">Volunteers</p>
                </div>
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
            <div className="contactbutt"><button>CONTACT US</button></div>
        </div>
    </div>
  )
}

export default Info