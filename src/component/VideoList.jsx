import React, { useCallback, useEffect, useMemo } from 'react'
import Video from './Video'
import PlayButton from './PlayButton'
import useVideosHook from '../hooks/VideosHook';
import axios from 'axios';
import useVideoDispathHook from '../hooks/VideoDispatchHook';

function VideoList({ editVideo }) {
	const URL = "https://my.api.mockaroo.com/video_data.json?key=2fea8c50";

	const videos = useVideosHook();
	const dispatch = useVideoDispathHook();

	// async function getVideos() {
	// 	const res = await axios.get(URL);
	// 	// console.log(res.data);
	// 	dispatch({ type: 'LOAD', payload: res.data });
	// }

	useEffect(() => {
		async function getVideos() {
			const res = await axios.get(URL);
			// console.log(res.data);
			dispatch({ type: 'LOAD', payload: res.data });
		}
		getVideos();
	}, [dispatch]);

	const play = useCallback(() => console.log('Playing'))
	const pause = useCallback(() => console.log('Paused'))
	const memoButton = useMemo(() => (
		<PlayButton onPlay={play} onPause={pause}>
			Play
		</PlayButton>), [play, pause])

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
					{memoButton}
				</Video>)}
			{/* <button onClick={handleClick}>Get Video</button> */}
		</>
	)
}

export default VideoList