import React from 'react'

import { InputErrorMessageContainer } from './InputErrorMessage.styles'

interface Props {
  children: React.ReactNode
}

const InputErrorMessage: React.FC<Props> = ({ children }) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
