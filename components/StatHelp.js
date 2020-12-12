
import { StatHelpText, Badge, StatArrow, Box, Text } from '@chakra-ui/react'

export default function StatHelp(props) {
  if(!props.percent) return null

  return (
    <Box bg={props.percent < 0 ? "red.200" : "green.200"} px="10px" pt="5px" borderRadius="2px" my={2} mx="1px">
      <StatHelpText>
        <Badge d="inline" mr={1} colorScheme={props.percent < 0 ? "red" : "green"} textColor="black">
          {props.metric}
        </Badge>
        <StatArrow type={props.percent > 0 ? "increase" : "decrease"}/>
        <Text textColor="black" d="inline" fontSize="sm">{props.percent.toFixed(2)}%</Text>
      </StatHelpText>
    </Box>
  )
 
}


