
import { useColorMode, Box, Heading, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

import theme from '../config/theme'

export default function Header(props) {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={theme.secondaryColor["dark"]} w="100%" h="50px" mb="20px" boxShadow="lg">

      {/* "brand" name  */}
      <Heading size="md" lineHeight="50px" d="inline" ml={8} color={theme.secondaryColor["light"]}>Simple Coin Tracker</Heading>

      {/* light / dark switcher  */}
      <IconButton 
        aria-label="Light/Dark mode" 
        onClick={toggleColorMode} 
        icon={colorMode === "dark" ? <SunIcon color="white" /> : <MoonIcon color="white" />} 
        float="right" h="30px" 
        my="10px" mr={8}
        colorScheme={theme.secondaryColor["dark"]}
      />
    </Box>
  )
 
}


