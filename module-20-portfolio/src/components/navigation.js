import React from 'react';
import '../styles/navigation.css';


function navigation ({currentPage, handlePageChange}) {
    return (
        <ul className='nav nav-tabs flex-row'>
            <li className='nav-item'>
                <a href="#aboutpage"
                   onClick = {() => handlePageChange('aboutpage')}
                   className = {currentPage === 'aboutpage' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className='nav-item'>
                <a href='#portfoliopage'
                   onClick = {() => handlePageChange('portfoliopage')}
                   className = {currentPage === 'portfoliopage' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className='nav-item'>
            <a href='#contactpage'
                   onClick = {() => handlePageChange('contactpage')}
                   className = {currentPage === 'contactpage' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className='nav-item'>
            <a href='#resumepage'
                   onClick = {() => handlePageChange('resumepage')}
                   className = {currentPage === 'resumepage' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default navigation;