import React from 'react'
import { Helmet } from 'react-helmet';

// Components
import Header from '../layout/header';
import Footer from '../layout/footer';
import Preloder from '../layout/preloder';
import Banner from '../components/home/banner';
import Silder from '../components/home/silder';

export default function home() {
    return (
        <div>
            <Helmet>

                <meta charSet="utf-8" />
                {/* Primary Meta Tags */}
                <title> Wah Phuchka || Munch with more Crunch</title>
                <meta name="title" content=" Wah Phuchka || Munch with more Crunch" />

            </Helmet>
            <Preloder />
            <Header />
            <Banner />
            <Silder />
            <Footer />
        </div>
    )
}
