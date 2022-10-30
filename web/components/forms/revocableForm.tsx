import styles from '../../styles/Home.module.css'

export default function RevocableForm() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Revocable Trust
            </h1>
            <p className={styles.description}>
                <code className={styles.code}>Beneficiary can withdrawl after unlock date.</code><br></br>
                <code className={styles.code}>Owner can cancel at any time.</code>
            </p>
            <div className={styles.grid}>
                <form>
                    <input className={styles.card} type="text" placeholder="Amount" required /><br></br>
                    <input className={styles.card} type="text" placeholder="Beneficiary" required /><br></br>
                    <label>Unlock date: </label>
                    <input className={styles.card} type="date" required /><br></br>
                    
                    <button className={styles.center} type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}