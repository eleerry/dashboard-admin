import React from 'react'
import './Sidebar.css'
import logo from '../../assets/logo.jpg'

const Sidebar = ({ sidebarOpen,  closeSidebar}) => {

    return (
        <div 
        className={sidebarOpen ? 'sidebar__responsive' : ''} id='sidebar'>
            
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt='logo'/>
                    <h1>Eleérry</h1>
                </div>
                <i
                    onClick={() => closeSidebar()}
                    className='fa fa-times'
                    id='sidebarIcon'
                    aria-hidden="true"
                ></i>
            </div>
            
            <div className='sidebar__menu'>
                <div className='sidebar__link active_menu_link'>
                    <i className='fa fa-minus-square'></i>
                    <a href='#'>Home</a>
                </div>

                <h2>Admin</h2>

                <div className='sidebar__link'>
                    <i className='fa fa-tachometer'></i>
                    <a href='#'>Área Administrativa</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-building'></i>
                    <a href='#'>Lojas</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-archive'></i>
                    <a href='#'>Produtos</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-bars'></i>
                    <a href='#'>Categorias</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-cutlery'></i>
                    <a href='#'>Pedidos</a>
                </div>

                <h2>Pessoas</h2>

                <div className='sidebar__link'>
                    <i className='fa fa-male'></i>
                    <a href='#'>Administradores</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-money'></i>
                    <a href='#'>Pagamentos e custos</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-tasks'></i>
                    <a href='#'>A Plataforma</a>
                </div>
                <div className='sidebar__link'>
                    <i className='fa fa-file-text'></i>
                    <a href='#'>Políticas de Privacidade</a>
                </div>
                <div className='sidebar__logout'>
                    <i className='fa fa-power-off'></i>
                    <a href='#'>Log Out</a>
                </div>
            </div>

        </div>
    )

}

export default Sidebar