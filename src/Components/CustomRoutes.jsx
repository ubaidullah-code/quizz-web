import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../pages/Login'
import UserLogin from '../pages/UserLogin'
import QuestionPage from '../pages/QuestionPage'
import AddQuestionPage from '../pages/AddQuestionPage'

const CustomRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLogin/>}/>
        <Route path='/adminLogin' element={<Login/>}/>
        <Route path='/test' element={<QuestionPage/>}/>
        <Route path='/addQuestion' element={<AddQuestionPage/>}/>
        
      </Routes>
    </div>
  )
}

export default CustomRoutes;
