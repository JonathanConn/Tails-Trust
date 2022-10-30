import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function TontineForm() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Tontine Trust
            </h1>
            <p className={styles.description}>
                <code className={styles.code}>Beneficiary can withdrawl after owner passes away.</code>
            </p>
            <div className={styles.grid}>
                <form>

                    <input className={styles.card} type="text" placeholder="Amount" required /><br></br>
                    <input className={styles.card} type="text" placeholder="Beneficiary" required /><br></br>
                    
                    <label>Check in period:</label>
                    <select className={styles.card} placeholder="3600" required>
                        <option value="3600">Hourly</option>
                        <option value="86400">Daily</option>
                        <option value="604800">Weekly</option>
                        <option value="2592000">Monthly</option>
                        <option value="31536000">Yearly</option>
                    </select>

                    <button className={styles.center} type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}