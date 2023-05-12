
import { useContext, useReducer, useState } from 'react';
import './App.css';
import videoDB from './data/data';
import AddVideo from './component/AddVideo';
import VideoList from './component/VideoList';
import ThemeContext from './context/ThemeContext';

function App() {
  
  //USE STATE
  const [mode, setMode] = useState('lightMode');
  const [editableVideo, setEditableVideo] = useState(null);
  
  //USE REDUCE STATE 
  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  //REDUCER FUNTIONS
  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        return [
          ...videos,
          { ...action.payload, id: videos.length + 1, }
        ]
      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)
      case 'UPDATE':
        const index = videos.findIndex(v => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos
    }
  }

  //EDIT FUNCTION FOR VIDEO
  function editVideo(id) {
    // dispatch({type: 'EDIT', payload: id});
    setEditableVideo(videos.find(video => video.id === id));
  }

  //CONTENT FOR CHANGE THE THEME ******************************** NOT IN USE
  // const themeContext = useContext(ThemeContext);
  // console.log({ themeContext });

  return (
    <ThemeContext.Provider value={mode}>
      <div className={`min-h-screen mx-auto bg-zinc-900 lightMode:bg-white text-white p-5 ${mode}`}>
      <button className='absolute top-0 right-5' onClick={() => setMode(mode === 'darkMode' ? 'lightMode': 'darkMode')}>Toggle Mode</button>
        <div className="container mx-auto">
          <div className='bg-zinc-800 p-6 rounded-xl'>
            <h1 className='text-2xl mb-4'>Upload Your Video</h1>
            <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
          </div>
          <h2 className='text-3xl mt-5'>Video Application</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
            <VideoList dispatch={dispatch} videos={videos} editVideo={editVideo} />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

