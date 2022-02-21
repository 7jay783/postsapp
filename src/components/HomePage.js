import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './HomePage.css';
import PostPage from './PostPage';
function HomePage(props) {
    
    const [data, setData] = useState();
    useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>{
         setData(res.data);
        
     })
    },[])
  return (
    <div className='padding_top'>
        <fieldset className='flex text_left'>
            <legend >Filter</legend>
            <div>
                <label htmlFor='unameInput'>User Name:</label>
                <input type="text" placeholder='Username' name='unameInput'/>
            </div>
            <div>
                <label htmlFor='cnameInput'>Company Name:</label>
                <input type="text" placeholder='Company' name='cnameInput'/>
            </div>
            <div>
            <button className='search_btn'>Search</button>

            </div>
        </fieldset>
        <table id='table'>
    <thead className='thead' >
        <tr>
           
            <th>Name</th>
            <th>Company</th>
            <th>Blog/Posts</th>
           
        </tr>
    </thead>
    <tbody>
    
    {  data!=null?
          data.map((e,index)=>{
             return (  <tr key={index}>
                    <td>{e.name}</td>
                    <td>{e.company.name}</td>
                    <td onClick={()=>{props.setUid(e.id)
                    props.setValue(1)
                        
                    }}>See Posts</td>
                
                
            </tr>)
          }):null
              
            
    }
   
    </tbody>
</table></div>
  )
}

export default HomePage