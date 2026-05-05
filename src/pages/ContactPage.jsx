function ContactPage() {
	return (
		<div className='bg-slate-50'>
			<section className='border-b border-slate-200 bg-white py-16'>
				<div className='mx-auto max-w-6xl px-6'>
					<p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700'>Kontakt</p>

					<h1 className='text-4xl font-bold tracking-tight text-slate-950 md:text-5xl'>
						Napisz, jeśli chcesz pogadać o headless WordPressie
					</h1>

					<p className='mt-5 max-w-2xl leading-7 text-slate-600'>
						To prosta strona kontaktowa w motywie blogowym. Później można podpiąć tutaj formularz, backend, EmailJS,
						Formspree albo własny endpoint.
					</p>
				</div>
			</section>

			<section className='py-16'>
				<div className='mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1.2fr]'>
					<div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
						<h2 className='text-2xl font-bold text-slate-950'>Dane kontaktowe</h2>

						<div className='mt-6 space-y-5 text-slate-600'>
							<div>
								<p className='text-sm font-semibold uppercase tracking-[0.16em] text-slate-400'>Email</p>
								<a
									href='mailto:hello@example.com'
									className='mt-1 inline-flex font-semibold text-cyan-700 hover:text-cyan-900'>
									hello@example.com
								</a>
							</div>

							<div>
								<p className='text-sm font-semibold uppercase tracking-[0.16em] text-slate-400'>Tematy</p>
								<p className='mt-1 leading-7'>
									React, WordPress REST API, headless CMS, frontend startery i proste strony blogowe.
								</p>
							</div>

							<div>
								<p className='text-sm font-semibold uppercase tracking-[0.16em] text-slate-400'>GitHub</p>
								<a href='#' className='mt-1 inline-flex font-semibold text-cyan-700 hover:text-cyan-900'>
									https://github.com/Luceq9
								</a>
							</div>
						</div>
					</div>

					<form className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
						<h2 className='text-2xl font-bold text-slate-950'>Formularz</h2>

						<div className='mt-6 grid gap-5'>
							<div>
								<label htmlFor='name' className='mb-2 block text-sm font-semibold text-slate-700'>
									Imię
								</label>
								<input
									id='name'
									type='text'
									placeholder='Twoje imię'
									className='w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500'
								/>
							</div>

							<div>
								<label htmlFor='email' className='mb-2 block text-sm font-semibold text-slate-700'>
									Email
								</label>
								<input
									id='email'
									type='email'
									placeholder='email@example.com'
									className='w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500'
								/>
							</div>

							<div>
								<label htmlFor='message' className='mb-2 block text-sm font-semibold text-slate-700'>
									Wiadomość
								</label>
								<textarea
									id='message'
									rows='6'
									placeholder='Napisz wiadomość...'
									className='w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500'
								/>
							</div>

							<button
								type='button'
								className='rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700'>
								Wyślij wiadomość
							</button>

							<p className='text-sm leading-6 text-slate-500'>
								Na razie formularz jest statyczny. Później podepniemy wysyłkę przez API.
							</p>
						</div>
					</form>
				</div>
			</section>
		</div>
	)
}

export default ContactPage
