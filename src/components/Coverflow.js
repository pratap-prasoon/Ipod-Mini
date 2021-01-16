import React from 'react';
import '../css/App.css';
import cover1 from '../assets/img/cover1.jpg';
import cover2 from '../assets/img/cover2.jpg';
import cover3 from '../assets/img/cover3.jpg';
import cover4 from '../assets/img/cover4.jpg';

class Coverflow extends React.Component{
    
    
    render() {

        let menuItem = this.props.menuItem;
        let menuList = [cover1, cover2, cover3, cover4];
        let menuElement = [];

        for(let m=0; m < menuList.length; m++){
            menuElement.push(  m === menuItem ? <li className='covers list-items active' style={styling.cover}   key={'cover'+menuList[m]} >
                                                    <img src={menuList[m]} alt='cover1' style={styling.image} />
                                                </li> :
                            <li className='covers list-items' style={styling.cover}   key={'cover'+menuList[m]}  >
                                <img src={menuList[m]} alt='cover2' style={styling.image} />
                            </li>);
        }

        return (
            <ul id="coverflow-container" style={styling.container} className='list' >
                {   menuElement }
            </ul>
        )
    }
   
}

const styling = {
    container : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '15px 22px'
    },
    cover : {
        height: 120,
        width: 120,
        padding: 0
    },
    image : {
        height: 'inherit',
        width: 'inherit',
    }
}


export default Coverflow;