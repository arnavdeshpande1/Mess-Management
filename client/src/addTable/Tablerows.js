
function Tablerows({rowsData, deleteTableRows, handleChange}) {
    return(
        
        rowsData.map((data, index)=>{
            const {fullName, emailAddress, salary}= data;
            return(
                <tr key={index}>
                <td>
               <input type="text" value={fullName} onChange={(evnt)=>(handleChange(index, evnt))} name="fullName" className="form-control"/>
                </td>
                <td><input type="text" value={emailAddress}  onChange={(evnt)=>(handleChange(index, evnt))} name="emailAddress" className="form-control"/> </td>
                <td><input type="text" value={salary}  onChange={(evnt)=>(handleChange(index, evnt))} name="salary" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
            )
        })

   
    )

    // console.log("110%");
    
}
export default Tablerows;