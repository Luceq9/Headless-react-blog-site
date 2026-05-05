import Hero from '../components/Hero'
import PostList from '../components/PostList'
import { mockPosts } from '../data/mockPosts'

function HomePage() {
	const latestPosts = mockPosts.slice(0, 3)

	return (
		<>
			<Hero />
			<PostList posts={latestPosts} title='Najnowsze wpisy' />
		</>
	)
}

export default HomePage
