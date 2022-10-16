import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import { apiURL } from './Api';
const axios = require('axios');


export function CheckLogin() {
    const apiURL = 'http://192.168.1.105:3005/api/';
    const [cookies] = useCookies(['token', 'user']);
    const [login, setLogin] = useState(false);
    const [message, setMessage] = useState("");
    const [profile, setProfile] = useState("");
    const history = useHistory();


    const configuration = {
        method: "get",
        //url: apiURL+'auth',  
        url: apiURL + 'auth',
        headers: {
            Authorization: `Bearer ${cookies.token}`,
        },
    };
    // make the API call
    axios(configuration)
        .then((response) => {
            response.headers.authorization && console.log('response.headers.authorization', response.headers.authorization);
            //response.data && console.log('response.data', response.data);
            // assign the message in our result to the message we initialized above
            if (response.status === 200) {
                setMessage("Login successfull");
                setProfile(response.data);
                setLogin(true);
            }

        })
        .catch((error) => {
            error = new Error();
            setMessage("Login failed");
            setLogin(false);
        });

    return (
        <div>
            {login ? history.push("/dashboard") : history.push("/login")}
        </div>
    );
}






// Path: interface/src/module/checkProfile copy.js
