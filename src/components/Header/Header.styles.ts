import styled from 'styled-components'
import Colors from 'theme/theme.colors'

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.background.dark};
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  color: ${Colors.text.white};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
    width: 100%;
    justify-content: space-evenly;
  }
`
export const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`
