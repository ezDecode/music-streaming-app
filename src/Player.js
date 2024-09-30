import React, { useEffect } from 'react';
import { Howl } from 'howler';

function Player({ song }) {
  useEffect(() => {
    const sound = new Howl({
      src: [song.url],
      autoplay: true,
      loop: true,
    });

    return () => {
      sound.unload();
    };
  }, [song]);

  return (
    <div className="fixed bottom-0 w-full bg-D5ED9F p-4">
      <h3 className="text-xl">Now Playing: {song.title}</h3>
      {/* Player controls */}
    </div>
  );
}

export default Player;