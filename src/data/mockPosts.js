export const mockPosts = [
	{
		id: 1,
		title: 'Jak działa headless WordPress z Reactem?',
		slug: 'jak-dziala-headless-wordpress-z-reactem',
		excerpt:
			'Krótko i praktycznie: WordPress zostaje panelem do treści, a React odpowiada za szybki, nowoczesny frontend.',
		category: 'Headless CMS',
		date: '2026-05-05',
		readTime: '5 min',
		image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
		author: {
			name: 'LJ Dev',
			role: 'Frontend Developer',
		},
		content: [
			'Headless WordPress oznacza, że WordPress nie renderuje już klasycznego motywu PHP. Zamiast tego pełni rolę CMS-a i udostępnia dane przez REST API albo GraphQL.',
			'React pobiera te dane i buduje interfejs po stronie frontendowej. Dzięki temu możesz mieć większą kontrolę nad wyglądem, routingiem, animacjami i doświadczeniem użytkownika.',
			'Na początku najważniejsze jest dobre rozdzielenie odpowiedzialności: WordPress zarządza treścią, React odpowiada za UI, a warstwa API łączy oba światy.',
		],
	},
	{
		id: 2,
		title: 'REST API w WordPressie: od czego zacząć?',
		slug: 'rest-api-w-wordpressie-od-czego-zaczac',
		excerpt:
			'Poznaj podstawowe endpointy, których użyjesz w blogu: posty, strony, kategorie, media i pojedynczy wpis po slugu.',
		category: 'WordPress API',
		date: '2026-05-05',
		readTime: '6 min',
		image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
		author: {
			name: 'LJ Dev',
			role: 'React / WordPress',
		},
		content: [
			'WordPress REST API jest dostępne praktycznie od razu. Najczęściej używany endpoint do bloga to /wp-json/wp/v2/posts.',
			'Do pobierania pojedynczego wpisu wygodnie używać parametru slug. Dzięki temu adres w React Routerze może wyglądać naturalnie, na przykład /post/moj-wpis.',
			'Warto też poznać parametry _embed i per_page. Pierwszy pozwala pobrać osadzone dane, takie jak obrazek wyróżniający, a drugi kontroluje liczbę zwracanych wpisów.',
		],
	},
	{
		id: 3,
		title: 'Jak zaprojektować komponent PostCard?',
		slug: 'jak-zaprojektowac-komponent-postcard',
		excerpt: 'Dobra karta wpisu powinna mieć obrazek, kategorię, tytuł, krótki opis, datę i jasny link do szczegółów.',
		category: 'React',
		date: '2026-05-05',
		readTime: '4 min',
		image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
		author: {
			name: 'LJ Dev',
			role: 'UI Developer',
		},
		content: [
			'PostCard to jeden z najważniejszych komponentów w blogu. Będzie używany na stronie głównej, stronie bloga i przy wpisach z kategorii.',
			'Dlatego powinien być prosty i oparty o props post. Nie powinien sam pobierać danych z API. Jego zadaniem jest tylko wyświetlanie danych, które dostanie.',
			'Taki podział ułatwia testowanie, rozwijanie i późniejsze podpięcie danych z WordPressa.',
		],
	},
	{
		id: 4,
		title: 'Routing w React Router: blog, kategorie i single post',
		slug: 'routing-w-react-router-blog-kategorie-i-single-post',
		excerpt: 'Zrozum, jak działają ścieżki /blog, /post/:slug i /blog/kategoria/:slug w aplikacji blogowej.',
		category: 'React Router',
		date: '2026-05-05',
		readTime: '7 min',
		image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
		author: {
			name: 'LJ Dev',
			role: 'Frontend Developer',
		},
		content: [
			'React Router pozwala tworzyć aplikacje z wieloma podstronami bez przeładowywania całej strony.',
			'Ścieżka /post/:slug oznacza, że część adresu po /post/ jest dynamiczna. Możesz ją pobrać przez useParams i na tej podstawie znaleźć odpowiedni wpis.',
			'To bardzo dobrze pasuje do WordPressa, bo wpisy również mają slugi. Dzięki temu routing Reacta i dane z CMS-a mogą działać według tego samego modelu.',
		],
	},
	{
		id: 5,
		title: 'Mock data zanim podepniesz prawdziwe API',
		slug: 'mock-data-zanim-podepniesz-prawdziwe-api',
		excerpt:
			'Mocki pozwalają budować UI bez czekania na backend, domenę, CORS, dane testowe i konfigurację WordPressa.',
		category: 'Workflow',
		date: '2026-05-05',
		readTime: '5 min',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
		author: {
			name: 'LJ Dev',
			role: 'Project Builder',
		},
		content: [
			'Mock data to ręcznie przygotowane dane, które udają odpowiedź z API. Dzięki nim możesz spokojnie projektować komponenty i strony.',
			'Kiedy UI jest gotowe, zamieniasz import z mockPosts na funkcję pobierającą dane z WordPressa.',
			'To bardzo praktyczny workflow, bo oddziela pracę nad wyglądem od problemów związanych z integracją API.',
		],
	},
	{
		id: 6,
		title: 'Co trzymać w WordPressie, a co w Reactcie?',
		slug: 'co-trzymac-w-wordpressie-a-co-w-reactcie',
		excerpt:
			'WordPress powinien zarządzać treścią, a React strukturą widoku, interakcją i sposobem prezentacji danych.',
		category: 'Architecture',
		date: '2026-05-05',
		readTime: '6 min',
		image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80',
		author: {
			name: 'LJ Dev',
			role: 'Frontend Architect',
		},
		content: [
			'W headless podejściu warto jasno ustalić granice. WordPress przechowuje treść: wpisy, strony, kategorie, obrazy i pola niestandardowe.',
			'React odpowiada za layout, komponenty, routing, filtrowanie i interakcje użytkownika.',
			'Im lepiej rozdzielisz te role, tym łatwiej później rozwijać projekt, wymieniać motywy i podpinać kolejne źródła danych.',
		],
	},
]
