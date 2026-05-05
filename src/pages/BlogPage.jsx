import PostList from '../components/PostList'
import { mockPosts } from '../data/mockPosts'

function BlogPage() {
	return (
		<div className='bg-slate-50'>
			<section className='border-b border-slate-200 bg-white py-16'>
				<div className='mx-auto max-w-6xl px-6'>
					<p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700'>Blog</p>

					<h1 className='text-4xl font-bold tracking-tight text-slate-950 md:text-5xl'>Wszystkie artykuły</h1>

					<p className='mt-5 max-w-2xl leading-7 text-slate-600'>
						Zbiór wpisów o React, WordPress REST API, routingu i budowaniu headless frontendu.
					</p>
				</div>
			</section>

			<PostList
				posts={mockPosts}
				title='Wszystkie wpisy'
				description='Na razie dane pochodzą z mockPosts.js. Później podmienimy je na WordPress REST API.'
			/>
		</div>
	)
}

export default BlogPage
