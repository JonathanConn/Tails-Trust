import { Component } from "react";
import { useRouter } from 'next/router'

import BasicForm from "../components/forms/basicForm";
import RevocableForm from "../components/forms/revocableForm";
import TontineForm from "../components/forms/tontineForm";


export default function Forms({ children }: any) {
    const router = useRouter()
    const { formType } = router.query

    if (formType === 'basic') {
        return <BasicForm/>
    }
    else if (formType === 'revocable') {
        return <RevocableForm/>
    }
    else if (formType === 'tontine') {
        return <TontineForm/>
    }
    else {
        return <div>Invalid form type</div>
    }

}
