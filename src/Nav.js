import React from 'react';
import './Nav.css';
import MainMenuIcon from '@material-ui/icons/MainMenu';

function Nav() {
    return(
        <div className='nav_container'>
            <div className='nav_left'>

                <NavContents Icon={MainMenu}title=""/>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""/>
                <div className='search-box'>

                    <SearchIcon/>
                    <input type='text' placeholder='Search'/>

                </div>

    
            </div>

        </div>

    );
}

export default Nav;