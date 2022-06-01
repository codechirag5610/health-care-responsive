import React from 'react'
import { Navbar, PageName, Footer, } from '../../components'
import './BillPay.css'

const BillPay = () => {
    const details = [
        {id: 1, name: "Please enter your mobile number", class: "mobileNo"},
        {id: 1, name: "Please enter your account number", class: "accountNo"},
        {id: 1, name: "Please enter amount", class: "amount"},
    ]
    const pageHeading = "PAY your bill online"
  return (
    <div>
        <Navbar />
        <PageName pageHeading={pageHeading} />
        <section className="paymentFormContainer">
            <div className="formHeading"><h3>MAKE A PAYMENT</h3></div>
            <div className="formDescription"><p>Please fill out the information below 
                to get started with your online payment. If you have any questions 
                about your bill or the past due amount, please contact the Patient 
                Financial Services office at (561) 223-1234 
                Monday through Friday from 8 a.m. to 5 p.m.</p>
            </div>
            <div className="form">
                <form action="">
                    <div className="inputs">
                        {details.map(detail => {
                            return(
                                <div className="input" key={detail.id}>
                        <label htmlFor="">{detail.name}</label>
                        <input type="text" className='billInput' />
                        </div>
                            )
                        })}
                    </div>
                    <div className="buttons">
                        <button className='continue'>Continue</button>
                        <button className='reset'>Reset</button>
                    </div>
                </form>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default BillPay