import './App.css';
import { useEffect, useState } from 'react';

function App(){
  return (
    <div className='App'>
      <h2>React Core Concept Recap</h2>
      <LoadPosts></LoadPosts>
      {/* <District name="Noakhali" special="Vibag"></District>
      <District name="Brammonbaria" special="Maramari"></District>
      <District name="Cumilla" special="Moyna and Moti"></District> */}
    </div>
  )
}
function LoadPosts(){
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h2>Post: {posts.length}</h2>
      {
        posts.map(post => <Post title={post.title} body={post.body} key={post.id}></Post>)
      }
    </div>
  )
}
function Post(props){
  return (
    <div style={{backgroundColor:"lightgray", border:"3px solid green", margin:"20px", borderRadius: "20px", padding:"10px"}}>
      <h3>Title: {props.title}</h3>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle ={
  color: 'white',
  backgroundColor: 'green',
  margin: '20px',
  padding: '10px',
  borderRadius: '20px'
};
function District(props){
  const [power, setPower] = useState(1);
  const doublePower = () =>setPower(power * 2);
  return (
    <div style={districtStyle}> 
      <h2>Name: {props.name}</h2>
      <p>Famous: {props.special}</p>
      <p>Power: {power}</p>
      <button onClick={doublePower}>Increase Power</button>
    </div>
  )
}
export default App;
