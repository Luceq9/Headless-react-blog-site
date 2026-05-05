import { useState } from 'react'

function SearchBar({ value, onChange, onSubmit }) {
	const [focused, setFocused] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		onSubmit?.()
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={`flex items-center gap-2 rounded-2xl border bg-white px-4 py-2.5 shadow-sm transition ${
				focused ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-slate-200'
			}`}>
			<svg
				className='h-4 w-4 shrink-0 text-slate-400'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}>
				<path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z' />
			</svg>
			<input
				type='text'
				value={value}
				onChange={e => onChange(e.target.value)}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				placeholder='Szukaj artykułów…'
				className='w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400'
			/>
			{value && (
				<button type='button' onClick={() => onChange('')} className='shrink-0 text-slate-400 hover:text-slate-600'>
					✕
				</button>
			)}
		</form>
	)
}

export default SearchBar
