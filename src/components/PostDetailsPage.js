import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './PostDetailsPage.css';
function PostDetailsPage(props) {
    const [data, setData] = useState();
    const [comments,setComments] = useState();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.pid}`)
        .then(res=>{
            setData(res.data)
           
        })
        return () => {
           
        };
    },[])
   
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${props.pid}`)
        .then(res=>{
            setComments(res.data)    
            console.log(res.data)       
        })
    },[])
  return ( data!=null?
    <div className='text_left padding_top'>
       <table id='table'>
    <thead className='thead' >
        <tr>
           
            <th>Post Title</th>
           
            <td>{data.title}</td>
           
        </tr>
    </thead>
    <tbody>
    
    {
        <tr>
                    <th>Post Details</th>
                   
                    <td>{data.body}</td>
                
                
        </tr>
    }
   
    </tbody>
</table>
<div style={{textAlign:"center",margin:'auto'}}> <button className='search_btn'>Click to see Comments</button>
      { comments.map(e=>{
            return (  <div className='text_left' style={{padding:'5px 10px 5px 10px',border:'.5px solid #ddd'}}> <span style={{fontWeight:'bold'}}>Comment-{e.id}: </span>{e.body}</div>)
            }
            )}
</div>
     </div>:null
  )
}

export default PostDetailsPage