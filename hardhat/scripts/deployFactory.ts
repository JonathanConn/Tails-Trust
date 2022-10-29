import { ethers } from "hardhat";

// const fs = require('fs');
// const config_path = '../web/pages/api/local-config.json';

async function main() {

    const Factory = await ethers.getContractFactory("TrustFactory");
    const factory = await Factory.deploy();

    await factory.deployed();

    // const original_data = fs.readFileSync(config_path, 'utf8');
    // const data = JSON.parse(original_data);
    // data.factory = factory.address;
    // fs.writeFileSync(config_path, JSON.stringify(data));

    console.log(`Deployed to ${factory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
