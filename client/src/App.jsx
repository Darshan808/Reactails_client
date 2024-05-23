import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) => setData(data))
  
  },[])

  const getUser = (user)=>(
    <div>
      <h2>{user.name}</h2>
      <h3>{user.age}</h3>
    </div>
  )
  

  return (
    <>
      <h1>Data Changed</h1>
      <div>
        {
          data.map((user)=>getUser(user))
        }
      </div>
    </>
  )
}

export default App
