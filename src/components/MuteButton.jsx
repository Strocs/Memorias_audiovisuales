/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { MutedIcon } from './icons/MutedIcon'
import { SoundIcon } from './icons/SoundIcon'

// FIX: mute button disable swipe
export const MuteButton = ({ muted }) => {
	const [isMuted, setIsMuted] = useState(muted)

	useEffect(() => {
		const activeVideo = document.querySelector('.swiper-slide-active')
		activeVideo.children[0].muted = isMuted
	}, [isMuted])
	console.log(isMuted)
	return (
		<button
			className='w-full text-white absolute top-0 bottom-0 my-auto z-10'
			onClick={() => setIsMuted(!isMuted)}
		>
			{isMuted ? <MutedIcon /> : <SoundIcon />}
		</button>
	)
}
