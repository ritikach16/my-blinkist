import React from 'react'
import BookDetail from '../../Components/Organism/BookDetails/Index';
import Footer from '../../Components/Organism/Footer/Index';
import Header from '../../Components/Organism/Header/Index';
import BookDetailView from '../../Components/Templates/BookDetailView/Index';

const BookDetailViewPage = () => {
    return (
        <BookDetailView
         bookDetailOrg={<BookDetail/>} 
         header={<Header/>} 
         footer={<Footer/>}
         />
    )
}

export default BookDetailViewPage;
