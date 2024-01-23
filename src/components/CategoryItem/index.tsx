import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import Category from 'types/category.types'

import * as S from './CategoryItem.styles'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()

  const handleExplorerClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <S.CategoryItemContainer
      backgroundimage={category.imageUrl}
      onClick={handleExplorerClick}
    >
      <S.CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </S.CategoryName>
    </S.CategoryItemContainer>
  )
}

export default CategoryItem
