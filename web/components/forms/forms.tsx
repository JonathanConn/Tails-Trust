import BasicForm from './basicForm'
import TontineForm from './tontineForm'
import RevocableForm from './revocableForm';
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