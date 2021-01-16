import React from 'react';
import '../css/App.css';
import song1 from '../assets/songs/old_town_road.mp3';
import song2 from '../assets/songs/Way_Down_We_Go.mp3';
import song3 from '../assets/songs/hall_of_fame.mp3';
import song4 from '../assets/songs/Savan.mp3';
import song5 from '../assets/songs/Baari.mp3';
import image1 from '../assets/img/song1.png';
import image2 from '../assets/img/song2.jpg';
import image3 from '../assets/img/song4.jpg';
import image4 from '../assets/img/song5.jpg';
import image5 from '../assets/img/song7.jpg';





class MusicPlayer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            song : [song1, song2, song3, song4, song5],
            cover : [image1, image2, image3, image4, image5]
        }
    }

    // Play/Pause or play Next/ play Prev when component is mounted and updated
    componentDidMount(){
        this.props.playPauseAudio(this.props.screen, this.props.menu);
        this.props.playNext(this.props.screen, this.props.menu, this.props.menuItem,
             this.state.cover, this.state.song, this.props.changeMusicItem);
        this.props.playPrev(this.props.screen, this.props.menu, this.props.menuItem,
        this.state.cover, this.state.song, this.props.changeMusicItem);
    }

    componentDidUpdate(){
        this.props.playNext(this.props.screen, this.props.menu, this.props.menuItem,
            this.state.cover, this.state.song, this.props.changeMusicItem);
        this.props.playPrev(this.props.screen, this.props.menu, this.props.menuItem,
            this.state.cover, this.state.song, this.props.changeMusicItem);
    }

    componentWillUnmount(){
        document.getElementById('player').classList.remove('active-song');
    }

    render() {

        return (
            <div>
                <div style={styling.imageCont}>
                    <img id='song-cover' src={this.state.cover[this.props.menuItem]} alt="Song1" style={styling.image} />
                </div>
                <audio id='player' className='active-song'   style={styling.audioControl} controls>
                    <source id='song-source' src={this.state.song[this.props.menuItem]} type="audio/mp3"   />
                </audio>
            </div>
        )
    }
}

const styling = {
    imageCont : {
        width: 'inherit',
        minHeight: 50
    },
    image : {
        height: 250
    },
    audioControl : {
        background: '#f1f3f4',
        marginTop : -100,
        width: '100%',
        overflowY: 'hidden',
        boxShadow: '0px 0px 11px 1px black'
    }
}

export default MusicPlayer;
