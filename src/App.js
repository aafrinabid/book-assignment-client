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
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    axios.get('https://book-server-csv.herokuapp.com/allitems').then(res=>{
      setList([...res.data])
      setLoading(false)
    }).catch(e=>{
      setLoading(false)
    })

  },[])
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path='/' exact >
        <Home rows={list} loading={loading}  setList={setList}/>
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
