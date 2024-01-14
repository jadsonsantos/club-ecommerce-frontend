import { SyncLoader } from 'react-spinners'

import { LoadingContainer } from './styles'

const Loading = () => {
  return (
    <LoadingContainer>
      <SyncLoader size={30} />
    </LoadingContainer>
  )
}

export default Loading
