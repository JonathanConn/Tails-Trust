import { useMetaMask } from "metamask-react"
import styles from "../styles/Navbar.module.css"

import { useAccContext } from "../context/AccountProvider"
import { useEffect } from "react";

export default function Navbar() {
    const { accountContext, setAccountContext } = useAccContext();

    const { status, connect, account, chainId, ethereum } = useMetaMask();

    useEffect(() => {
        if (status === "connected") 
            setAccountContext(account);
    })

    function handleMMText() {
        if (status === "connected") {
            return account.slice(0, 6) + "..." + account.slice(-4);
        } else {
            return "Connect to MetaMask";
        }
    }

    function handleLogin() {
        console.log(status);
        if (status === "notConnected") {
            connect();
            setAccountContext(account);
        }
        else if (status === "connected") {
            setAccountContext(account);
        }
    }

    return (
        <div>
            <ul className={styles.navbar} >
                <li className={styles.navelements}><a href="#home">Home</a></li>
                <li className={styles.navelements}><a href="#home">News</a></li>
                <li className={styles.navelements}><a href="#home">About</a></li>
                <li className={styles.navelements}><a href="#home">Contact</a></li>

                <button className={styles.mmbutton} onClick={handleLogin}>{handleMMText()}</button>
            </ul>
        </div>
    )    
}