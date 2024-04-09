import { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren

const Container = ({ children }: ContainerProps) => {
  return <div className='container'>{children}</div>
}

export default Container
