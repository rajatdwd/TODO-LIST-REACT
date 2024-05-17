import React, { useState } from 'react'

export default function Todo() {
    const[List,setList]=useState("");
    const[datalist,setdatalist]=useState([]);
    function addtolist(){
        // setdatalist([...datalist,List])
        // console.log(datalist)
        setdatalist((datalist)=>{
            const updatedlist=[...datalist,List]
            console.log(updatedlist)
            setList('');
            return updatedlist;
        })
    }
    function removebutton(i){
        const updateddatalist = datalist.filter((elem,id)=>{
            return i!=id;
        })
        setdatalist(updateddatalist);
    }
    function removeall(){
        setdatalist([]);
    }
  return (
    <>
    <div className='container'>
        <div className='header'>TODOLIST</div>
        <input type="text" placeholder='Add To List' value={List} onChange={(e)=>setList(e.target.value)}/>
        <button onClick={addtolist}>Add</button>
        <p className='list-heading'>List Of Tasks</p>
        {datalist!=[] && datalist.map((data,i)=>{
            return (
            <>
            <p key={i}>
                <div className='listdata'>{data}</div>
                <button className='btn-position' onClick={()=>removebutton(i)}>Remove Task</button>
                

            </p>
            </>
            )
        })}
        {datalist.length>1 && <button onClick={removeall}>Remove All</button>}
    </div>
    </>
  )
}


