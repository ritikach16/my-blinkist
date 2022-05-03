import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetailView from './Pages/BookDetailView/Index';
import EntrepreneurshipPage from './Pages/Entrepreneurship/Index';
import MyLibrary from './Pages/MyLibrary/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/bookDetails' element = {<BookDetailView/>} />
        <Route path='/entrepreneur' element={<EntrepreneurshipPage/>} />
        <Route path='/' element = {<MyLibrary/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
