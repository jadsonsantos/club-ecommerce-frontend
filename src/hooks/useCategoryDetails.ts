import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { collection, getDocs, query, where } from 'firebase/firestore'

import { db } from 'config/firebase.config'
import { categoryConverter } from 'converters/firestore.converters'
import Category from 'types/category.types'

const useCategoryDetails = (categoryId: string) => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [category, setCategory] = useState<Category | null>(null)

  const fetchCategory = async () => {
    try {
      setIsLoading(true)
      const querySnapShot = await getDocs(
        query(
          collection(db, 'categories').withConverter(categoryConverter),
          where('id', '==', categoryId)
        )
      )

      const category = querySnapShot.docs[0]?.data()

      setCategory(category)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackLink = () => {
    navigate('/')
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return { isLoading, category, handleBackLink }
}

export default useCategoryDetails
