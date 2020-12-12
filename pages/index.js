import React, { useState } from 'react';


import Head from 'next/head'
import Layout from '../components/Layout'
import CoinCard from '../components/CoinCard'

import { Input, Box } from '@chakra-ui/react'



import api from '../config/axios'



export default function Home(props) {

  const [search, setSearch] = useState()

  const handleSearch = (query) => {

    // avoid shallow copy of props
    let searchResults = [...props.rankList]

    // to lowercase to normalize data
    searchResults = searchResults.filter(x => x.name.toLowerCase().includes(query.toLowerCase()) )

    // use state here to avoid updating props
    // still want to call the api on the server side
    setSearch(searchResults)
  }



  return (
    <div>
      <Head>
        <title>Simple coin tracker | Alex Zepezauer</title>
        <link rel="icon" href="/favicon.ico" />

        <meta charset="UTF-8" />
        <meta name="description" content="Simple coin tracker built off of coinmarketcap.com's API" />
        <meta name="author" content="Alex Zepezauer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>

        {/* search  */}
        <Box maxW="600px" m="0 auto" mb="5" px={5}>
          <Input placeholder="Search currencies" borderColor="blue.800" borderWidth="1px" onChange={(e) => handleSearch(e.target.value)} />
        </Box>

        {/* split display method to avoid updating props  */}
        {/* still want to call api on server  */}

        {/* display only data from api call  */}
        {!search && (<>
          {/* coin cards / data display */}
          {props.rankList.map((coin, coinIndex) => {
            return (
              <CoinCard coin={coin} key={coinIndex} />
            )
          })}
        </>)}

        {/* display search results  */}
        {search && (<>
          {/* coin cards / data display */}
          {search.map((coin, coinIndex) => {
            return (
              <CoinCard coin={coin} key={coinIndex} />
            )
          })}
        </>)}
      </Layout>
    </div>
  )
}


export async function getServerSideProps(ctx) {

  let rankList = api.get()
    .then((res) => res.data.data) 
    .catch((e) => console.log(e)) 

  return {
    props: {
      rankList: await rankList
    },
  };
}
