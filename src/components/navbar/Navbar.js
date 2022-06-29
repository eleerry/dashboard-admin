import React from 'react';
import logo from '../../assets/logo.jpg'
import './Navbar.css'


const Navbar = ( { sidebarOpen, openSidebar }) => {
  return (
        <nav className='navbar'>
            <div className='navbar__icon'
                onClick={() => openSidebar()}>
                <i className='fa fa-bars'
                area-hidden="true"></i>
            </div>
            <div className='navbar__left'>
                <a href='#'>Produtos</a>
                <a href='#'>Usuários</a>
                <a href='#'
                className='active__link'>Admin</a>
            </div>
            <div className='navbar__right'>
                <a href='#'>
                    <i className='fa fa-search'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-clock'></i>
                </a>
                <a href='#'>
                    <img width="30" src={logo} alt='Avatar' />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;