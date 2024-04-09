import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import CategoryOverview from 'components/CategoryOverview'
import Container from 'components/Container'
import Loading from 'components/Loading'

import { useAppSelector } from 'hooks/redux.hooks'
import { fetchCategories } from 'store/toolkit/category/category.slice'

import * as S from './styles'

const CategoriesOverview = () => {
  const { categories, isLoading } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories() as any)
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <S.Container>
      <Container>
        {categories.map((category) => (
          <CategoryOverview key={category.id} category={category} />
        ))}
      </Container>
    </S.Container>
  )
}

export default CategoriesOverview
