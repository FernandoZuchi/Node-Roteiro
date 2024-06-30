import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
 const [users, setUsers] = useState([])
 async function fetchUsers() {
   const response = await axios.get('http://localhost:8080/users')
   const data = response.data
   setUsers(data)
 }
 useEffect(() => {
   fetchUsers()
 } , [])


 return (
   <div>
     <div style={{width: '100%'}}>
       <table style={{width: '100%'}}>
         <thead>
           <tr>
             <th style={{textAlign: 'left'}}>Nome</th>
             <th style={{textAlign: 'left'}}>E-mail</th>
           </tr>
         </thead>


         <tbody>
           {users.map(user => (
             <tr key={user.id}>
               <td>{user.name}</td>
               <td>{user.email}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div>
 )
}
export default App
