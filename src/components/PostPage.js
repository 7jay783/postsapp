import axios from 'axios'
import  './PostPage.css';
import React, { useEffect,useState } from 'react'

function PostPage(props) {
    const [data, setData] = useState();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${props.uid}`)
        .then(res=>{
            setData(res.data)
           
        })
    },[])
  return ( data!=null?
    <div className='padding_top'>
         <table id='table'>
    <thead className='thead' >
        <tr>
           
            <th>Post Title</th>
           
            <th>Link to details</th>
           
        </tr>
    </thead>
    <tbody>
    
    {  data!=null?
           data.map((e,index)=>{
            return (  <tr key={index}>
                    <td>{e.title}</td>
                   
                    <td onClick={()=>{props.setPid(e.id)
                    props.setValue(2)
                        
                    }}>Post Details</td>
                
                
            </tr>)})
         :null
              
            
    }
   
    </tbody>
</table></div>:null
  )
}

export default PostPage