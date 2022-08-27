type Props = {
	name: string
	role: string
	links: ProfileLink[]
}

type ProfileLink = {
	title: string
	url: string
}

export default function ProfileCard({ name, role, links = [] }: Props) {
	return (
		<div className="max-w-xl mx-auto py-16">
			<div className="p-8 flex flex-col gap-4 bg-slate-800 text-slate-100 rounded-xl shadow-md shadow-slate-500">
				<header>
					<h1 className="text-xl font-bold">{name}</h1>
					<h2>{role}</h2>
				</header>
				<main>
					<ul className="flex flex-col gap-4">
						{links.map(({ title, url }) => (
							<li key={title}>
								<a
									className="block p-2 bg-slate-600 border hover:bg-slate-500 border-slate-500 rounded"
									href={url}
									target="_blank"
									rel="noreferrer noopener"
								>
									{title}
								</a>
							</li>
						))}
					</ul>
				</main>
			</div>
		</div>
	)
}
