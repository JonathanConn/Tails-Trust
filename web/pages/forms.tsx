import BasicForm from '../components/forms/basicForm'
import TontineForm from '../components/forms/tontineForm'
import RevocableForm from '../components/forms/revocableForm';

import { useRouter } from 'next/router'

export default function FormsPage() {
    const router = useRouter()
    const formType = router.query.formType;

    if (formType == "basic") {
        return <BasicForm />
    } else if (formType == "tontine") {
        return <TontineForm />
    } else if (formType == "revocable") {
        return <RevocableForm />
    } else {
        return <div>Invalid form type</div>
    }
    
}