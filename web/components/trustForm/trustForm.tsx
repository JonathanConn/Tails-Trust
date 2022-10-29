import { useState, useRef } from "react";
import { TrustData, TrustType } from "./trustData";

export default function TrustForm() {
    const [params, setParams] = useState('');
    const selectRef = useRef<HTMLSelectElement>(null);

    function updateParamsForm() {
        setParams(selectRef.current?.value || ''); 
    }

    return (
        <div>
            <form action="/send-data-here" method="post">

                <select id="trustTypeSelector" ref={selectRef} onChange={() => updateParamsForm()}>
                    <>
                        {Object.keys(TrustData).map((key, desc) => {
                            return <option key={key} value={key}>{key}</option> 
                        })};
                    </>
                </select>

                <div id="paramsForm">
                    <h1>{params}</h1> 

                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}