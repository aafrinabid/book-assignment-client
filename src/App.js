import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  const [list,setList]=useState([])
  console.log(list)
  useEffect(()=>{
    axios.get('http://localhost:3500/allitems').then(res=>{
      setList([...res.data])
    }).catch(e=>{
    })

  },[])
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path='/' exact >
        <Home rows={list} setList={setList}/>
      </Route>

      <Route path='/user/:id'>
        <Profile />
      </Route>

      <Route path='*'>

<Redirect to={`/`}/>
</Route>
     </Switch>
      

    </div>
  );
}

export default App;
