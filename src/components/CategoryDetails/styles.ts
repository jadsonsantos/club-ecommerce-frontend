import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 0 20px 0;
`

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  p {
    font-size: 21px;
    font-weight: 500;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: start;
  margin-top: 5px;
  grid-gap: 20px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

export const IconContainer = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`
