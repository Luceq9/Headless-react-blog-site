// Add your WordPress URL in .env file as VITE_WORDPRESS_URL or replace 'ADD WP_URL' with your URL
const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || 'ADD WP_URL'

const API_BASE_URL = `${WORDPRESS_URL.replace(/\/$/, '')}/wp-json/wp/v2`

async function fetchFromWordPress(endpoint) {
	const response = await fetch(`${API_BASE_URL}${endpoint}`)

	if (!response.ok) {
		throw new Error(`WordPress API error: ${response.status}`)
	}

	return response.json()
}

export async function getPosts() {
	return fetchFromWordPress('/posts?_embed&per_page=10')
}

export async function getPostBySlug(slug) {
	const posts = await fetchFromWordPress(`/posts?slug=${encodeURIComponent(slug)}&_embed`)
	return posts[0] || null
}

export async function getCategories() {
	return fetchFromWordPress('/categories?per_page=100&hide_empty=true')
}

export async function getPageBySlug(slug) {
	const pages = await fetchFromWordPress(`/pages?slug=${encodeURIComponent(slug)}&_embed`)
	return pages[0] || null
}

/**
 * Pobiera posty z opcjonalnym filtrowaniem, wyszukiwaniem i paginacją.
 * Zwraca { posts, totalPages, total }
 */
export async function getPostsFiltered({ page = 1, perPage = 9, categoryId = null, search = '' } = {}) {
	let endpoint = `/posts?_embed&page=${page}&per_page=${perPage}`
	if (categoryId) endpoint += `&categories=${categoryId}`
	if (search) endpoint += `&search=${encodeURIComponent(search)}`

	const url = `${API_BASE_URL}${endpoint}`
	const response = await fetch(url)

	if (!response.ok) {
		if (response.status === 400) return { posts: [], totalPages: 0, total: 0 }
		throw new Error(`WordPress API error: ${response.status}`)
	}

	const posts = await response.json()
	const totalPages = Number(response.headers.get('X-WP-TotalPages') || 1)
	const total = Number(response.headers.get('X-WP-Total') || 0)

	return { posts, totalPages, total }
}

export async function getPostsByCategory(categoryId, page = 1, perPage = 9) {
	return getPostsFiltered({ page, perPage, categoryId })
}
