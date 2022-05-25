import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetailView from './Pages/BookDetailView/Index';
import EntrepreneurshipPage from './Pages/Entrepreneurship/Index';
import MyLibrary from './Pages/MyLibrary/Index';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './Pages/Login/Index';
import LogOutButton from './Components/Organism/LogoutBtn/Index';

function App() {
  const {isAuthenticated, isLoading} = useAuth0();
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isAuthenticated){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/bookDetails' element = {<BookDetailView/>} />
          <Route path='/entrepreneur' element={<EntrepreneurshipPage/>} />
          <Route path='/logout' element={<LogOutButton/>} />
          <Route path='/' element = {<MyLibrary/>} />
        </Routes>
      </BrowserRouter>
    );
  }else{
    return <LoginPage/>
  }
}

export default App;
