import {useMemo } from 'react'
import Player from './player'
import './App.css';
import hardRoad from './music/The Hard Road_ Restrung/01 The Hard Road Restrung.m4a'
import stoppingAtAllStations from './music/The Hard Road_ Restrung/02 Stopping All Stations Restrung.m4a'
import conversations from './music/The Hard Road_ Restrung/03 Conversations From A Speakeasy Re.m4a'

function App() {
  const songs = useMemo(() => [
    {
      title: 'The Hard Road Restrung',
      artist: 'Hilltop Hoods',
      src: hardRoad,
    },
    {
      title: 'Stopping at all Stations Restrung',
      artist: 'Hilltop Hoods',
      src: stoppingAtAllStations,
    },
    {
      title: 'Converstations from a Speakeasy Restrung',
      artist: 'Hilltop Hoods',
      src: conversations,
    },
  ]);

  return (
    <div className="App">
      <Player songs={songs} />
    </div>
  );
}

export default App;


