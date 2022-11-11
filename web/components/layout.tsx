import Navbar from './navbar'
import { AccountPovider } from '../context/Account'

export default function Layout({ children }: any) {
  return (
    <>
      <AccountPovider>
        <Navbar />
        <main>{children}</main>
      </AccountPovider>

    </>
  )
}
