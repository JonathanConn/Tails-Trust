export default function TontineForm() {
    return (
        <div>
            <form>

                <label>Check In Frequency: </label>
                <select id="freqSelector" placeholder="3600" required>
                    <option value="3600">Hourly</option>
                    <option value="86400">Daily</option>
                    <option value="604800">Weekly</option>
                    <option value="2592000">Monthly</option>
                    <option value="31536000">Yearly</option>
                </select>

                <input type="text" placeholder="Amount" required /><br></br>
                <input type="text" placeholder="Beneficiary" required /><br></br>


                <input type="date" required /><br></br>

                <button type="submit">Submit</button>
            </form>

            <div></div>
        </div>
    );
}