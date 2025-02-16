import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import Login from '../pages/Login'
import UserLogin from '../pages/UserLogin'
import QuestionPage from '../pages/QuestionPage'
import AddQuestionPage from '../pages/AddQuestionPage'
import { GlobalContext } from '../Context/Context'

const CustomRoutes = () => {
  const { state } = useContext(GlobalContext);

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!state.isLogin) {
      return <Navigate to="/" />;
    }
    return children;
  };

  // Admin route component
  const AdminRoute = ({ children }) => {
    if (!state.user?.isAdmin) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLogin/>}/>
        <Route path='/adminLogin' element={<Login/>}/>
        <Route 
          path='/test' 
          element={
            <ProtectedRoute>
              <QuestionPage/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/addQuestion' 
          element={
            <AdminRoute>
              <AddQuestionPage/>
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default CustomRoutes;
