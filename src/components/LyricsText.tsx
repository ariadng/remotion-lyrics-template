import React from 'react';

export const LyricsText: React.FC = ({
	// @ts-ignore
	display,
	// @ts-ignore
	text,
}) => {
	return (
		<>
			{display &&
				<div className='text-[5rem] bg-black/80 py-[2rem] px-[4rem] rounded-[2rem] text-white text-center'>
					{text}
				</div>
			}
		</>
	);
}