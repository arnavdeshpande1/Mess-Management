
function Tablerows({rowsData, deleteTableRows, handleChange}) {
    return(
        
        rowsData.map((data, index)=>{
            const {name, item}= data;
            return(
                <tr key={index}>
                <td>
               <input type="text" value={name} onChange={(evnt)=>(handleChange(index, evnt))} name="Name" className="form-control"/>
                </td>
                <td><input type="text" value={item}  onChange={(evnt)=>(handleChange(index, evnt))} name="Item" className="form-control"/> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
            )
        })

   
    )

    // console.log("110%");
    
}
export default Tablerows;