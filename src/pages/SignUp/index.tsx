import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FiLogIn } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import CustomButton from 'components/CustomButton'
import CustomInput from 'components/CustomInput'
import Header from 'components/Header'
import InputErrorMessage from 'components/InputErrorMessage'
import Loading from 'components/Loading'

import { useAppSelector } from 'hooks/redux.hooks'
import SignUpForm from 'types/signup.types'

import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './styles'
import useSignUp from './useSignUp'

import validator from 'validator'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<SignUpForm>()

  const { handleSubmitPress, isLoading } = useSignUp(setError)

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const navigate = useNavigate()

  const watchPassword = watch('password')

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  return (
    <>
      <Header />

      {isLoading && <Loading />}

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>
          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              placeholder='Digite seu nome'
              hasError={!!errors?.firstName}
              {...register('firstName', { required: true })}
            />
            {errors?.firstName?.type === 'required' && (
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

            {errors?.email?.type === 'alreadyInUse' && (
              <InputErrorMessage>
                Este e-mail já está sendo utilizado.
              </InputErrorMessage>
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
              {...register('password', { required: true, minLength: 6 })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}

            {errors?.password?.type === 'minLength' && (
              <InputErrorMessage>
                A senha precisa ter no mínimo 6 caracteres.
              </InputErrorMessage>
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
                minLength: 6,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />

            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'minLength' && (
              <InputErrorMessage>
                A confirmação de senha precisa ter no mínimo 6 caracteres.
              </InputErrorMessage>
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
