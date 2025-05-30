import { motion } from 'framer-motion'
import { AwardsAndBenefitsItems } from '../../types'

const SEMINARS = [
	'Германская новая медицина с позиции сканирующей кинезиологии',
	'Фитотерапия в практике Сканирующей кинезиологии',
	'Сканирующая кинезиология – новый подход в эстетическом тейпировании лица и тела',
	'Мышечно-фациальные цепи: диагностика и коррекция с позиции сканирующей кинезиологии.',
]

const AWARDS: AwardsAndBenefitsItems[] = [
	{
		dot: '•',
		label:
			'Невролог, КМН. Практикующий мануальный терапевт с 1985 года. Кинезиолог с 1992 года.',
	},
	{
		dot: '•',
		label:
			'Преподаватель высшей школы (АКАДЕМИЯ МК и МТ Профессора Васильевой Л.Ф. с 2009 года)',
	},
	{
		dot: '•',
		label: 'Академик РАМТН',
	},
	{
		dot: '•',
		label: 'Основатель авторской школы Сканирующая Кинезиология',
	},
]

export const SchoolsHistory = () => {
	return (
		<section className='py-16 bg-white'>
			<motion.div
				className='max-w-5xl mx-auto text-gray-700 mb-10 text-lg space-y-4'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.2 }}
				viewport={{ once: true }}
			>
				<div className='flex max-lg:flex-wrap gap-12'>
					<div className='space-y-4'>
						<p>
							Метод сканирующей кинезиологии относительно молод. Автор начал его
							разработку метода в 2018 году. Презентация метода успешно прошла в
							17 февраля 2023 года в Дубае.
						</p>
						<p>
							В 2023 году была организована школа сканирующей кинезиологии по
							рекомендации профессора Васильевой Л.В. В этом году был проведен
							первый мастер-класс в городе Барнауле. Первый семинар по
							сканирующей кинезиологии прошел в городе Барнауле в ноябре 2024
							года.
						</p>
					</div>
					<img
						src='/images/photo_2025-03-30_12-40-24.jpg'
						alt='Схема метода СК'
						className='object-cover object-top rounded-2xl shadow-sm max-lg:w-full w-1/2 lg:h-[260px]'
					/>
				</div>
				<div className='flex max-lg:flex-wrap gap-12'>
					<p>
						В 2023 году была организована школа сканирующей кинезиологии по
						рекомендации профессора Васильевой Л.В. В этом году был проведен
						первый мастер-класс в городе Барнауле. Первый семинар по сканирующей
						кинезиологии прошел в городе Барнауле в ноябре 2024 года.
					</p>

					<img
						src='/images/seminar-barnaul-2024.jpg'
						alt='Схема метода СК'
						className='object-cover object-top rounded-2xl shadow-sm max-lg:w-full w-1/2 lg:h-[180px]'
					/>
				</div>
				<p className='my-4'>
					А также проведены мастер-классы в Москве, Новосибирске и «Федеральном
					Курорте Белокуриха».
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<div className='space-y-4'>
						<img
							src='/images/testingm-muscle.jpg'
							alt='Схема метода СК'
							className='object-cover object-top rounded-2xl shadow-sm w-full'
						/>
						<p className='text-base italic mb-5'>
							Тестирование подвздошно-поясничной мышцы. Мастеркласс по СК на
							Федеральном курорте "Белокуриха"2023 г.
						</p>
						<p className='text-base italic text-end'>
							Мастеркласс в городе Новосибирск.
						</p>
					</div>
					<div className='space-y-1'>
						<img
							src='/images/masterclass-novosibirsk.jpg'
							alt='Схема метода СК'
							className='object-cover object-top rounded-2xl shadow-sm w-full'
						/>
					</div>
				</div>
				<div className='flex max-lg:flex-wrap gap-12'>
					<div className='space-y-1'>
						<img
							src='/images/masterclass.jpg'
							alt='Схема метода СК'
							className='object-cover object-top rounded-2xl shadow-sm w-full'
						/>
						<p className='text-sm italic'>
							Мастер-класс по методу "Сканирующая кинезиология" для врачей
							Шуваловской клиники, г. Москва, 2024 год.
						</p>
					</div>
					<div className='space-y-4'>
						<p>
							Доктор В.И. Сущевский – мануальный терапевт, занимается прикладной
							кинезиологией с самого ее основания в России вместе с профессором
							Л.Ф. Васильевой, являясь ее соратником по настоящее время.
						</p>
						<p>
							Сегодня мы - единственная кинезиологическая школа в стране, с
							запатентованными методами.
						</p>
						<p>
							В настоящее время предлагается обучение на базовом семинаре:
							«Основы сканирующей кинезиологии. Диагностика и коррекция болевого
							синдрома», а также ряд семинаров с углубленным изучением вопросов
							диагностики и коррекции биохимических, висцеральных проблем и
							дисбаланса, связанного с вегетативными нарушениями.
						</p>
						<p>
							Периодически проводятся семинары по темам: «Кросстейпирование с
							позиции сканирующей кинезиологии» и «Персонализированный
							комбитейпинг в практике сканирующего кинезиолога».
						</p>
					</div>
					<img
						src='/images/about-photo-1.jpg'
						alt='Схема метода СК'
						className='object-cover object-center rounded-2xl shadow-sm w-full h-[560px] md:h-[620px] lg:h-[420px]'
					/>
				</div>
				<p>
					На осень 2025г. – 2026г. запланированы новые семинары по темам:
					{SEMINARS.map((seminar, index) => (
						<div key={index}>
							<span className='text-blue-500 text-3xl font-black mr-1.5'>
								-
							</span>
							{seminar}
						</div>
					))}
				</p>
			</motion.div>

			<div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
				<motion.div
					className='prose max-w-3xl mx-auto text-gray-700 space-y-6 text-lg'
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<p>
						Доктор В.И. Сущевский – мануальный терапевт, занимается прикладной
						кинезиологией с самого её основания в России вместе с профессором
						Л.Ф. Васильевой. В течение многих лет уделял особое внимание
						нахождению первопричины дисфункций и их коррекций методом прикладной
						кинезиологии. Значительная часть его работы связана со спортом
						высших достижений (футболисты национальной лиги, волейбол- высшая
						лига, кикбоксинг, бокс, классическая борьба, вольная борьба, дзюдо,
						тяжелая атлетика, легкая атлетика, фигурное катание на коньках,
						художественная гимнастика, шахматы, биатлон, горные лыжи). Занимался
						реабилитацией олимпийских чемпионов и чемпионов мира.
					</p>
					<p>
						В настоящее время имеет частную практику, где принимает 30-45
						пациентов в месяц. Является автором метода «Сканирующая
						кинезиология», которая позволяет быстро и точно находить
						первопричину дисфункции в организме и проводить их коррекцию,
						получая стойкий эффект.
					</p>
					<p>
						Преподавательскую деятельность начал в 2009г. на кафедре мануальной
						терапии, возглавляемой профессором Л.Ф. Васильевой г.Москва, с
						проведения авторского семинара «Лимфология с позиции прикладной
						кинезиологии».
					</p>
					<p>
						Сущевский В.И. является преподавателем высшей школы и проводит
						обучение для специалистов телесно-ориентированных практик с
						использованием авторских и иных современных подходов к оздоровлению
						человека.
					</p>
				</motion.div>

				<div className='flex flex-col items-center'>
					<div className='relative w-full max-w-sm'>
						<img
							src='/images/professor.jpg'
							alt='Профессор Сущевский В.И.'
							className='object-cover object-top rounded-2xl shadow-sm'
						/>
					</div>
					<motion.ul
						className='mt-6 text-gray-700 text-lg space-y-2 bg-blue-50 p-4 rounded-xl w-full max-w-sm shadow'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
					>
						{AWARDS.map((item, index) => (
							<li key={index} className='flex items-start gap-2'>
								<span className='text-blue-600 font-semibold'>{item.dot}</span>
								<p className='text-base'>{item.label}</p>
							</li>
						))}
					</motion.ul>
				</div>
			</div>
		</section>
	)
}
