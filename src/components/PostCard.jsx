import { Link } from 'react-router-dom'

function PostCard({ post }) {
	return (
		<article className='group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl'>
			<img src={post.image} alt={post.title} className='h-52 w-full object-cover' />

			<div className='flex flex-1 flex-col p-6'>
				<div className='mb-4 flex items-center justify-between gap-4 text-xs font-semibold text-slate-500'>
					<Link
						to={`/blog/kategoria/${post.category.toLowerCase().replaceAll(' ', '-')}`}
						className='rounded-full bg-cyan-50 px-3 py-1 text-cyan-700 transition hover:bg-cyan-100'>
						{post.category}
					</Link>

					<span>{post.readTime}</span>
				</div>

				<h2 className='text-2xl font-bold leading-tight text-slate-950 transition group-hover:text-blue-700'>
					{post.title}
				</h2>

				<p className='mt-3 text-sm text-slate-400'>{post.date}</p>

				<p className='mt-4 leading-7 text-slate-600'>{post.excerpt}</p>

				<div className='mt-auto pt-6'>
					<Link
						to={`/post/${post.slug}`}
						className='inline-flex items-center rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white transition hover:bg-cyan-600'>
						Czytaj więcej
					</Link>
				</div>
			</div>
		</article>
	)
}

export default PostCard
