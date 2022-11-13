import styles from '../../styles/Home.module.css'
import { ethers, Transaction } from 'ethers'

import { useAccContext } from '../../context/AccountProvider';


export default function BasicForm() {


    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const abi = require('../../public/TrustFactory.json').abi;
    const account = useAccContext().accountContext?.toString();
    // console.log(useAccContext().accountContext);
    const callCreateAPI = async (event: any) => {
        event.preventDefault();

        const time = new Date(event.target.lockInput.value).getTime();
        const beneficiary = event.target.benInput.value as string;
        const amount = ethers.utils.parseEther(event.target.amountInput.value);

        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const factoryContract = new ethers.Contract(
            process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
            abi as ethers.ContractInterface,
            signer
        );

        factoryContract.createBasicTrust(
            beneficiary,
            time,
            { value: amount })
            .then(console.log)
            .catch(console.log);
    }


    return (
        <div className="flex flex-col justify-center items-center text-center">

                <a className="text-3xl font-bold my-10">Create a Basic Trust</a>

                <form id="trustForm" onSubmit={callCreateAPI}>

                    <label className="input-group input-group-lg">
                        <input id="benInput" type="text" placeholder="0x00" className="input input-bordered input-lg" required/>
                        <span>Inheritor</span>
                    </label>

                    <label className="input-group py-5 input-group-lg">
                        <input id="amountInput" type="text" placeholder="0.01" className="input input-bordered input-lg" required/>
                        <span>ETH</span>
                    </label>

                    <label className="input-group input-group-lg">
                        <input id="lockInput" type="date" className="input input-bordered input-lg" required/>
                        <span>Unlock</span>
                    </label>

                    <br></br>
                    <a className='btn'>Create</a>

                </form>

        </div>
    )
}