import { Link, useParams } from 'react-router-dom'
import PostList from '../components/PostList'
import { mockPosts } from '../data/mockPosts'

function createSlug(text) {
	return text
		.toLowerCase()
		.replaceAll(' ', '-')
		.replaceAll('ą', 'a')
		.replaceAll('ć', 'c')
		.replaceAll('ę', 'e')
		.replaceAll('ł', 'l')
		.replaceAll('ń', 'n')
		.replaceAll('ó', 'o')
		.replaceAll('ś', 's')
		.replaceAll('ż', 'z')
		.replaceAll('ź', 'z')
}

function CategoryPage() {
	const { slug } = useParams()

	const filteredPosts = mockPosts.filter(post => createSlug(post.category) === slug)

	const categoryName = filteredPosts[0]?.category || slug

	return (
		<div className='bg-slate-50'>
			<section className='border-b border-slate-200 bg-white py-16'>
				<div className='mx-auto max-w-6xl px-6'>
					<Link
						to='/blog'
						className='mb-8 inline-flex text-sm font-semibold text-cyan-700 transition hover:text-cyan-900'>
						← Wróć do bloga
					</Link>

					<p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700'>Kategoria</p>

					<h1 className='text-4xl font-bold tracking-tight text-slate-950 md:text-5xl'>{categoryName}</h1>

					<p className='mt-5 max-w-2xl leading-7 text-slate-600'>Wpisy przypisane do wybranej kategorii blogowej.</p>
				</div>
			</section>

			<PostList
				posts={filteredPosts}
				title={`Wpisy z kategorii: ${categoryName}`}
				description='Na razie kategorie działają na mockPosts.js. Później podepniemy endpoint kategorii z WordPressa.'
			/>
		</div>
	)
}

export default CategoryPage
