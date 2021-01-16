import React from 'react';
import '../css/App.css';
import '../css/lockScreen.css';

 function Header() {
    let currentDate = new Date();
    let d = currentDate.toDateString();
    let t = currentDate.getHours() + ':' + currentDate.getMinutes();

     return (
        <div className='header-cont'>
            <time>{t}</time>
            <span>{d}</span>
            <img id='wifi-img' src="https://damonwakes.files.wordpress.com/2017/11/wifi_icon-working-small.gif" alt='wifi'></img>
            <img id='battery-img' src="https://www.flaticon.com/svg/static/icons/svg/3306/3306560.svg" alt='battery'></img>
        </div>
    )
}

export default Header;