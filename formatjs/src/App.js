import React, {useState} from "react";
import {FormattedMessage, IntlProvider} from "react-intl";
import messages from "./languages";

function App() {
    const [name, setName] = useState("");

    const handleChange = e => {
        setName(e.target.value);
    };

    const [locale, setLocale] = useState("en");

    const handleSelect = e => {
        setLocale(e.target.value);
    };

    return (
        <>
            <input placeholder="Enter name" onChange={handleChange}/>
            <select onChange={handleSelect} defaultValue={locale}>
                {["pt", "en", "es"].map(l => (
                    <option key={l}>{l}</option>
                ))}
            </select>

            <IntlProvider locale={locale} messages={messages[locale]}>
                <p>
                    <FormattedMessage id="greeting" values={{name}}/>
                    <br/>
                    <FormattedMessage id="time" values={{t: Date.now()}}/>
                    <br/>
                    <FormattedMessage id="date" values={{d: Date.now()}}/>
                </p>
            </IntlProvider>
        </>
    );
}

export default App;
