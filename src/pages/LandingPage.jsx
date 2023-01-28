
import React from 'react';
import '../styles/pages/landingPage.css'

import Header from '../components/Header';
import Trending from '../components/Trending';
import Collections from '../components/Collections';
import Auctions from '../components/Auctions';
import Hottest from '../components/HottestBids';
import Categories from '../components/Category';

class LandingPage extends React.Component{
    render(){
        return(
            <div className='container'>
                <section className='header-section'>
                    <Header/>
                </section>
                <section className='trending-section'>
                    <Trending/>
                </section>
                <section className='collections-section'>
                    <Collections/>
                </section>
                <section className='auctions-section'>
                    <Auctions/>
                </section>
                <section className="hottest-section">
                    <Hottest/>
                </section>
                <section className="category-section">
                    <Categories/>
                </section>
                
            </div>
        )
    }
} 

export default LandingPage;