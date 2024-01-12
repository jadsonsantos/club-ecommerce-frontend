import { auth, db } from 'config/firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import SignUpForm from 'types/signup.types'

const useSignUp = () => {
  const handleSubmitPress = async (data: SignUpForm) => {
    try {
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
        lastName: data.lastName
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    handleSubmitPress
  }
}

export default useSignUp
