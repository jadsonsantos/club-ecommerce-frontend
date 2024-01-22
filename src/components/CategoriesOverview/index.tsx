import { useContext, useEffect } from 'react'
import { CategoryContext } from 'contexts/categories.context'

import CategoryOverview from 'components/CategoryOverview'
import Loading from 'components/Loading'

import { Container } from './styles'

const CategoriesOverview = () => {
  const { categories, fetchCategories, isLoading } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
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
