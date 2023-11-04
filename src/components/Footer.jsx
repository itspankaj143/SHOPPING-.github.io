import React from 'react'
import './Footer.css'
import luxeThreads from '../webImages/luxethreads-white-transparent.png'


const Footer = () => {
  return (
    <>
      <div className="container-fluid col-12 footer mt-5 bottom-0 p-5 ">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-xs-6 col-sm-6 col-xxs-6 mt-3 ">
            <img src={luxeThreads} alt="luxeThreads" className='img-fluid' style={{ height: "5vh" }} />
            <p className='prodName mt-3'><span style={{ color: "violet", fontWeight: 'bold' }}>"LuxeThreads"</span> is a high-end clothing brand that specializes in providing exquisite, luxurious, and finely crafted garments for the discerning and fashion-forward individual.  </p>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-xs-6 col-sm-6 mt-5 ">
            <h6>Shipping Information:</h6>
            <p>Track Your Order</p>
            <p>Shipping Policy</p>
            <p>Return & Exchange</p>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-xs-6 col-sm-6 mt-5 ">
            <h6> Customer Support:</h6>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Accessories</p>
            <p>Size Guide</p>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-xs-6 col-sm-6 mt-5 " >
            <h6>Shop Securely:</h6>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Payment Options</p>
          </div>
          <hr />

          <p className='text-center '>&copy; anurag_dambale </p>

        </div>
      </div>
    </>
  )
}

export default Footer