/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { MutedIcon } from './icons/MutedIcon'
import { SoundIcon } from './icons/SoundIcon'

export const MuteButton = () => {
	const [isMuted, setIsMuted] = useState(true)

	useEffect(() => {
		const activeVideo = document.querySelector('.swiper-slide-active').querySelector('video')
		activeVideo.muted = isMuted
	}, [isMuted])

	return (
		<button type='button' onClick={() => setIsMuted(!isMuted)}>
			{isMuted ? <MutedIcon /> : <SoundIcon />}
		</button>
	)
}
