import { FunctionComponent } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

import CustomButton from 'components/CustomButton'

import { addProductToCart } from 'store/toolkit/cart/cart.slice'
import Product from 'types/product.types'

import { ProductContainer, ProductImage, ProductInfo } from './styles'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCartClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <ProductContainer>
      <ProductImage imageurl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
