import { FunctionComponent, useEffect, useState } from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { db } from 'config/firebase.config'
import { categoryConverter } from 'converters/firestore.converters'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Category from 'types/category.types'

import Loading from 'components/Loading'
import ProductItem from 'components/ProductItem'

import {
  CategoryTitle,
  Container,
  IconContainer,
  ProductsContainer
} from './styles'

interface CategoryDetailsProps {
  categoryId: string
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({
  categoryId
}) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [category, setCategory] = useState<Category | null>(null)

  const handleBackLink = () => {
    navigate('/')
  }

  useEffect(() => {
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

    fetchCategory()
  }, [])

  if (isLoading) return <Loading />

  return (
    <Container>
      <CategoryTitle>
        <IconContainer onClick={handleBackLink}>
          <BiChevronLeft size={36} />
        </IconContainer>
        <p>Expolorar {category?.displayName}</p>
      </CategoryTitle>

      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}

export default CategoryDetails
