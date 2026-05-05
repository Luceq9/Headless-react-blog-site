function CategoryFilter({ categories, activeCategory, onChange }) {
	return (
		<div className='flex flex-wrap gap-3'>
			<button
				type='button'
				onClick={() => onChange(null)}
				className={`rounded-full px-4 py-2 text-sm font-medium transition ${
					activeCategory === null ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
				}`}>
				Wszystkie
			</button>

			{categories.map(category => (
				<button
					key={category.id}
					type='button'
					onClick={() => onChange(category.id)}
					className={`rounded-full px-4 py-2 text-sm font-medium transition ${
						activeCategory === category.id
							? 'bg-slate-900 text-white'
							: 'bg-slate-100 text-slate-700 hover:bg-slate-200'
					}`}>
					{category.name}
				</button>
			))}
		</div>
	)
}

export default CategoryFilter
