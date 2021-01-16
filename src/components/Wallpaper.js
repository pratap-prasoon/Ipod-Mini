import React from 'react';
import '../css/App.css';

class Wallpaper extends React.Component {

    componentDidMount(){
        this.props.changeWallpaper(this.props.screen, this.props.menu, this.props.menuItem);
    }

    componentDidUpdate(){
        this.props.changeWallpaper(this.props.screen, this.props.menu, this.props.menuItem);
    }

    render() {

        let menuItem = this.props.menuItem;
        let wallpaperList = ['Random', 'Joker', 'Nature', 'Anime'];
        let menuElement = [];


        for(let m=0; m < wallpaperList.length; m++){
            menuElement.push(  m === menuItem ? <li className='list-items active' style={styling.listItem}  key={'wallpaper'+wallpaperList[m]} >
                                {wallpaperList[m]}
                            </li> : 
                            <li className='list-items' style={styling.listItem}  key={'wallpaper'+wallpaperList[m]} >
                                {wallpaperList[m]}
                            </li>   );
        }

        return (
            <ul id="WallpaperList" className='list' style={styling.list}>
                {   menuElement }
            </ul>
        )
    }
}


let styling = {
    list : {
        margin : 0
    },
    listItem : {
        justifyContent : 'center'
    }
}

export default Wallpaper;