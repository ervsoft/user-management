import { useState, useEffect } from "react";
//import { useCookies } from 'react-cookie'; 
const useFetch = (url) => {
    //const url = "http://192.168.1.105:3005/api/";
    const [data, setData] = useState(null);
    fetch(url, {
        method: "get",
        url: url
    }).then((res) => res.json())
        .then((data) => setData(data));
    return { data };
};
export default useFetch;
