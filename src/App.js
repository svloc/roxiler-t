import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const[userData,setUserData]=useState([]);
  const[valId,setValId]=useState(false);
  const[moreData,setMoreData]=useState({});
  useEffect(()=>{
   getAllUser();
  },[]);

  const getAllUser=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(result=>{
      setUserData(result);
    })
  }
 
  const getId=(val)=>{
    setValId(true);
    getMoreInfo(val);
  }
 
  const getMoreInfo=(val)=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${val}`).then(res=>res.json()).then(result=>{
      setMoreData(result);
    })
  }


  return (
    <div className="main">
    <div className="user-data">
       <table>
        <tbody>

          <tr>
           <th>User Id</th>
           <th>Title</th> 
           <th>Action</th>
          </tr>
          {userData.map(x=>{
            return(
          <tr key={x.id}>
          <td>{x.userId}</td>
          <td>{x.title}</td>
          <td><button className="btn" onClick={()=>getId(x.userId)}> More Info</button></td>
          </tr>
          )})}
        </tbody>
       </table>
    </div>
   
    {valId && <div className="moreInfo">
    <table>
        <tbody>

          <tr>
           <th>User Id</th>
           <th>email</th> 
           <th>name</th>
          </tr>
          
          <tr>
           <td>{moreData.id}</td>
          <td>{moreData.email}</td>
          <td>{moreData.name}</td> 
          
          </tr>
         
        </tbody>
       </table>
    </div>}
    </div>

  );
}
