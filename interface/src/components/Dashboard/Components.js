import { useEffect, useState, setState } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

function RetriveData() {
    async function GetList() {
        const data = await fetch('http://192.168.1.105:3005/api/users');
        return await data.json();
    }
    const [list, setList] = useState([]);
    useEffect(() => {
        let mounted = true;
        GetList()
            .then(data => {
                if (mounted) {
                    setList(data)
                }
            })
        return () => mounted = false;
    }, [])
    return (
        <>
            <tbody>
                {list.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.isActive}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.isActive}</td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

function Sidebar() {
    return (
        <ul className="nav nav-pills flex-column mb-auto">
            <li>
                <a href="/dashboard" className="nav-link link-dark">
                    Dashboard
                </a>
            </li>
            <li>
                <a href="/dashboard" className="nav-link link-dark">
                    Orders
                </a>
            </li>
            <li>
                <a href="/users" className="nav-link link-dark">
                    Products
                </a>
            </li>
            <li>
                <a href="/users" className="nav-link link-dark">
                    Customers
                </a>
            </li>
        </ul>
    );
}

const Content = () => {

    return (
        <>
            <h1>Campaigns</h1>
            <p>Loripsum sit amet maybe sit memet maybe alaatindir kim bilir maybe</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <RetriveData />
            </Table>
        </>
    );

}

const Pageginator = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 20; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
            <br />
        </div>
    );

    return paginationBasic;
}




// 👇️ named exports
export { Sidebar, Content, Pageginator };