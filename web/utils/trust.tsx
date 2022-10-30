// Setup
import { Network, Alchemy } from 'alchemy-sdk';
require('dotenv').config();

const { API_URL, PRIVATE_KEY } = process.env;

const settings = {
    apiKey: API_URL,
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);  
  