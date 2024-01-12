import { auth } from 'config/firebase.config'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword
} from 'firebase/auth'
import LogInForm from 'types/login.types'

const useLogin = (setError: any) => {
  const handleSubmitPress = async (data: LogInForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log({ userCredentials })
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' })
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' })
      }

      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        // setError('email', { type: 'invalid' })
        // setError('password', { type: 'invalid' })
      }
    }
  }

  return { handleSubmitPress }
}

export default useLogin
