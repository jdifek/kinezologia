import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'
import { AdvantagesItems } from '../../types'

const ADVANTAGES_ITEMS: AdvantagesItems[] = [
	{
		title: 'Дополнительное образование',
		desc: 'Обучение в рамках дополнительного образования',
	},
	{
		title: 'Авторские методики',
		desc: 'Уникальные запатентованные подходы',
	},
	{
		title: 'Статистика пациентов',
		desc: 'Более 2000 человек прошедших оздоровление у автора методики и его учеников',
	},
]

export const AdvantagesSection = () => {
	return (
		<section className='py-20 bg-white relative overflow-hidden'>
			<ParallaxBanner
				layers={[{ image: '/images/advantages-photo.jpeg', speed: -20 }]}
			>
				<div className='overlay'></div>
				<div className='container flex flex-col justify-center lg:h-[900px] xl:h-[1500px] py-24 relative z-10'>
					<motion.h2
						className='text-3xl md:text-4xl font-bold text-blue-400 text-center mb-16 tracking-tight'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						Преимущества нашей школы
					</motion.h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{ADVANTAGES_ITEMS.map((item, index) => (
							<motion.div
								key={item.title}
								className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
							>
								<h3 className='text-xl font-semibold text-blue-600 mb-3'>
									{item.title}
								</h3>
								<p className='text-gray-600'>{item.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</ParallaxBanner>
		</section>
	)
}
