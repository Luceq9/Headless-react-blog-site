import { Link, useParams } from 'react-router-dom'
import { mockPosts } from '../data/mockPosts'

function SinglePostPage() {
	const { slug } = useParams()

	const post = mockPosts.find(post => post.slug === slug)

	if (!post) {
		return (
			<section className='bg-slate-50 py-20'>
				<div className='mx-auto max-w-3xl px-6 text-center'>
					<p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700'>404</p>

					<h1 className='text-4xl font-bold text-slate-950'>Nie znaleziono wpisu</h1>

					<p className='mt-4 text-slate-600'>Wpis, którego szukasz, nie istnieje albo zmienił adres.</p>

					<Link
						to='/blog'
						className='mt-8 inline-flex rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700'>
						Wróć do bloga
					</Link>
				</div>
			</section>
		)
	}

	return (
		<article className='bg-white'>
			<header className='border-b border-slate-200 bg-slate-50 py-16'>
				<div className='mx-auto max-w-3xl px-6'>
					<Link
						to='/blog'
						className='mb-8 inline-flex text-sm font-semibold text-cyan-700 transition hover:text-cyan-900'>
						← Wróć do bloga
					</Link>

					<div className='mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-500'>
						<span className='rounded-full bg-cyan-50 px-3 py-1 font-semibold text-cyan-700'>{post.category}</span>
						<span>{post.date}</span>
						<span>{post.readTime}</span>
					</div>

					<h1 className='text-4xl font-bold tracking-tight text-slate-950 md:text-5xl'>{post.title}</h1>

					<p className='mt-6 text-lg leading-8 text-slate-600'>{post.excerpt}</p>
				</div>
			</header>

			<div className='mx-auto max-w-3xl px-6 py-12'>
				<img src={post.image} alt={post.title} className='mb-10 aspect-video w-full rounded-3xl object-cover' />

				<div className='space-y-6 text-lg leading-8 text-slate-700'>
					{post.content.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</div>

				<div className='mt-12 border-t border-slate-200 pt-8'>
					<p className='text-sm text-slate-500'>Autor</p>
					<p className='mt-1 font-semibold text-slate-950'>{post.author.name}</p>
					<p className='text-sm text-slate-500'>{post.author.role}</p>
				</div>
			</div>
		</article>
	)
}

export default SinglePostPage
