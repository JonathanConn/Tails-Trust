import { useMetaMask } from "metamask-react"
import styles from "../styles/Navbar.module.css"

import { useAccContext } from "../context/Account"

export default function Navbar() {
    const {accountContext, setAccountContext} = useAccContext();

    const { status, connect, account, chainId, ethereum } = useMetaMask();

    function handleMMText() {
        if (status === "connected") {
            setAccountContext(account);
            if (accountContext) {
                return accountContext.slice(0, 6) + "..." + accountContext.slice(-4);
            }
            
        } else {
            return "Connect";
        }
    }

    function handleLogin() {
        console.log(status);
        if (status === "notConnected") {
            connect();
        }
    }

    return (
        <div>
            <ul className={styles.navbar}>
                <li className={styles.navelements}><a href="#home">Home</a></li>
                <li className={styles.navelements}><a href="#home">News</a></li>
                <li className={styles.navelements}><a href="#home">About</a></li>
                <li className={styles.navelements}><a href="#home">Contact</a></li>

                <button className={styles.mmbutton} onClick={handleLogin}>{handleMMText()}</button>
            </ul>
        </div>
    )
}