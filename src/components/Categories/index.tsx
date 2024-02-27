import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'hooks/redux.hooks'
import { fetchCategories } from 'store/reducers/category/category.actions'

import CategoryItem from 'components/CategoryItem'
import Loading from 'components/Loading'

import * as S from './Categories.styles'

const Categories = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories() as any)
  }, [])

  return (
    <S.CategoriesContainer>
      {isLoading && <Loading />}
      <S.CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </S.CategoriesContent>
    </S.CategoriesContainer>
  )
}

export default Categories
