import React from 'react';
import YouTube from 'react-youtube';
 //https://www.youtube.com/watch?v=dLQe4qEfVJw
class YouTubePlayer extends React.Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideoAt(50);
        console.log(event.target)
      }
    
    render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    const {videoId} = this.props

    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
      />
    );
  }
}

export {YouTubePlayer};