import React from 'react';
import './index.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__title'>
                <div className='header__logo'>
                    <img src='./logo.png' alt='CD'></img>
                    <a className='header__profile' href='/'>Мой профиль</a>
                </div>
                <div className='header__userpic'>
                    <img src='./userpic.png' width='35' height='35' alt='Мой профиль'></img>
                </div>
            </div>
            <div className='header__background'></div>
        </header>
    )
}

export default Header;
