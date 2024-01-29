import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from 'contexts/cart.context'
import Product from 'types/product.types'

import CustomButton from 'components/CustomButton'

import { ProductContainer, ProductImage, ProductInfo } from './styles'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart, toggleCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart(product)
    toggleCart()
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
