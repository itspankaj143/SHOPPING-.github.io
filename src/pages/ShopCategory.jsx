import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import ProductItem from '../ProductItem/ProductItem'


const ShopCategory = (props) => {

    const {all_product} = useContext(ShopContext)

    return (
        <>
            <div className='shopCategory'>
                <img src={props.banner} alt="img" style={{width:"100%"}}/>
            </div>
            <div className="container ">

                <div className="ShopCategory-category">
                         
                    {
                        all_product.map((cval, i)=>{
                            if(props.category === cval.category){

                              return  <ProductItem key={i} id={cval.id}
                                name={cval.name}
                                image={cval.image}
                                new_price={cval.new_price}
                                old_price={cval.old_price}/>
                            }
                            else{
                                return null;
                            }
                        }) 
                    }

                </div>
            </div>
        </>

    )
}

export default ShopCategory
