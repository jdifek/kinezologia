import { motion } from 'framer-motion'
import { CoursesItems } from '../../types'
import { Button } from '../ui/Button'

const COURSES_ITEMS: CoursesItems[] = [
	{
		title: 'Базовый курс',
		speaker: 'Вениамин Иванович Сущевский',
		description:
			'Основы сканирующей кинезиологии. Диагностика и коррекция болевого синдрома.',
		duration: '1 модуль - 3 дня',
		// price: '15 000 ₽',
	},
	// {
	// 	title: 'Продвинутый курс',
	// 	description: 'Углублённое изучение методик для практикующих специалистов.',
	// 	duration: '6 недель',
	// 	price: '25 000 ₽',
	// },
	// {
	// 	title: 'Специализированные модули',
	// 	description:
	// 		'Темы: спортивная кинезиология, реабилитация, детская практика.',
	// 	duration: '2 недели/модуль',
	// 	price: '10 000 ₽/модуль',
	// },
]

export const CoursePrograms = () => {
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
					Программы курсов
				</motion.h3>
				<ul className='grid grid-cols-1'>
					{COURSES_ITEMS.map((course, index) => (
						<motion.li
							key={course.title}
							className='flex flex-col justify-between bg-white p-6 gap-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<h4 className='text-xl font-semibold text-blue-600'>
								{course.title}
							</h4>
							<div>
								<p className='text-gray-500 mb-2'>
									<span className='font-medium'>Ведущий преподаватель:</span>{' '}
									{course.speaker}
								</p>
								<p className='text-gray-600 mb-2'>{course.description}</p>
								<p className='text-gray-500'>
									<span className='font-medium'>Длительность:</span>{' '}
									{course.duration}
								</p>
							</div>

							<Button className='!min-w-32 !w-fit !px-6 !py-2 hover:shadow-lg!'>
								Узнать больше
							</Button>
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	)
}
