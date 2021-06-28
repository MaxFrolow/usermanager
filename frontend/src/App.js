import './App.css';
import React, {useState, useEffect} from 'react'
import Context from './context'
import BaseNav from './Basic/header'
import BaseFooter from './Basic/footer'
import UserList from './Users/UserList'

import Nav from 'react-bootstrap/Nav'
import Table from 'react-bootstrap/Table'

document.body.style = 'background: rgba(0, 0, 0, 0.3);';


function App() {
  
  const [token, setToken] = useState("NotAuthorized")

  const [users, setUsers ]= useState(
  [
    {id: '1', name: 'John', lastname: 'Doe', age: 24, gender: 'Male'},
    {id: '2', name: 'Albert', lastname: 'Einstein', age: 124, gender: 'Male'},
    {id: '3', name: 'Feen', lastname: 'Fargoos', age: 45, gender: 'Male'},
    {id: '4', name: 'Lili', lastname: 'Batonchek', age: 24, gender: 'Female'},
    {id: '5', name: 'Karen', lastname: 'Lawson', age:67, gender: 'Female'},
    {id: '6', name: 'Marshal', lastname: 'Batonchek', age: 24, gender: 'Male'},
    {id: '7', name: 'Ted', lastname: 'Mosbey', age:67, gender: 'Male'}
  ])
  const [admins, setAdmins] = useState(
    [
        {id: 'A1', name: 'Aob', lastname: 'Aoe', age: 24, gender: 'Male'},
        {id: 'A2', name: 'Bob', lastname: 'Binstein', age: 124, gender: 'Male'},
        {id: 'A3', name: 'Cob', lastname: 'Cargoos', age: 45, gender: 'Male'},
        {id: 'A4', name: 'Dob', lastname: 'Datonchek', age: 24, gender: 'Female'},
        {id: 'A5', name: 'Eob', lastname: 'Eawson', age:67, gender: 'Female'},
        {id: 'A6', name: 'Fob', lastname: 'Fatonchek', age: 24, gender: 'Male'},
        {id: 'A7', name: 'Gob', lastname: 'Gosbey', age:67, gender: 'Male'}
  ])
  const [superUsers, setSuperUsers] = useState(
    [
        {id: 'S1', name: 'Aan', lastname: 'Soe', age: 24, gender: 'Male'},
        {id: 'S2', name: 'Can', lastname: 'Sinstein', age: 124, gender: 'Male'},
        {id: 'S3', name: 'Dan', lastname: 'Sargoos', age: 45, gender: 'Male'},
        {id: 'S4', name: 'Ean', lastname: 'Satonchek', age: 24, gender: 'Female'},
        {id: 'S5', name: 'Fan', lastname: 'Sawson', age:67, gender: 'Female'},
        {id: 'S6', name: 'Gan', lastname: 'Satonchek', age: 24, gender: 'Male'},
        {id: 'S7', name: 'Han', lastname: 'Sosbey', age:67, gender: 'Male'}
  ])

  useEffect(()=>{
    fetch('http://0.0.0.0:8080/api/v1/users_list')
  .then(response => response.json())
  .then(json => setUsers(json));
   

      

    fetch('http://0.0.0.0:8080/api/v1/superusers_list')
      .then(response => response.json())
      .then(json => setSuperUsers(json))

      fetch('http://0.0.0.0:8080/api/v1/admins_list')
      .then(response => response.json())
      .then(json => setAdmins(json))
  }, [])

  
  const [data, setData] = useState(users)

  const [info, setInfo] = useState("Users")

  useEffect(()=>{
    if(info==="Users"){
      setData(users)
    }else if(info==="Admins"){
      setData(admins)
    }else if(info==="SuperUsers"){
      setData(superUsers)
    }
  }, [info, users, admins, superUsers])

  function removeUser(id){
    if (data===users){
      setUsers(users.filter(user => user.id !== id))
      
    }else if(data===admins){
      setAdmins(admins.filter(admin => admin.id !== id))
    }else if(data===superUsers){
      setSuperUsers(superUsers.filter(superUser => superUser.id !== id))
    }
    
  }
  function editUser(newUser){
  
    if (data === users){
      setUsers(
        users.map(user =>{
          if (user.id === newUser.id){
            user.first_name = newUser.first_name
            user.last_name = newUser.last_name
            user.age = newUser.age
            user.gender = newUser.gender
          }
          return user
        }))}
      else if(data === admins){
        setAdmins(
          admins.map(admin =>{
            if (admin.id === newUser.id){
              admin.first_name = newUser.first_name
              admin.last_name = newUser.last_name
              admin.age = newUser.age
              admin.gender = newUser.gender
            }
            return admin
          }))}
      else if(data===superUsers){
        setSuperUsers(
          superUsers.map(superUser =>{
            if (superUser.id === newUser.id){
              superUser.first_name = newUser.first_name
              superUser.last_name = newUser.last_name
              superUser.age = newUser.age
              superUser.gender = newUser.gender
            }
            return superUser
          }))}          
  }
  function createUser(type, newUser){
    if (type === "user"){
      setUsers(prevUsers => [...prevUsers, newUser])
    }else if (type==="admin"){
      setAdmins(prevAdmins => [...prevAdmins, newUser])
    }else if (type==="superUser"){
      setSuperUsers(prevSuperUsers => [...prevSuperUsers, newUser])
    }
  }
  
  

  function authorization(key){
    setToken(key)
    console.log(token)
  }


      return (
  

    <Context.Provider value = {{ removeUser, editUser, createUser, authorization}}>
    <div className="App">


          <BaseNav/>
          


          <div className="super-content">
            <div className="tabs">
            <Nav variant="tabs" defaultActiveKey={info}>
              <Nav.Item >
                <Nav.Link  eventKey="Users" className="custom-item" onClick={setInfo.bind(null, "Users")}>Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Admins" className="custom-item" onClick={setInfo.bind(null, "Admins")}>Admins</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="SuperUsers" className="custom-item" onClick={setInfo.bind(null, "SuperUsers")}>
                  SuperUsers
                </Nav.Link>
              </Nav.Item>
            </Nav>
            </div>
          <div className="content-main">

            <div className="list-inside">
            <Table>

        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Edit</th>
            </tr>
        </thead>
          <UserList data={data}/>

    </Table>
              
            </div>
          </div>
        </div>
          <BaseFooter />
        
    </div>
    </Context.Provider>
  );
}

export default App;