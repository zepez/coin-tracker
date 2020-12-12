
import { Box, useColorMode, Center } from '@chakra-ui/react'
import theme from '../config/theme'
import Header from './Header'

export default function Layout(props) {

  const { colorMode } = useColorMode()

  return (
    <Box bg={theme.bodyColor[colorMode]} minH="100vh">
      <Header />
      <main>{props.children}</main>
      <footer><Box py={5}><Center>A project by Alex Zepezauer</Center></Box></footer>
    </Box>
  )
 
}


