import React, { } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';
///import { UserContext } from './AppContext';
//import { MainContext } from '../AppContext';
import { MainContext } from '../appContext';
function App() {
    const { token, setToken } = useToken();
    //const user = useContext(AuthContext); 

    if (!token) {
        return <Login setToken={setToken} />
    }
    const data = { token };
    return (
        <MainContext.Provider value={data}>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter>
        </MainContext.Provider>

    );
}

export default App; 