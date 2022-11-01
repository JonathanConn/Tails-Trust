import { ethers } from 'ethers';
import FactoryABI from "../../../hardhat/artifacts/contracts/TrustFactory.sol/TrustFactory.json";

import type { NextApiRequest, NextApiResponse } from 'next'
import { stringify } from 'querystring';

type ResData = {
    tx: string
}

const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", process.env.API_KEY);
const signer = new ethers.Wallet(`0x${process.env.PRIVATE_KEY}`!, alchemyProvider);
const factoryContract = new ethers.Contract(process.env.CONTRACT_ADDRESS!, FactoryABI.abi, signer);

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {

    // return res.status(200).json({tx: "test"});
    // console.log(req.body);

    try{
        await factoryContract.createBasicTrust(
            req.body.unlockTime, req.body.beneficiary, {value: req.body.amount}
            ).then((tx: any) => {
                return res.status(200).json({ tx: tx})
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({tx: stringify(err)});
    }

}
