import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SinglePostPage from './pages/SinglePostPage'
import BlogPage from './pages/BlogPage'
import CategoryPage from './pages/CategoryPage'
import ContactPage from './pages/ContactPage'

function App() {
	return (
		<div className='flex min-h-screen flex-col bg-slate-50 font-sans'>
			<Header />

			<main id='main-content' className='flex-1'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/blog' element={<BlogPage />} />
					<Route path='/blog/kategoria/:slug' element={<CategoryPage />} />
					<Route path='/post/:slug' element={<SinglePostPage />} />
					<Route path='/kontakt' element={<ContactPage />} />
				</Routes>
			</main>

			<Footer />
		</div>
	)
}

export default App
