const STACK = [
	{ label: 'React 19', color: 'text-cyan-300 border-cyan-500/40 bg-cyan-500/10' },
	{ label: 'Vite 8', color: 'text-violet-300 border-violet-500/40 bg-violet-500/10' },
	{ label: 'Tailwind 4', color: 'text-sky-300 border-sky-500/40 bg-sky-500/10' },
	{ label: 'WP REST API', color: 'text-emerald-300 border-emerald-500/40 bg-emerald-500/10' },
]

const STATS = [
	{ value: '100%', label: 'Headless' },
	{ value: '<1s', label: 'Time to first byte' },
	{ value: '∞', label: 'Możliwości' },
]

function Hero() {
	return (
		<section className='relative overflow-hidden border-b border-slate-800 bg-slate-950'>
			{/* subtle radial glow */}
			<div
				aria-hidden='true'
				className='pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]'
			/>

			{/* grid dot pattern */}
			<div
				aria-hidden='true'
				style={{
					backgroundImage: 'radial-gradient(circle, rgba(148,163,184,.13) 1px, transparent 1px)',
					backgroundSize: '28px 28px',
				}}
				className='pointer-events-none absolute inset-0'
			/>

			<div className='relative mx-auto max-w-6xl px-6 py-24 md:py-32'>
				{/* Top badge */}
				<div className='mb-6 flex justify-start'>
					<span className='inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400'>
						<span className='h-1.5 w-1.5 rounded-full bg-cyan-400' />
						Headless WordPress + React — Starter 2025
					</span>
				</div>

				<div className='grid gap-16 md:grid-cols-2 md:items-center'>
					{/* ── LEFT COLUMN ── */}
					<div>
						<h1 className='text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl'>
							Nowoczesny
							<span className='block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent'>
								frontend
							</span>
							dla każdego projektu
						</h1>

						<p className='mt-6 max-w-lg text-lg leading-8 text-slate-400'>
							Jeden szybki starter, który podpinasz pod dowolne API. Blog, sklep, rezerwacje, landing page — zmień tylko
							dane, reszta gotowa.
						</p>

						{/* Stack pills */}
						<div className='mt-6 flex flex-wrap gap-2'>
							{STACK.map(s => (
								<span key={s.label} className={`rounded-full border px-3 py-1 text-xs font-semibold ${s.color}`}>
									{s.label}
								</span>
							))}
						</div>

						{/* CTA buttons */}
						<div className='mt-10 flex flex-wrap gap-4'>
							<a
								href='#posty'
								className='inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 active:scale-95'>
								Zobacz posty
								<svg className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
									<path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
								</svg>
							</a>
							<a
								href='#kontakt'
								className='inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white active:scale-95'>
								Kontakt
							</a>
						</div>

						{/* Stats bar */}
						<div className='mt-12 flex divide-x divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur'>
							{STATS.map(s => (
								<div key={s.label} className='flex flex-1 flex-col items-center py-4 px-3'>
									<span className='text-2xl font-extrabold text-white'>{s.value}</span>
									<span className='mt-0.5 text-xs text-slate-500'>{s.label}</span>
								</div>
							))}
						</div>
					</div>

					{/* ── RIGHT COLUMN – terminal card ── */}
					<div className='rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900 to-slate-950 p-1 shadow-2xl shadow-black/50'>
						{/* window chrome */}
						<div className='flex items-center gap-1.5 rounded-t-[22px] border-b border-slate-800 bg-slate-900 px-5 py-3.5'>
							<span className='h-3 w-3 rounded-full bg-red-500/80' />
							<span className='h-3 w-3 rounded-full bg-yellow-500/80' />
							<span className='h-3 w-3 rounded-full bg-emerald-500/80' />
							<span className='ml-3 text-xs font-medium text-slate-500'>wordpressApi.js</span>
						</div>

						{/* code body */}
						<div className='rounded-b-[22px] bg-slate-950 p-6 font-mono text-sm leading-7'>
							<p>
								<span className='text-slate-600'>1</span>
								<span className='ml-4 text-violet-400'>export async function </span>
								<span className='text-cyan-300'>getPosts</span>
								<span className='text-slate-300'>() {'{'}</span>
							</p>
							<p>
								<span className='text-slate-600'>2</span>
								<span className='ml-4 text-slate-500'> // pobierz posty z WP REST API</span>
							</p>
							<p>
								<span className='text-slate-600'>3</span>
								<span className='ml-4 text-violet-400'> const </span>
								<span className='text-slate-200'>res </span>
								<span className='text-slate-400'>= </span>
								<span className='text-violet-400'>await </span>
								<span className='text-cyan-300'>fetch</span>
								<span className='text-slate-300'>(WP_URL);</span>
							</p>
							<p>
								<span className='text-slate-600'>4</span>
								<span className='ml-4 text-violet-400'> return </span>
								<span className='text-slate-200'>res</span>
								<span className='text-slate-400'>.</span>
								<span className='text-cyan-300'>json</span>
								<span className='text-slate-300'>();</span>
							</p>
							<p>
								<span className='text-slate-600'>5</span>
								<span className='ml-4 text-slate-300'>{'}'}</span>
							</p>

							<div className='my-5 border-t border-slate-800' />

							{/* flow diagram */}
							<div className='space-y-3'>
								{[
									{ icon: '🟦', label: 'WordPress', sub: 'CMS + REST API', active: false },
									{ icon: '⚡', label: 'React + Vite', sub: 'Komponenty i routing', active: false },
									{ icon: '✅', label: 'Twój projekt', sub: 'Blog · Sklep · Rezerwacje', active: true },
								].map((row, i) => (
									<div
										key={i}
										className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
											row.active ? 'border-cyan-500/40 bg-cyan-500/10' : 'border-slate-800 bg-slate-900'
										}`}>
										<span className='text-lg'>{row.icon}</span>
										<div>
											<p className={`text-xs font-bold ${row.active ? 'text-cyan-300' : 'text-slate-200'}`}>
												{row.label}
											</p>
											<p className='text-[11px] text-slate-500'>{row.sub}</p>
										</div>
										{i < 2 && (
											<svg
												className='ml-auto h-4 w-4 text-slate-600'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												strokeWidth={2}>
												<path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
											</svg>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
