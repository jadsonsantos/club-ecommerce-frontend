import { useForm } from 'react-hook-form'
import { FiLogIn } from 'react-icons/fi'
import validator from 'validator'

import CustomButton from 'components/CustomButton'
import CustomInput from 'components/CustomInput'
import Header from 'components/Header'
import InputErrorMessage from 'components/InputErrorMessage'

import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './styles'

interface SignUpForm {
  name: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpForm>()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  const watchPassword = watch('password')

  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>
          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              placeholder='Digite seu nome'
              hasError={!!errors?.name}
              {...register('name', { required: true })}
            />
            {errors?.name?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              placeholder='Digite seu sobrenome'
              hasError={!!errors?.lastName}
              {...register('lastName', { required: true })}
            />
            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              placeholder='Digite seu e-mail'
              hasError={!!errors?.email}
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um e-mail válido.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              placeholder='Digite sua senha'
              type='password'
              hasError={!!errors?.password}
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirme sua senha</p>
            <CustomInput
              placeholder='Digite sua senha novamente'
              type='password'
              hasError={!!errors?.passwordConfirmation}
              {...register('passwordConfirmation', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />

            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                A confirmação de senha precisa ser igual a senha.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Criar conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUp
