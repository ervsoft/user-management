import React, { useEffect, useState } from 'react';

const UserList = () => {
    function getList() { return fetch('http://192.168.1.105:3005/api/users').then(data => data.json()) }
    const [dataList, setDataList] = useState([]);
    //console.log({ dataList });
    useEffect(() => {
        let mounted = true;
        getList()
            .then(data => {
                if (mounted) {
                    setDataList(data)
                }
            })
        return () => mounted = false;
    }, [])

}
export { UserList };

