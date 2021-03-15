import logo from './logo.svg';
import './App.css';
import {Translation} from 'react-i18next';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Translation>{
                    t => <p>{t('Welcome to React')}</p>
                }
                </Translation>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
