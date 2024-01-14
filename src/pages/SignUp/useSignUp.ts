import { useState } from 'react'
import { auth, db } from 'config/firebase.config'
import {
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import SignUpForm from 'types/signup.types'

const useSignUp = (setError: any) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      setIsLoading(true)

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      console.log({ userCredentials })

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.firstName,
        lastName: data.lastName,
        provider: 'firebase'
      })
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alreadyInUse' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    handleSubmitPress,
    isLoading
  }
}

export default useSignUp
