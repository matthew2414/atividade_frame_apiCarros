import './Home.css'
import React from 'react';  
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation'

function Home() {

    return (
        <>
            <Navigation>
                
                <button> olha </button>

                <Link to="/velhos"> Velhos </Link>

            </Navigation>

        </>

    )
}

export default Home