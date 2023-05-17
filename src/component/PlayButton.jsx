import React, { memo, useState } from 'react'

const PlayButton = memo(function PlayButton({ message, children, onPlay, onPause }) {
    const [playing, setPlaying] = useState();

    function handleClick(e) {

        // console.log(e);
        e.stopPropagation();
        //when we use the form then this will be used to prevent the default behavior
        // e.preventDefault();

        if (playing) {
            onPause();
        } else {
            onPlay();
        }

        setPlaying(!playing);

    }

    return (
        <button
            onClick={handleClick}
            type='button'
            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition'>
            {children} : {playing ? "⏸️" : '⏯️'}
        </button>
    )
});

export default PlayButton;