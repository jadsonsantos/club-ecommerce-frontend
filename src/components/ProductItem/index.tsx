import React, { FunctionComponent } from 'react'
import Product from 'types/product.types'

import { ProductContainer, ProductImage, ProductInfo } from './styles'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageurl={product.imageUrl} />
      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
