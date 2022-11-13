import { ethers, Transaction } from 'ethers'
import { useAccContext } from '../../context/AccountProvider';

export default function TontineForm() {


    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const abi = require('../../public/TrustFactory.json').abi;
    const account = useAccContext().accountContext?.toString();

    const callCreateAPI = async (event: any) => {
        event.preventDefault();

        const freq = event.target.freqInput.value as Number;
        const beneficiary = event.target.benInput.value as string;
        const amount = ethers.utils.parseEther(event.target.amountInput.value);

        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const factoryContract = new ethers.Contract(
            process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
            abi as ethers.ContractInterface,
            signer
        );

        factoryContract.createTontineTrust(
            beneficiary,
            freq,
            { value: amount })
            .then(console.log)
            .catch(console.log);
    }


    return (
        <div className="flex flex-col justify-center items-center text-center">

            <a className="text-3xl font-bold mt-10">Create a Tontine Trust</a>
            <a className="text-md font-bold mb-10">
                Beneficiary can withdrawl after owner passes away.
            </a>


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
                    <span>Check in period</span>
                    <select id="freqInput" className="input input-bordered input-lg" placeholder="3600" required>
                        <option value="3600">Hourly</option>
                        <option value="86400">Daily</option>
                        <option value="604800">Weekly</option>
                        <option value="2592000">Monthly</option>
                        <option value="31536000">Yearly</option>
                    </select>

                </label>

                <br></br>
                <a className='btn'>Create</a>
            </form>
        </div>
    )
}