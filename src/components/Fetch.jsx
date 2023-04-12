import axios from 'axios';
import React, { useState } from 'react';

const Fetch = () => {
    const endPoint = "https://jsonplaceholder.typicode.com/users"
    const endPoint2 = "https://jsonplaceholder.typicode.com/post"
    const endPoint3 = "https://api.github.com"
    const [response, setresponse] = useState([]);

    const getData = () => {
        axios.get(endPoint1)
        .then((result) => {
            console.log(result);
            console.log(result.data);
            setresponse(result.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }
  return (
    <>
    <h1>Fetch API</h1>
    <p className='text-danger'>I'm a baaboo, <span className='text-primary'>I live in the zoo.</span></p>
    <button onClick={getData}>Get Info💯. </button>

    <table className='table table-striped table-bordered mt-4 table-hover text-center'>
        <tr>
            <th>S/N</th>
            <th>NAME</th>
            <th>E-MAIL</th>
            <th>USER NAME</th>
            <th>WEBSITE</th>
        </tr>

    {
        response.map((item, i) => (
            <tr>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.website}</td>
            </tr>
        ))
    }
    </table>
    </>
  );
}

export default Fetch;
