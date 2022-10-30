export default function BasicForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Amount" required /><br></br>
                <input type="text" placeholder="Beneficiary" required /><br></br>
                <label>Unlock Date: </label>
                <input type="date" required /><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}