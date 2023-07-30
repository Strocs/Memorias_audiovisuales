/* eslint-disable no-unused-vars */
import { PlayIcon } from './icons/PlayIcon'
import { PauseIcon } from './icons/PauseIcon'
import { useEffect, useState } from 'react'

export const PauseButton = ({ muted }) => {
	const [isPlaying, setIsPlaying] = useState(true)

	useEffect(() => {
		const activeVideo = document.querySelector('.swiper-slide-active')
		if (isPlaying) {
			activeVideo.children[0].play()
		} else {
			activeVideo.children[0].pause()
		}
	}, [isPlaying])

	return (
		<button onClick={() => setIsPlaying(!isPlaying)}>
			{isPlaying ? <PauseIcon /> : <PlayIcon />}
		</button>
	)
}
