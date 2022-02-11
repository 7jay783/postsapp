import react,{useState} from 'react';
import './App.css';
// import { createStore } from 'redux';
import HomePage from './components/HomePage';
import PostPage from './components/PostPage';
import PostDetailsPage from './components/PostDetailsPage';
// const store = createStore(allReducers)
function App() {
  const [value, setValue] = useState(0);
  const [uid, setUid] = useState(1);
  const [pid, setPid] = useState(1);

  return (
    <div className="App">
      <header className="header">
    <nav className="navbar">
        <div className="container"><a href="#" className="navbar-brand">Assignment</a>
            
            <div id="navbarSupportedContent" className="menu_btns">
                <ul className="nav_list flex">
                    <li className={ "nav-item "+ (value ===0?"active":"")} onClick={()=>setValue(0)} ><a href="#" className="nav-link">Home Page </a></li>
                    <li className={ "nav-item "+ (value ===1?"active":"")}  onClick={()=>setValue(1)} ><a href="#" className="nav-link">Post Page</a></li>
                    <li className={ "nav-item "+ (value ===2?"active":"")}  onClick={()=>setValue(2)} ><a href="#" className="nav-link">Post Details Page</a></li>
    
                </ul>
            </div>
        </div>
    </nav>
</header>

      <div>
          {(value === 0)&&  <HomePage setUid={(u)=>setUid(u)} setValue={(v)=>setValue(v)}/>}
          {(value === 1)&&  <PostPage uid={uid} setPid={(u)=>setPid(u)} setValue={(v)=>setValue(v)}/>}
          {(value === 2)&&  <PostDetailsPage pid={pid} />}
      </div>
      
    </div>
  );
}
export default App;
