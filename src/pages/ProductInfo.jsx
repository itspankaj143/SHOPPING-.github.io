import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDesign from '../components/ProductDesign'

const ProductInfo = () => {
  const {all_product} = useContext(ShopContext)

  const productId = useParams();
  const pId = parseInt(productId.id)

  const data = all_product.filter((product) => {
    return product.id === pId;
  })

  console.log(data)

  return (

    <ProductDesign product={data} />

  )
}

export default ProductInfo  