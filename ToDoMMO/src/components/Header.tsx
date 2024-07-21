
import { Container, Flex } from '@mantine/core'
import spada from '../assets/spada.png'

type Props = {
  title?: string
}

const Header = (props: Props) => {
  return (
    <Container className='p-3 bg-neutral-600 rounded-b-lg'>
      <Flex className='items-center' justify="space-between" align="center">
      <img id='piselo' src={spada} width={"47rem"} alt="spada" />      
      <h1 className='self-center font-poppins font-medium text-4xl text-white' > {props.title? props.title : "Dashboard"} </h1>
      <a className='font-poppins font-small text-xs xl:text-md self-center text-white ' href='https://www.google.com'>support me brokies!</a>
      </Flex>
    </Container>
  )
}

export default Header