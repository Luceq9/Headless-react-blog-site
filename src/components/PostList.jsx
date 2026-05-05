import PostCard from './PostCard'

function PostList({
	posts = [],
	title = 'Najnowsze posty',
	description = 'Ta sekcja pobiera dane z WordPressa przez REST API i renderuje je po stronie Reacta.',
}) {
	return (
		<section id='posty' className='bg-slate-100 py-20'>
			<div className='mx-auto max-w-6xl px-6'>
				<div className='mb-10 flex items-end justify-between gap-6'>
					<div>
						<p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700'>WordPress content</p>
						<h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>{title}</h2>
					</div>

					<p className='hidden max-w-md text-sm leading-7 text-slate-500 md:block'>{description}</p>
				</div>

				{posts.length > 0 ? (
					<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
						{posts.map(post => (
							<PostCard key={post.id} post={post} />
						))}
					</div>
				) : (
					<div className='rounded-2xl border border-slate-200 bg-white p-8 text-slate-500'>
						Brak postów do wyświetlenia.
					</div>
				)}
			</div>
		</section>
	)
}

export default PostList
