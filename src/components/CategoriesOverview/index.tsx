import { useContext, useEffect } from 'react'
import { CategoryContext } from 'contexts/categories.context'

import CategoryOverview from 'components/CategoryOverview'

import { Container } from './styles'

const CategoriesOverview = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
