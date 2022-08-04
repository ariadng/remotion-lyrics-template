import React, { useEffect, useState } from 'react';
import { useCurrentFrame, staticFile, useVideoConfig } from 'remotion';
import { default as SrtParser } from 'srt-parser-2';
import { LyricsText } from './LyricsText';

export const Lyrics: React.FC = () => {

	const frame = useCurrentFrame();

	const { fps } = useVideoConfig();

	const lyricsSource = staticFile('/lyrics.srt');
	const parser = new SrtParser();

	const [ lyricsRaw, setLyricsRaw ] = useState('');
	const [ lyrics, setLyrics ] = useState([]);

	const fetchLyrics = async () => {
		const response = await fetch(lyricsSource);
		const text = await response.text();
		setLyricsRaw(text);
	}

	useEffect(() => {
		fetchLyrics();
	}, []);

	useEffect(() => {

		const lyricsArray: any[] = [];

		parser.fromSrt(lyricsRaw).forEach(({ startTime, endTime, text }) => {
			
			const [ sh, sm, ss ] = startTime.split(':');
			let startFrame = 0;

			startFrame += parseInt(sh) * fps * 3600;
			startFrame += parseInt(sm) * fps * 60;
			
			const [sss,ssm] = ss.split(',');
			startFrame += parseInt(sss) * fps;
			startFrame += Math.floor(parseInt(ssm) * fps / 1000);

			const [eh, em, es] = endTime.split(':');
			let endFrame = 0;

			endFrame += parseInt(eh) * fps * 3600;
			endFrame += parseInt(em) * fps * 60;

			const [ess, esm] = es.split(',');
			endFrame += parseInt(ess) * fps;
			endFrame += Math.floor(parseInt(esm) * fps / 1000);
			endFrame -= 1;

			lyricsArray.push({ startFrame, endFrame, text });

		});

		// @ts-ignore
		setLyrics(lyricsArray);
	}, [lyricsRaw]);

	return (
		<div className='absolute top-0 left-0 z-[9000] w-full h-full pb-[12rem] px-[4rem] flex flex-col items-center justify-end flex-wrap'>
			{lyrics.map(({ startFrame, endFrame, text }, index) => 
				// @ts-ignore
				<LyricsText key={index} text={text} display={ frame >= startFrame && frame <= endFrame } />
			)}
		</div>
	);
} 