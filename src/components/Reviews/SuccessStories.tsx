import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../assets/styles/CarouselSlider.css'

const STORIES = [
	{
		name: 'Кретова Юлия Алексеевна',
		profession:
			'Женский психолог, Автор/ ведущая марафонов/тренингов, член «Общероссийской профессиональной психотерапевтической лиги», Сооснователь проекта «YNeco»,Эксперт психолог авторской колонки DETKIDS',
		story:
			'Благодарю Алтайскую школу прикладной кинезиологии, в лице Кудряшовой Ирины Александровны и Сущевского Вениамина Ивановича за авторский курс «Германская Новая Медицина с позиции сканирующей кинезиологии»! Это были два дня, плодотворной работы.  Для меня, были важны два параметра. Первое, качественно и понятно изложенные основы подхода и авторское видение. Второе, очень важно было практическое применение и возможность задавать вопросы в процессе! Оба пункта были реализованы на 100%.  Всё было комфортно организовано и созданы все условия для отработки. Данный подход и техника, позволяет по-другому взглянуть на ряд заболеваний, их диагностику и коррекцию.',
		img: '/images/placeholder.png',
	},
	{
		name: 'Сергей М.',
		story:
			'Продвинутый курс дал мне уверенность в работе с сложными случаями реабилитации.',
		img: '/images/placeholder.png',
	},
	{
		name: 'Ольга П.',
		story:
			'Специализированные модули помогли мне открыть собственную практику.',
		img: '/images/placeholder.png',
	},
]

export const SuccessStories = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
	}

	return (
		<section className='py-16 bg-gray-50 rounded-2xl text-center'>
			<div className='carousel container mx-auto px-4'>
				<motion.h3
					className='text-2xl md:text-3xl font-semibold text-blue-600 mb-12 text-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					Истории успеха
				</motion.h3>
				<Slider {...settings}>
					{STORIES.map(story => (
						<div
							key={story.name}
							className='flex flex-col md:flex-row items-center md:justify-evenly p-5'
						>
							<img
								src={story.img}
								alt={story.name}
								className='w-20 md:w-24 h-20 md:h-24 rounded-full object-cover mb-4 border-2 border-[#e5e7eb]'
							/>
							<div className='text-center'>
								<h4 className='text-xl font-semibold text-blue-600 mb-3'>
									{story.name}
								</h4>
								<p className='text-gray-600 text-[12px] italic'>
									{story.profession}
								</p>
								<p className='mt-2.5 text-gray-600 italic'>"{story.story}"</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	)
}
