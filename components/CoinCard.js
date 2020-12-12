

import { Box, useColorMode, Heading, Text, Tag, Flex, Spacer, Stat, Badge, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'
import theme from '../config/theme'
import StatHelp from '../components/StatHelp'
import formatDate from '../utils/formatDate'


import SupplyBar from './SupplyBar'


export default function CoinCard(props) {

  const { colorMode } = useColorMode()


  return (
    <Box mb={8} mx={5}>
      <Box bg={theme.secondaryColor[colorMode]} maxW="500px" m="0 auto" p="20px" borderRadius={3} boxShadow="lg">

        {/* top of card  */}
        <Flex>
          <Heading as="h1" size="md">{props.coin.symbol} | {props.coin.name}</Heading>
          <Spacer />
          <Text>#{props.coin.cmc_rank}</Text>
        </Flex>

        {/* middle of card  */}
        <Stat size="sm" mt={1}>
          {/* regex to add commas where applicable  */}
          <StatNumber>${props.coin.quote.USD.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</StatNumber>
          <Flex>
            <StatHelp percent={props.coin.quote.USD.percent_change_1h} metric="1h" />
            <Spacer />
            <StatHelp percent={props.coin.quote.USD.percent_change_24h} metric="24h" />
            <Spacer />
            <StatHelp percent={props.coin.quote.USD.percent_change_7d} metric="7d" />
          </Flex>
          
        </Stat>

        <SupplyBar circulating={props.coin.circulating_supply} max={props.coin.max_supply} />


        {/* bottom of card  */}
        {props.coin.tags.map((tag, tagIndex) => {
          return <Tag key={tagIndex} colorScheme={theme.tagColor[colorMode]} mr="2" mb="2">{tag}</Tag>
        })}
        <Text fontSize="xs">Updated on {formatDate(props.coin.quote.USD.last_updated)}</Text>

      </Box>
    </Box>
  )
 
}







