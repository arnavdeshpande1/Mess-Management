import React, { useState, useEffect } from 'react';
import '../tabledata.css';


function TableData() {
    const [data, getData] = useState([])
    const URL = 'http://localhost:5000/api/commentsection';

 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
    // console.log(data)
    return (
        <>
            <h1>Reviews</h1>
            <tbody>
                <tr>
                    <th>Mess Name</th>
                    <th>Comments</th>
                    
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.mess}</td>
                        <td>{item.comment}</td>
                        
                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default TableData;