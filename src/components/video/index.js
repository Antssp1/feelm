import ReactPlayer from 'react-player';
import React from 'react';
import "./index.css";

class Video extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          url='https://'
          className='react-player'
          playing
          width='100%'
          height='100%'
        />
      </div>
    );
  }
}

export default Video;