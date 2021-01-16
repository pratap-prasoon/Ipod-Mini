import React from 'react';
import '../css/App.css';
import '../css/lockScreen.css';

function LockScreen(){
    return (
        <div id='lock-container'>
            <img src="https://www.flaticon.com/svg/static/icons/svg/2489/2489262.svg" style={styling.image} alt="Lock-Screen"/>
            <div className='msg'>Press Center Button to Unlock</div>
        </div>
    )
}

let styling = {
    image : {
        width : 100,
        height : 100
    }
}

export default LockScreen;