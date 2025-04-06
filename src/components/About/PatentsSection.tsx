import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'
import { PatentItems } from '../../types'


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
          <img
            src={'/images/2834352.eod (2).jpg'}
            alt={'title'}
            className='w-full max-w-xl mx-auto h-auto object-contain rounded-md mb-4 scale-60 mt-82'
          />
        </div>
      </ParallaxBanner>
    </>
  )
}
