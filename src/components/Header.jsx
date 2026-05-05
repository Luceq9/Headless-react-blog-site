import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const navItems = [
	{ label: 'Start', to: '/' },
	{ label: 'Blog', to: '/blog' },
	{ label: 'Kontakt', to: '/kontakt' },
]

function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const [search, setSearch] = useState('')
	const [largeText, setLargeText] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		document.documentElement.style.fontSize = largeText ? '18px' : ''
	}, [largeText])

	function handleSearch(event) {
		event.preventDefault()

		const query = search.trim()

		if (!query) {
			navigate('/blog')
			setIsOpen(false)
			return
		}

		navigate(`/blog?q=${encodeURIComponent(query)}`)
		setIsOpen(false)
	}

	return (
		<header className='sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl'>
			<a
				href='#main-content'
				className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white'>
				Przejdź do treści
			</a>

			<div className='mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4'>
				<Link to='/' className='flex items-center gap-3'>
					<span className='grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-lg font-bold text-white'>
						H
					</span>

					<span className='flex flex-col leading-tight'>
						<span className='text-lg font-bold text-slate-950'>HeadlessBlog</span>
						<span className='text-xs font-medium text-slate-500'>React + WordPress</span>
					</span>
				</Link>

				<nav className='hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex'>
					{navItems.map(item => (
						<NavLink
							key={item.label}
							to={item.to}
							className={({ isActive }) => `transition hover:text-slate-950 ${isActive ? 'text-cyan-700' : ''}`}>
							{item.label}
						</NavLink>
					))}
				</nav>

				<div className='hidden items-center gap-3 md:flex'>
					<form
						onSubmit={handleSearch}
						className='flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
						<input
							type='search'
							value={search}
							onChange={event => setSearch(event.target.value)}
							placeholder='Szukaj...'
							aria-label='Szukaj wpisów'
							className='w-40 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400'
						/>
						<button type='submit' className='text-sm font-semibold text-cyan-700 hover:text-cyan-900'>
							Szukaj
						</button>
					</form>

					<button
						type='button'
						onClick={() => setLargeText(prev => !prev)}
						aria-pressed={largeText}
						className='rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100'>
						{largeText ? 'A-' : 'A+'}
					</button>
				</div>

				<button
					type='button'
					aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
					aria-expanded={isOpen}
					onClick={() => setIsOpen(prev => !prev)}
					className='grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-800 md:hidden'>
					<span className='text-2xl leading-none'>{isOpen ? '×' : '☰'}</span>
				</button>
			</div>

			{isOpen && (
				<div className='border-t border-slate-200 bg-white px-6 py-5 md:hidden'>
					<nav className='flex flex-col gap-4 text-sm font-semibold text-slate-700'>
						{navItems.map(item => (
							<NavLink
								key={item.label}
								to={item.to}
								onClick={() => setIsOpen(false)}
								className={({ isActive }) =>
									`transition hover:text-slate-950 ${isActive ? 'font-bold text-cyan-700' : ''}`
								}>
								{item.label}
							</NavLink>
						))}
					</nav>

					<form onSubmit={handleSearch} className='mt-5 flex gap-2 border-t border-slate-200 pt-5'>
						<input
							type='search'
							value={search}
							onChange={event => setSearch(event.target.value)}
							placeholder='Szukaj wpisów...'
							aria-label='Szukaj wpisów'
							className='min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-cyan-500'
						/>
						<button type='submit' className='rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white'>
							Szukaj
						</button>
					</form>

					<button
						type='button'
						onClick={() => setLargeText(prev => !prev)}
						aria-pressed={largeText}
						className='mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-bold text-slate-700'>
						{largeText ? 'Zmniejsz tekst' : 'Powiększ tekst'}
					</button>
				</div>
			)}
		</header>
	)
}

export default Header
