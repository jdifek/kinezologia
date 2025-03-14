import { motion } from 'framer-motion'
import { AwardsAndBenefitsItems } from '../../types'

const AWARDS: AwardsAndBenefitsItems[] = [
	{
		dot: '•',
		label:
			'Невролог, КМН. Практикующий мануальный терапевт с 1985 года. Кинезиолог с 1992 года.',
	},
	{
		dot: '•',
		label:
			'Преподаватель высшей школы (АКАДЕМИЯ МК и МТ Профессора Васильевой Л.Ф. с 2010 года)',
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
			<motion.h2
				className='text-2xl md:text-3xl font-semibold text-blue-600 mb-8 text-center'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				История школы
			</motion.h2>
			<motion.div
				className='max-w-5xl mx-auto text-gray-700 mb-10 text-lg space-y-6'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.2 }}
				viewport={{ once: true }}
			>
				<p>
					Школа прикладной кинезиологии была основана в 2010 году группой
					энтузиастов, стремящихся объединить науку и практику для улучшения
					здоровья людей. За годы работы мы разработали уникальные методики,
					которые получили признание в России и за её пределами.
				</p>
				<p>
					Сегодня мы — единственная школа в стране с запатентованными подходами,
					обучающая врачей, массажистов и всех, кто хочет освоить кинезиологию
					на профессиональном уровне.
				</p>
				<p>
					В настоящее время предлагается обучение на базовом семинаре: «Основы
					сканирующей кинезиологии. Диагностика и коррекция структурных
					дисфункций», а также ряде семинаров с углубленным изучением вопросов
					диагностики и коррекции биохимических, эмоциональных, висцеральных
					проблем и дисбаланса, связанного с вегетативными нарушениями.
				</p>
				<p>
					Периодически проводятся семинары по темам: «Кросстейпирование с
					позиции сканирующей кинезиологии» и «Персонализированный комбитейпинг
					в практике сканирующего кинезиолога».
				</p>
				<p>
					На осень 2024г. – 2025г. запланированы новые семинары по темам
					«Германская новая медицина с позиции сканирующей кинезиологии»,
					«Фитотерапия в практике сканирующей кинезиологии», «Ароматерапия в
					практике сканирующей кинезиологии», «Сканирующая кинезиология – новый
					подход в эстетическом тейпировании лица и тела», «Мышечно-фасциальные
					цепи: диагностика и коррекция с позиции сканирующей кинезиологии».
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
						В настоящее время имеет частную практику, где принимает 70-80
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
							src='/images/professor.png'
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
