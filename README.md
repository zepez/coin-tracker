
## Simple Coin Tracker

This is a simple Nextjs application built on top of [CoinMarketCap's API](https://coinmarketcap.com/api/)

## Demo

Coming soon

## Running the project

Clone the project: 
```bash
git clone https://github.com/zepez/coin-tracker
```


Install dependencies: 
```bash
npm install
```


Start the development server: 
```bash
npm run dev
```

The CoinMarketCap API key is stored in the "api_key" environment variable. 


## Docker

[Docker repository](https://hub.docker.com/r/zepezauer/coin-tracker)

Sample docker command:
```bash
docker run -p 3000:3000 -e api_key=YOURKEY zepezauer/coin-tracker
```




