import { FunctionComponent } from 'react'
import { BiChevronLeft } from 'react-icons/bi'

import Container from 'components/Container'
import Loading from 'components/Loading'
import ProductItem from 'components/ProductItem'

import useCategoryDetails from 'hooks/useCategoryDetails'

import * as S from './styles'

interface CategoryDetailsProps {
  categoryId: string
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({
  categoryId
}) => {
  const { isLoading, category, handleBackLink } = useCategoryDetails(categoryId)

  if (isLoading) return <Loading />

  return (
    <S.Container>
      <Container>
        <S.CategoryTitle>
          <S.IconContainer onClick={handleBackLink}>
            <BiChevronLeft size={36} />
          </S.IconContainer>
          <p>Expolorar {category?.displayName}</p>
        </S.CategoryTitle>

        <S.ProductsContainer>
          {category?.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </S.ProductsContainer>
      </Container>
    </S.Container>
  )
}

export default CategoryDetails
