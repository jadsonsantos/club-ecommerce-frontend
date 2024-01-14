import { useState } from 'react'
import { auth, db, googleProvider } from 'config/firebase.config'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import LogInForm from 'types/login.types'

const useLogin = (setError: any) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitPress = async (data: LogInForm) => {
    try {
      setIsLoading(true)

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
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignInWithGooglePress = async () => {
    try {
      setIsLoading(true)

      const userCredentials = await signInWithPopup(auth, googleProvider)

      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid)
        )
      )

      const user = querySnapshot.docs[0]?.data()

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(' ')[1]

        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: 'google'
        })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleSubmitPress, handleSignInWithGooglePress, isLoading }
}

export default useLogin
