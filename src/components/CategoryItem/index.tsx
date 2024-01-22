import { FunctionComponent } from 'react'
import Category from 'types/category.types'

import * as S from './CategoryItem.styles'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <S.CategoryItemContainer backgroundimage={category.imageUrl}>
      <S.CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </S.CategoryName>
    </S.CategoryItemContainer>
  )
}

export default CategoryItem
