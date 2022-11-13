import { useRouter } from 'next/router'
import { ethers } from 'ethers'
import { useEffect, useState } from "react";

export default function Forms({ children }: any) {
    const [provider, setProvider] = useState<any>(null);

    const router = useRouter()
    const { formType } = router.query

    let desc = '';
    let input3 = (<input id="input3" type="date" className="input input-bordered input-lg" required />);
    if (formType === "basic") {
        desc = 'Distribution available after unlock'
    } else if (formType === "revocable") {
        desc = 'Beneficiary can withdrawl after unlock date.\nOwner can cancel at any time.'
    } else if (formType === "tontine") {
        desc = 'Beneficiary can withdrawl after owner passes away.'
        input3 = (
            <label className="input-group input-group-lg">
                <span>Check in period</span>
                <select id="input3" className="input input-bordered input-lg" placeholder="3600" required>
                    <option value="3600">Hourly</option>
                    <option value="86400">Daily</option>
                    <option value="604800">Weekly</option>
                    <option value="2592000">Monthly</option>
                    <option value="31536000">Yearly</option>
                </select>
            </label>
        )
    }


    const abi = require('../public/TrustFactory.json').abi;
    useEffect(() => {
        setProvider(new ethers.providers.Web3Provider((window as any).ethereum, "any"));       
    }, [])
    


    const create = async (event: any) => {
        event.preventDefault();
        if (!provider) return

        const time = (formType === 'tontine') ?  event.target.input3.value as Number : new Date(event.target.input3.value).getTime();
        const beneficiary = event.target.benInput.value as string;
        const amount = ethers.utils.parseEther(event.target.amountInput.value);


        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        
        const factoryContract = new ethers.Contract(
            process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
            abi as ethers.ContractInterface,
            signer
        );
            
        if (formType === "basic") {
            factoryContract.createBasicTrust(beneficiary, time, { value: amount })
        } else if (formType === "revocable") {
            factoryContract.createRevokableTrust(beneficiary, time, { value: amount })
        } else if (formType === "tontine") {
            factoryContract.createTontineTrust(beneficiary, time,{ value: amount })
        }

      
    }


    return (
        <div className="flex flex-col justify-center items-center text-center">

            <a className="text-3xl font-bold my-10">Create a Trust</a>
            <a className="text-md font-bold mb-10"> {desc} </a>

            <form id="trustForm" onSubmit={create}>

                <label className="input-group input-group-lg">
                    <input id="benInput" type="text" placeholder="0x00" className="input input-bordered input-lg" required />
                    <span>Inheritor</span>
                </label>

                <label className="input-group py-5 input-group-lg">
                    <input id="amountInput" type="text" placeholder="0.01" className="input input-bordered input-lg" required />
                    <span>ETH</span>
                </label>


                <label className="input-group input-group-lg">
                    {input3}
                </label>

                <br></br>
                <a className='btn'>Create</a>

            </form>

        </div>
    )
}