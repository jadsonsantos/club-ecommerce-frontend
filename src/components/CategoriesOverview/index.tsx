import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'hooks/redux.hooks'
import { fetchCategories } from 'store/reducers/category/category.actions'

import CategoryOverview from 'components/CategoryOverview'
import Loading from 'components/Loading'

import { Container } from './styles'

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
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
