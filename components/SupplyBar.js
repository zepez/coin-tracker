
import { useColorMode, Box, Text, Center } from '@chakra-ui/react'
import theme from '../config/theme'

export default function SupplyBar(props) {
  // if no max supply, no graph
  if(!props.max) return null

  const { colorMode } = useColorMode()


  return (
    <Box mb={2}>
      <Text fontSize="sm">Curculating supply</Text>
      <Box h="10px" w="100%" bg={theme.barBackgroundColor[colorMode]} borderRadius="2px">
        <Box h="10px" w={`${(props.circulating / props.max) * 100}%`} bg={theme.barForegroundColor[colorMode]} />
      </Box>
      <Text fontSize="sm">
        {props.circulating.toFixed(0)} 
        / 
        {props.max.toFixed(0)}
      </Text>
    </Box>
  )
 
}


