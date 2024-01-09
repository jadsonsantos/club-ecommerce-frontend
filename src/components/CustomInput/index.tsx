import { FunctionComponent, InputHTMLAttributes } from 'react'

import { CustomInputContainer } from './index.styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = ({
  hasError,
  ...rest
}) => {
  return <CustomInputContainer hasError={hasError} {...rest} />
}

export default CustomInput
