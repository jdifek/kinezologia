import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'
import { PatentItems } from '../../types'

const PATENT_ITEMS: PatentItems[] = [
	{
		title: 'Методика глубокой мышечной активации',
		descr:
			'Авторская методика диагностики и активации глубоких мышечных слоев с помощью мануальных техник и кинезиотейпирования. Позволяет восстановить баланс и устранить хроническую усталость.',
		src: '/public/images/placeholder.png',
	},
	{
		title: 'Нейрокинезиологическая коррекция осанки',
		descr:
			'Специальная методика коррекции осанки через работу с проприоцепцией и нейромышечной связью. Подходит для детей и взрослых, страдающих от сколиоза и других нарушений осанки.',
		src: '/public/images/placeholder.png',
	},
	{
		title: 'Кинезиологический массаж для восстановления после травм',
		descr:
			'Уникальная техника сочетания мягкотканевого массажа и кинезиологических тестов для ускоренного восстановления после спортивных и бытовых травм.',
		src: '/public/images/placeholder.png',
	},
]

export const PatentsSection = () => {
	return (
		<>
			<ParallaxBanner
				layers={[
					{
						image: '/images/professor-patents.jpg',
						speed: -10,
						expanded: false,
					},
				]}
			>
				<div className='overlay'></div>
				<div className='container flex flex-col justify-center lg:h-[900px] xl:h-[1000px] pt-8 pb-32 relative z-10'>
					<div className='flex max-sm:flex-wrap-reverse max-sm:gap-4 justify-between items-center mb-auto max-lg:mb-8'>
						<motion.h2
							className='text-3xl md:text-4xl font-bold text-blue-400 text-center mb-16 tracking-tight'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
						>
							Патенты на методики
						</motion.h2>

						<img
							src='/icons/logo.png'
							alt='Логотип'
							className='w-28 h-24 max-sm:w-16 max-sm:h-12'
						/>
					</div>
					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{PATENT_ITEMS.map((patent, index) => (
							<motion.li
								key={patent.title}
								className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow'
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
							>
								<img
									src={patent.src}
									alt={patent.title}
									className='w-full h-44 object-cover rounded-md mb-4'
								/>
								<h3 className='text-center text-gray-700 font-medium text-lg mb-2'>
									{patent.title}
								</h3>
								<p className='text-center text-gray-600'>{patent.descr}</p>
							</motion.li>
						))}
					</ul>
				</div>
			</ParallaxBanner>
		</>
	)
}
