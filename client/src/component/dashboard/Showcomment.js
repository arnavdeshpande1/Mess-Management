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
                getData(response);
            })
    }
    var arr = []
    data.map((item, i) => (
        
        arr.push([item.mess,item.rating])
    ))
    
    return (
        <>
            <h1>Reviews</h1>
            <tbody>
                <tr>
                    <th>Mess Name</th>
                    <th>Comments</th>
                    <th>Rating</th>
                    
                </tr>
                {data.map((item, i) => (
                    
                    <tr key={i}>
                        <td>{item.mess}</td>
                        <td>{item.comment}</td>
                        <td>{item.rating}</td>
                        
                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default TableData;