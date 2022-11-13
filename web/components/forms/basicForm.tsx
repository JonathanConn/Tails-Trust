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
        <main className={styles.main}>
            <h1 className={styles.title}>
                Basic Trust
            </h1>
            <p className={styles.description}>
                <code className={styles.code}>Beneficiary can withdrawl after unlock date.</code>
            </p>
            <div className={styles.grid}>
                <form id="trustForm" onSubmit={callCreateAPI}>
                    {/* <form action="/api/trust" method="post"> */}
                    <input id="amountInput" className={styles.card} type="text" placeholder="Amount" /><br></br>
                    <input id="benInput" className={styles.card} type="text" placeholder="Beneficiary" /><br></br>

                    <label>Unlock date: </label>
                    <input id="lockInput" className={styles.card} type="date" /><br></br>

                    <button className={styles.center}>Create</button>
                </form>
            </div>
        </main>
    )
}