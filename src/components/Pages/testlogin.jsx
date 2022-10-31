import axios from "axios";
import { useState } from "react";

function TestApp() {
    const [firstName, setfirstName] = useState("");
    const [lasttName, setlasttName] = useState("");
    const [countryCode, setcountryCode] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const baseurl = process.env.REACT_APP_BASE_URL;



    let handleSubmit = async (e) => {
        const regis = {
            firstName: firstName,
            lasttName: lasttName,
            countryCode: countryCode,
            email: email,
            phone: phone,
            password: password
        }
        e.preventDefault();
        try {
            let res = await axios.post(`${baseurl}/auth/register`, {
              regis
            });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={firstName}
                    placeholder="firstName"
                    onChange={(e) => setfirstName(e.target.value)}
                />
                <input
                    type="text"
                    value={lasttName}
                    placeholder="lasttName"
                    onChange={(e) => setlasttName(e.target.value)}
                />
                <input
                    type="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={countryCode}
                    placeholder="countryCode"
                    onChange={(e) => setcountryCode(e.target.value)}
                />
                <input
                    type="tel"
                    value={phone}
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Create</button>

            </form>
        </div>
    );
}

export default TestApp;