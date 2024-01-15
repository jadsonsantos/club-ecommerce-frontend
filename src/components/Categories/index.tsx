import { useContext, useEffect } from 'react'
import { CategoryContext } from 'contexts/categories.context'

import CategoryItem from 'components/CategoryItem'
import Loading from 'components/Loading'

import * as S from './Categories.styles'

const Categories = () => {
  const { isLoading, categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
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
