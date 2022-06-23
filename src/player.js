import React, {useState, useMemo  } from 'react'
import { AudioPlaylist } from 'ts-audio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import './style.css'


const MyComponent = ({songs}) => {
    const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  // Songs Array

  const playlist = useMemo(() => {
    return AudioPlaylist({
      files: songs.map((song) => song.src),
    });
  }, [songs]);

  const handlePlay = () => {
    console.log('Play')
    playlist.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    console.log('Pause')
    playlist.pause();
    setIsPlaying(false);
  };

  const handleSkip = () => {
    playlist.next();
    setIsPlaying(true);
    setCurrentSong(
      (currentSong) => (currentSong + 1 + songs.length) % songs.length
    );
  };

  const handlePrevious = () => {
    playlist.prev();
    setIsPlaying(true);
    setCurrentSong(
      (currentSong) => (currentSong - 1 + songs.length) % songs.length
    );
  };
  return (
    <>
      <div className="App">
        <div className="c-player">
          <div className="c-player--details">
            {' '}
            <h1 className="details-title">{songs[currentSong].title}</h1>
            <h2 className="details-artist">{songs[currentSong].artist}</h2>
          </div>
          <Player
            play={handlePlay}
            pause={handlePause}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            next={handleSkip}
            prev={handlePrevious}
          />
        </div>
      </div>
    </>
  );
}

const Player = ({ play, pause, next, prev, isPlaying, setIsPlaying }) => {
    return (
      <div className="c-player--controls">
        <button className="skip-btn" onClick={prev}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          className="play-btn"
          onClick={() => setIsPlaying(!isPlaying ? play : pause)}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button className="skip-btn" onClick={next}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    );
  }

export default MyComponent