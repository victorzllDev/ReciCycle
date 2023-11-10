import { MdRecycling } from 'react-icons/md'
import logoImg from '/src/assets/recicycle.png'

function App() {
	return (
		<>
			<section className="flex h-screen w-full flex-col gap-2 bg-[url('/src/assets/fundo.jpg')] bg-cover bg-center p-2">
				<header className="flex h-16 w-full items-center justify-center">
					<img src={logoImg} alt="logo" className="h-full" />
				</header>
				<div className="mx-auto flex h-full max-w-xl flex-col items-start justify-center gap-3 text-white min-[420px]:items-center min-[420px]:text-center">
					<h1 className="text-5xl font-medium">ReciCycle</h1>
					<p className="font-light leading-5">
						Unindo Comunidades, Reciclando Recursos e Preservando o Meio
						Ambiente para um Amanhã Melhor
					</p>
					<button className="mt-6 flex min-w-[200px] items-center justify-center gap-2 rounded bg-sky-600 px-6 py-4 text-2xl uppercase">
						Participe
						<MdRecycling size={28} />
					</button>
				</div>
			</section>
		</>
	)
}

export default App
