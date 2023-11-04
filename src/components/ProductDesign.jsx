import React from 'react'
import { useCart } from 'react-use-cart';


const ProductDesign = (props) => {

    const { addItem } = useCart();
    // console.log(addItem)

    const { product } = props;
    let prod = product[0]

    return (
        <>
            <section className="py-5 mt-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-5">
                            <div className=" rounded-4 mb-3 d-flex justify-content-center ">
                                <img style={{ maxWidth: "100vw", maxHeight: "100vh", margin: "auto" }} className="rounded-4 fit" src={prod.image} />
                            </div>
                            <div className="d-flex justify-content-center mb-3 ">
                                <img width="60" height="60" className="rounded-2 mx-2" src={prod.image} />
                                <img width="60" height="60" className="rounded-2 mx-2" src={prod.image} />
                                <img width="60" height="60" className="rounded-2 mx-2" src={prod.image} />
                                <img width="60" height="60" className="rounded-2 mx-2" src={prod.image} />
                                <img width="60" height="60" className="rounded-2 mx-2" src={prod.image} />
                            </div>
                        </aside>
                        <main className="col-lg-7">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark prodName">
                                    {prod.name}
                                </h4>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="ms-1">
                                            4.5
                                        </span>
                                    </div>
                                    <span className="text-muted prodName"><i className="fas fa-shopping-basket fa-sm mx-1" ></i>154 orders</span>
                                    <span className="text-success ms-2 prodName">In stock</span>
                                </div>
                                <div className="mb-3">
                                    <h5 className="prodName"> <strong><i className="fa fa-inr"></i> {prod.new_price}</strong>  <s className='ms-3'> <i className="fa fa-inr"></i> {prod.old_price}</s> </h5>
                                </div>
                                <p className='prodName'>
                                    Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                                    men.
                                </p>
                                <div className="row prodName">
                                    <dt className="col-3">Type:</dt>
                                    <dd className="col-9">Regular</dd>

                                    <dt className="col-3">Material</dt>
                                    <dd className="col-9">Cotton</dd>

                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">Anonymous</dd>
                                </div>

                                <hr />

                                <div className="row mb-4 prodName">
                                    <div className="col-md-7 col-6">
                                        <label className="mb-2">Size</label>
                                        <select className="form-select border border-secondary" style={{ height: "35px" }}>
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                        </select>
                                    </div>
                                </div>
 
                                <button className="btn btn-warning shadow-0 me-2 px-5 prodName" onClick={() => addItem({id: prod.id,
                                                                                name: prod.name,
                                                                                price: prod.new_price,
                                                                                image: prod.image,
                                                                                
                                                                                })}> Add to cart</button>                      
                         {/* 
                                <Link to="/cart" className="btn btn-warning shadow-0 me-2 px-5" onClick={() => addItem({
                                    id: prod.id,
                                    name: prod.name,
                                    price: prod.new_price   

                                })} > Add to cart </Link> */}
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDesign