import React, { useContext } from 'react'
import Video from './Video'
import PlayButton from './PlayButton'
import VideosContext from '../context/VideosContext';

function VideoList({  editVideo }) {
	const videos = useContext(VideosContext);
	return (
		<>
			{videos.map(video =>
				<Video
					key={video?.id}
					title={video?.title}
					views={video?.views}
					time={video?.time}
					channel={video?.channel}
					verified={video?.verified}
					id={video?.id}
					editVideo={editVideo}
				>
					<PlayButton
						message="Hi"
						onPlay={() => console.log('Playing', video.title)}
						onPause={() => console.log('Paused', video.title)}
					>{video.title}</PlayButton>
				</Video>)}
		</>
	)
}

export default VideoList