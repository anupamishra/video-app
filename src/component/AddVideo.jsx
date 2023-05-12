import React, { useContext, useEffect, useState } from 'react'
import VideoDispatchContext from '../context/VideoDispatchContext';

const initialVideoState = {
  time: "1month ago",
  channel: "",
  verified: false,
  title: "",
  views: ""
}

function AddVideo({ editableVideo }) {
  const [video, setVideos] = useState(initialVideoState);
  const dispatch = useContext(VideoDispatchContext)

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: 'UPDATE', payload: video });
    } else {
      dispatch({ type: 'ADD', payload: video });
    }
    setVideos(initialVideoState)
  }

  function handleOnChange(e) {

    setVideos({
      ...video,
      [e.target.name]: e.target.value,

    })

  }

  useEffect(() => {
    if (editableVideo) {
      setVideos(editableVideo);
    }
    // console.log('Effect');
  }, [editableVideo])

  return (
    <form>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <input
            onChange={handleOnChange}
            name='title'
            value={video.title}
            type="text"
            className='bg-zinc-700 text-zinc-100 border border-zinc-600 focus:border-zinc-700 text-zinc-100 text-sm rounded-lg block w-full p-2.5'
            placeholder="title"
            required
          />
          {/* {video.title} */}
        </div>
        <div>
          <input
            onChange={handleOnChange}
            name='channel'
            value={video.channel}
            type="text"
            className='bg-zinc-700 text-zinc-100 border border-zinc-600 focus:border-zinc-700 text-zinc-100 text-sm rounded-lg block w-full p-2.5'
            placeholder="channel"
            required
          />
          {/* {video.channel} */}
        </div>
        <div>
          <input
            onChange={handleOnChange}
            name='views'
            value={video.views}
            type="text"
            className='bg-zinc-700 text-zinc-100 border border-zinc-600 focus:border-zinc-700 text-zinc-100 text-sm rounded-lg block w-full p-2.5'
            placeholder="views"
            required
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className='text-white mt-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition'
      >
        {editableVideo ? 'Edit' : 'Add'} Video
      </button>
    </form>
  )
}

export default AddVideo