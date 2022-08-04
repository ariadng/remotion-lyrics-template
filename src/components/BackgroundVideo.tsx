import React from 'react';
import { Video, staticFile } from 'remotion';

export const BackgroundVideo: React.FC = () => {

	const videoSource = staticFile('/video.mp4');

	return (
		<div className='w-full h-full'>
			<Video src={videoSource} className='w-full h-full' />
		</div>
	);
} 