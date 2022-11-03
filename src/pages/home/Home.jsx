
import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import Categories from '../../components/categories/Categories';
import Course from '../../components/courses/Course';
import Footer from '../../components/footer/Footer';
export default function Home(){
    return (

    <>
        <NavBar/>
        <Header/>
        <Categories/>
        <Course/>
        <Footer/>
        
    </>
    );

}