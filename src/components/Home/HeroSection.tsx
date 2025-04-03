import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import Slider from 'react-slick'
import '../../assets/styles/CarouselSlider.css'

const sliderSettings = {
	dots: true,
	arrows: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
}

const CAROUSEL_ITEMS = [
	{
		content: (
			<>
				{/* mob */}
				<div className='block sm:hidden text-center'>
					<div className='flex flex-wrap justify-between items-center gap-4 mb-4'>
						<img
							src='/images/professor-cut.jpg'
							alt='Левое изображение'
							className='w-[40%] max-w-[120px] h-[96px] rounded-md'
						/>

						<img
							src='/icons/logo.png'
							alt='Правое изображение'
							className='w-[40%] max-w-[120px] h-[96px] rounded-md'
						/>
					</div>

					<h3 className='text-lg font-semibold text-blue-700'>
						«Школа сканирующей кинезиологии»
					</h3>

					<p className='text-gray-700'>
						Автор: Сущевский В.И. академик АМТН, к.м.н., невролог, реабилитолог,
						мануальный терапевт, врач спортивной медицины, кинезиолог.
					</p>
				</div>
				{/* desktop */}
				<div className='hidden sm:block text-center'>
					<div className='flex gap-2 mb-4'>
						<img
							src='/images/professor-cut.jpg'
							alt='Левое изображение'
							className='w-[25%] h-[96px] rounded-md'
						/>

						<h3 className='text-lg font-semibold text-blue-700 w-full'>
							«Школа сканирующей кинезиологии»
						</h3>

						<img
							src='/icons/logo.png'
							alt='Правое изображение'
							className='w-[25%] h-[96px] rounded-md'
						/>
					</div>
					<p className='text-gray-700'>
						Автор: Сущевский В.И. академик АМТН, к.м.н., невролог, реабилитолог,
						мануальный терапевт, врач спортивной медицины, кинезиолог.
					</p>
				</div>
			</>
		),
	},
	{
		content: (
			<p className='text-gray-700'>
				«Школа сканирующей кинезиологии» проводит обучение авторскому методу
				«Сканирующая кинезиология» в рамках дополнительного образования. Метод
				«Сканирующая кинезиология» был представлен международному
				профессиональному сообществу в 2023 году г. Дубай (ОАЭ) по приглашению
				Ассоциации прикладных кинезиологов Объединенных Арабских Эмиратов и
				основоположника прикладной кинезиологии в России доктора медицинских
				наук, профессора Васильевой Л.Ф., на базе международной клиники
				спортивной медицины г. Дубай (ОАЭ) и медицинского центра холистического
				исцеления Holistic Healing Medical Center г. Дубай.
			</p>
		),
	},
	{
		content: (
			<p className='text-gray-700'>
				Метод «Сканирующая кинезиология» – это комплексный персонализированный
				способ восстановления, поддержания и развития здоровья человека,
				позволяющий быстро проводить диагностику и коррекцию дисфункций
				организма человека. Общеизвестно, что тело человека, его миофасциальный
				каркас реагирует изменениями тонуса на экзо- и эндогенные стрессы, при
				этом в основе самого стресса могут лежать структурные, биохимические,
				эмоциональные, энергетические нарушения или их сочетания.
			</p>
		),
	},
	{
		content: (
			<p className='text-gray-700'>
				Как показывает опыт, не менее чем в 90 % случаев патологической или
				компенсаторной миофиксации имеется связь с эмоциональными стрессами,
				которые «фиксируются» в определенных органах тела человека и связанных с
				ними зонах головного мозга. Сорокалетний опыт работы в
				телесно-ориентированных практиках позволил автору метода «Сканирующая
				кинезиология» предложить новый способ диагностики и коррекции дисфункций
				организма человека - трансорбитальный, посредством которого происходит
				воздействие на структуры головного мозга через дистантные рецепторы
				сетчатки глаза, где головной мозг выступает в роли сканера и
				корреспондирует с органами, в которых имеется проблема.
			</p>
		),
	},
	{
		content: (
			<p className='text-gray-700'>
				По методу «Сканирующая кинезиология» (способу диагностики и коррекции
				дисфункций организма человека) автором проводятся мастер-классы и
				обучающие семинары. Базовым семинаром является семинар по теме «Основы
				сканирующей кинезиологии. Диагностика и коррекция болевого синдрома»,
				после освоения которого возможно обучение на тематических семинарах. Уже
				после освоения метода «Сканирующая кинезиология» в рамках базового
				семинара, курсанты могут свободно применять на практике указанный метод
				диагностики и коррекции, и получать высокоэффективные результаты.
			</p>
		),
	},
	{
		content: (
			<p className='text-gray-700'>
				Мастер-классы и семинары будут интересны всем специалистам
				телесно-ориентированных практик. По окончании обучения на семинарах
				автором выдаются сертификаты «Школы сканирующей кинезиологии» с правом
				использования метода и способа для выполнения диагностики и коррекции
				дисфункций организма человека, без права преподавания. Подготовка
				преподавателей проводится на специальных семинарах.
			</p>
		),
	},
	{
		content: (
			<div className='text-center'>
				<p className='text-gray-700 mb-4'>
					Принимаются заявки от организаций и частных лиц на проведение
					обучающих семинаров и мастер-классов.
				</p>
				<img
					src='/images/qr-code.jpg'
					alt='QR-код'
					className='w-32 h-32 mx-auto rounded-md'
				/>
			</div>
		),
	},
]

export const HeroSection = () => {
	return (
		<section className='py-20 px-5 bg-gradient-to-b from-white via-blue-100 to-white'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6 }}
				className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'
			>
				<div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className='text-3xl font-bold text-blue-700 mb-4 tracking-tight'
					>
						Школа сканирующей кинезиологии академика Сущевского В.И.
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className='text-lg sm:text-xl text-gray-600 mb-8'
					>
						Единственная авторская школа кинезиологии в России основанная на
						запатентованных методиках{' '}
					</motion.p>
					<div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
						<Button>Записаться на курс</Button>
						<Button className='!border-2 !border-blue-600 !text-blue-600 !bg-transparent hover:bg-blue-50!'>
							Онлайн-оплата
						</Button>
					</div>
				</div>

				<div className='carousel w-full flex justify-center'>
					<Slider {...sliderSettings} className='w-full max-lg:w-full'>
						{CAROUSEL_ITEMS.map((item, index) => (
							<div key={index} className='p-2'>
								{item.content}
							</div>
						))}
					</Slider>
				</div>

				{/* <div className='relative w-full h-full aspect-square'>
					<video
						className='w-full rounded-xl shadow-xl border border-gray-200'
						controls
						muted
						autoPlay
						loop
						src='/videos/hero-presentation.mp4'
					>
						Ваш браузер не поддерживает видео.
					</video>
					<p className='text-center text-gray-500 mt-4 italic'>
						Основатель школы рассказывает о наших уникальных методиках
					</p>
				</div> */}
			</motion.div>
		</section>
	)
}
