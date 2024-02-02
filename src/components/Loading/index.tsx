import React from 'react'
import { SyncLoader } from 'react-spinners'

import { LoadingContainer } from './styles'

interface LoadingProps {
  message?: string
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}

export default Loading
