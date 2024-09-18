import React from 'react';
import { Routes, Route, Navigate  } from "react-router-dom";
import Books from '../pages/Books';
import Interviews from '../pages/Interviews';
import Issues from '../pages/Issues';

const RouterConfig = () => {
  return (
    <Routes>
        <Route path='/issues' element={<Issues/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/interviews' element={<Interviews/>}/>
        <Route path='/' element={<Navigate replace to='/issues'/>}/>
    </Routes>
  )
}

export default RouterConfig