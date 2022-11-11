import { ethers } from 'ethers';
import FactoryABI from "../../../hardhat/artifacts/contracts/TrustFactory.sol/TrustFactory.json";

import type { NextApiRequest, NextApiResponse } from 'next'
import { stringify } from 'querystring';

const formidable = require('formidable-serverless');
export const config = {
    api: {
        bodyParser: false,
    },
};


type ResData = {
    tx: string
}

// const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", process.env.API_KEY);
// const signer = new ethers.Wallet(`0x${process.env.PRIVATE_KEY}`!, alchemyProvider);
// const factoryContract = new ethers.Contract(process.env.CONTRACT_ADDRESS!, FactoryABI.abi, signer);

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
    try {
        const form = new formidable.IncomingForm();
        await form.parse(req, (err: any, fields: any) => {
            console.log(fields);
            console.log(fields.unlockTime);
            console.log(fields.beneficiary);
            console.log(fields.amount);
            // const tx = await factoryContract.createTrust(fields.unlockTime, fields.beneficiary, fields.amount);
            // res.status(200).json({ tx: tx.hash });
        });
        return res.status(200).json({tx: "test"});
    }
    catch (e: any) {
        console.log(`here ${e}`)
        return res.status(500).json({tx: stringify(e)});
    }


    

    // get account as signer 
    // try {
    //     console.log(req.body._signer);
    //     return res.status(500).json({ tx: "error" });
    // }
    // catch (err: any) {
    //     console.log(err);
    //     return res.status(500).json({ tx: stringify(err) });
    // }

    // try {
    //     await factoryContract.createBasicTrust(
    //         req.body.unlockTime, req.body.beneficiary, {value: req.body.amount}
    //         ).then((tx: any) => {
    //             return res.status(200).json({ tx: tx})
    //         });
    // } catch (err: any) {
    //     console.log(err);
    //     return res.status(500).json({tx: stringify(err)});
    // }

}
