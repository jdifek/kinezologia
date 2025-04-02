import { motion } from 'framer-motion'

const VIDEO_ITEMS = [
	{
		title: 'Отзыв на вебинар, с семинара по СК в г. Барнауле 2024 год',
		src: 'https://player.vimeo.com/video/1071876704?h=6a415a166f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
	},
	{
		title: 'Отзыв после сеанса СК',
		src: 'https://player.vimeo.com/video/1071876635?h=8f76aec2a1&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
	},
	{
		title: 'Отзыв от гениального спортсмена',
		src: 'https://player.vimeo.com/video/1071876773?h=6376a5a996&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
	},
	{
		title: 'Отзыв с семинара СК в г. Барнауле 2024 год',
		src: 'https://player.vimeo.com/video/1071876172?h=4bc1949f1d&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
	},
	{
		title: 'Отзыв с семинара СК в г. Барнауле 2024 год',
		src: 'https://player.vimeo.com/video/1071838458?h=76eeacc0a9&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
	},
]

export const VideoReviews = () => {
	return (
		<section className='py-16 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.h3
					className='text-2xl md:text-3xl font-semibold text-blue-600 mb-12 text-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					Видеоотзывы выпускников
				</motion.h3>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{VIDEO_ITEMS.map((video, index) => (
						<motion.li
							key={video.title}
							className='bg-white rounded-xl shadow-lg overflow-hidden'
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<div className='relative w-full py-[50%]'>
								<iframe
									className='absolute top-0 left-0 w-full h-full'
									width='362'
									height='203'
									src={video.src}
									title={video.title}
									allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media'
								/>
							</div>
							<div className='p-4'>
								<p className='text-gray-700 font-medium text-center'>
									{video.title}
								</p>
							</div>
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	)
}
