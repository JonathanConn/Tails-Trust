import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import BasicForm from '../components/forms/basicForm'
import TontineForm from '../components/forms/tontineForm'
import { useRouter } from 'next/router'

export default function FormsPage() {
    const router = useRouter()
    const formType = router.query.formType;
    console.log(formType)
    return formType === "tontine" ? <TontineForm /> : <BasicForm />
}