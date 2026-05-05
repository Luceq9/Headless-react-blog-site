function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='border-t border-slate-200 bg-white'>
			<div className='mx-auto max-w-7xl px-6 py-10'>
				<div className='grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]'>
					<div>
						<a href='#' className='flex items-center gap-3'>
							<span className='grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-lg font-bold text-white'>
								H
							</span>
							<span className='flex flex-col leading-tight'>
								<span className='text-lg font-bold text-slate-950'>HeadlessApp</span>
								<span className='text-xs font-medium text-slate-500'>React + WordPress</span>
							</span>
						</a>

						<p className='mt-4 max-w-md text-sm leading-7 text-slate-500'>
							Prosty frontend pod headless WordPress. React odpowiada za wygląd, a WordPress za treści i API.
						</p>
					</div>

					<div>
						<h3 className='text-sm font-bold uppercase tracking-[0.18em] text-slate-900'>Menu</h3>
						<nav className='mt-4 flex flex-col gap-3 text-sm text-slate-500'>
							<a href='#' className='transition hover:text-slate-950'>
								Start
							</a>
							<a href='#posty' className='transition hover:text-slate-950'>
								Posty
							</a>
							<a href='#features' className='transition hover:text-slate-950'>
								Features
							</a>
							<a href='#kontakt' className='transition hover:text-slate-950'>
								Kontakt
							</a>
						</nav>
					</div>

					<div>
						<h3 className='text-sm font-bold uppercase tracking-[0.18em] text-slate-900'>Stack</h3>
						<ul className='mt-4 flex flex-col gap-3 text-sm text-slate-500'>
							<li>React</li>
							<li>WordPress REST API</li>
							<li>Tailwind CSS</li>
							<li>Headless CMS</li>
						</ul>
					</div>
				</div>

				<div className='mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between'>
					<p>© {currentYear} HeadlessApp. All rights reserved.</p>

					<div className='flex gap-5'>
						<a href='#' className='transition hover:text-slate-950'>
							Privacy
						</a>
						<a href='#' className='transition hover:text-slate-950'>
							Terms
						</a>
						<a href='#' className='transition hover:text-slate-950'>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
