'use client';

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { experiences } from '../constants';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';

const Experience = () => {
	const contentRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	useGSAP(() => {
		gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
		gsap.fromTo('.exp img', { opacity: 0, xPercent: -100 }, {
			xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
		})
		gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
			yPercent: 0, opacity: 100, ease: 'power1.inOut'
		})
		gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
			yPercent: 0, opacity: 100, ease: 'power1.inOut'
		})
	}, [currentIndex]);

	const totalExperience = experiences.length;

	const goToSlide = (index) => {
		const newIndex = (index + totalExperience) % totalExperience;

		setCurrentIndex(newIndex);
	}

	const getExperienceAt = (indexOffset) => {
		return experiences[(currentIndex + indexOffset + totalExperience) % totalExperience]
	}

	const currentExperience = getExperienceAt(0);
	const prevExperience = getExperienceAt(-1);
	const nextExperience = getExperienceAt(1);

	return (
		<section id="experience" aria-labelledby="exp-heading" className='relative w-full min-h-screen px-4 pt-20'>
			<img src="/imgs/slider-left-leaf.webp" alt="left-leaf" id="left-leaf" />
			<img src="/imgs/slider-right-leaf.webp" alt="right-leaf" id="right-leaf" />
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
					backgroundSize: "50px 50px",
				}}
			></div>
			{/* <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 to-black/50 pointer-events-none" /> */}

			<div className="w-full max-w-7xl mx-auto mb-8 px-4">
				<h1 className="
                text-xl sm:text-4xl font-bold max-w-fit pb-6
                bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                text-transparent bg-clip-text font-serif
                ">
					Experience
				</h1>
				<p className="text-2xl mb-2">
					It's not a just about existence. Its about <strong className="text-[#8C39D9] font-bold">impact and cultivating</strong> a legacy that transcends time.
				</p>
			</div>

			<div
				className="experience-tabs"
				aria-label="Experience Navigation">
				{experiences.map((experience, index) => {
					const isActive = index === currentIndex;

					return (
						<button key={experience.id} className={`bg-none
				${isActive
								? 'text-white'
								: ''}
			 `} onClick={() => goToSlide(index)}
						>
							{experience.name}
						</button>
					)
				})}
			</div>

			<div className="flex flex-col justify-between items-center container mx-auto relative max-w-7xl">
				<div className="w-full flex items-center justify-between absolute px-4">
					<div
						onClick={() => goToSlide(currentIndex - 1)}
						className='hover:cursor-pointer'
					>
						<CircleChevronLeft size={36} color='#b82e85' />
					</div>

					<div
						onClick={() => goToSlide(currentIndex + 1)}
						className='hover:cursor-pointer'
					>
						<CircleChevronRight size={36} color='#b82e85' />
					</div>
				</div>

				<div className="exp flex items-center justify-center mt-10">
					<img src={currentExperience.image} alt='company logo' className='object-contain h-[50vh]' />
				</div>

				<div className="exps">
					<div ref={contentRef} className="info">
						<p id="title">{currentExperience.name}</p>
					</div>

					<div className="details space-y-5 md:max-w-md text-left">
						<h2 className='md:text-3xl text-xl font-serif'>{currentExperience.title}</h2>
						<p className='md:text-base pe-5 -mt-4'>{currentExperience.period}</p>
						<ul className="space-y-4">
							{currentExperience.list.map((points, index) => (
								<li key={index} className="flex items-center gap-2">
									<p>{points}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Experience
