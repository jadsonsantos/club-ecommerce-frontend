import { useEffect, useState } from 'react'
import axios from 'axios'
import env from 'config/env.config'
import Category from 'types/category.types'

import CategoryItem from 'components/CatagoryItem'

import * as S from './Categories.styles'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <S.CategoriesContainer>
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
