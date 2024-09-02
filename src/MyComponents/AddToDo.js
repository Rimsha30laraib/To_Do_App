import React, { useState } from 'react'

const AddToDo = (props) => {
   
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit=(e)=>{
            e.preventDefault();   //prevent loading
            if(!title||!desc){
                alert("Title and Description can't be blank")
            }
            else{
                props.AddToDo(title,desc);
                settitle("");
                setdesc("");

            }
           
    }
    return (
        
        <div className='container'>
            <h3 className='my-3'>AddToDo</h3>
            <form onSubmit={submit}>
            <div className="mb-3 my-3">
                <label htmlFor="title" className="form-label" >Title</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>settitle(e.target.value)} id="exampletitle" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3 my-3">
                <label htmlFor="desc" className="form-label" >Descripton</label>
                <input type="text" className="form-control"value={desc} onChange={(e)=>setdesc(e.target.value)}id="exampledesc" aria-describedby="emailHelp" />

            </div>
            
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
        </div>
    )
}

export default AddToDo
