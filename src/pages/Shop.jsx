import React from 'react'
import data from '../Assets/new_collections'
import {Card, Nav} from 'react-bootstrap';
import '../pages/Shop.css'

import image1 from '../Assets/aa.jpg'
import image2 from '../webImages/banner4Westside.jpg'
import image3 from '../webImages/banner3Westside.jpg'
import image4 from '../webImages/banner1Westside.jpg'

const Shop = () => {

  return (
    <>

     {/* carousel */}

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="ImageCarousel1"/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="ImageCarousel2"/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="ImageCarousel3"/>
    </div>
    <div className="carousel-item">
      <img src={image4} className="d-block w-100" alt="ImageCarousel4"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" style={{color:"black"}} aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" style={{color:"black"}} aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      {/* Section 2 */}

      <div className="container section2" >


        <div className="row">
          <h1 className='text-center' style={{color:"rgb(100, 0, 102)"}}>Trending Now</h1>

          {
            data.slice(0, 4).map((cval, i) => {

              return (

                <div className="container col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6 col-6  d-inline-block" key={i}>

                  <Card style={{ border: "none" }} className="prodCard"  >
                    {/* <Link to={`/ProductInfo/${props.id}`}><Card.Img variant="top" src={prop.image} onClick={window.scrollTo(0,0)}/></Link>   */}
                  <a href='#'><Card.Img variant="top" src={cval.image}/></a>
                    <Card.Body>
                      <Card.Title className="prodName">{cval.name}</Card.Title>
                      <Card.Text>{cval.category}</Card.Text>
                      {/* <p className="prodName"> <strong><i className="fa fa-inr"></i> {cval.new_price}</strong>  <s className='ms-3'> <i className="fa fa-inr"></i> {cval.old_price}</s></p> */}
                    </Card.Body>
                  </Card>
                </div>

              )
            })
          }
          {/* <hr /> */}
        </div>
      </div>


      {/* subscribe now banner */}

      <section id="subscribe" className="padding-large ">
        <div className="container">
          <div className="row">
            <div className="block-text col-md-8">
              <div className="section-header">
                <h1 className="section-title mb-5">Get 25% off Discount Coupons</h1>
              </div>
            </div>
            <p className='prodName'> Use code "SAVE25STYLE" to refresh your wardrobe with a 25% discount! 👗👔 Subscribe below to claim your exclusive offer.
            </p>

            <div className="subscribe-content col-md-8 my-3">
              <form id="form" className="d-flex justify-content-between">
                <input type="text" id='subscribeForm' name="email" placeholder="Enter your email addresss here" />
                <button className="button col-md-3">Subscribe Now</button>
              </form>
            </div>
          </div>

        </div>

      </section>


    
    </>
  )
}

export default Shop