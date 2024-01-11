import { useEffect, useState } from 'react'
import { db } from 'config/firebase.config'
import { categoryConverter } from 'converters/firestore.converters'
import { collection, getDocs } from 'firebase/firestore'
import Category from 'types/category.types'

import CategoryItem from 'components/CategoryItem'

import * as S from './Categories.styles'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
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
