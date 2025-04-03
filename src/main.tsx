import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ParallaxProvider>
				<App />
			</ParallaxProvider>
		</BrowserRouter>
	</StrictMode>
)
