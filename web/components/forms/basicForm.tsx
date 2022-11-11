import styles from '../../styles/Home.module.css'
import { useState, useRef } from 'react'



const callCreateAPI = async (event: any) => {
    event.preventDefault();

    const params = JSON.stringify({
        _unlockTime: new Date(event.target.lockInput.value).getTime(),
        _beneficiary: event.target.benInput.value,
        _amount: Number(event.target.amountInput.value)
    });

    try {
        const res = await fetch(`http://localhost:3000/api/trust`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: params,
        });
        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.log(err);
    }
}


export default function BasicForm() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Basic Trust
            </h1>
            <p className={styles.description}>
                <code className={styles.code}>Beneficiary can withdrawl after unlock date.</code>
            </p>
            <div className={styles.grid}>
                <form onSubmit={callCreateAPI}>
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