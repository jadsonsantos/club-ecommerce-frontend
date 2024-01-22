import { useContext, useEffect } from 'react'
import { CategoryContext } from 'contexts/categories.context'

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
      {categories.map(({ id, displayName }) => (
        <p key={id}>{displayName}</p>
      ))}
    </Container>
  )
}

export default CategoriesOverview
