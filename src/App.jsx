import { MdRecycling } from 'react-icons/md'
import logoImg from '/src/assets/recicycle.png'
import lixeiraImg from '/src/assets/lixeira.png'

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
			<section className=" px-2 py-4 text-white">
				<div className="mx-auto flex h-full  flex-col flex-wrap items-center justify-around gap-4 min-[916px]:flex-row">
					<p className="max-w-md text-justify">
						A Recycle, nossa empresa dedicada à reciclagem de materiais
						sustentáveis, tem como missão ambiental transformar Montes Claros em
						uma cidade mais verde e limpa. Por meio da distribuição estratégica
						de nossas lixeiras recicláveis, buscamos conscientizar e unir a
						comunidade na coleta de materiais recicláveis, como metal, papel e
						plástico, reforçando nosso compromisso com um futuro mais
						sustentável para todos. Além disso, comprometemo-nos a doar
						integralmente o dinheiro recebido com a reciclagem para iniciativas
						e projetos de preservação ambiental.
					</p>
					<MdRecycling size={32} className="text-green-400" />
					<img src={lixeiraImg} alt="lixeira" className="w-96" />
				</div>
			</section>
			<section className="px-2 py-8">
				<p className="mb-6 text-center text-2xl font-bold text-white">
					Atenção ao jogar os lixos na lixeiras!
				</p>
				<div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 min-[716px]:max-w-none min-[716px]:flex-row">
					<div className="flex h-40 w-full  flex-col items-center justify-center gap-3 rounded  bg-blue-500">
						<MdRecycling size={42} />
						<p className="text-2xl uppercase">Papel</p>
					</div>
					<div className="flex h-40 w-full  flex-col items-center justify-center gap-3 rounded  bg-red-500">
						<MdRecycling size={42} />
						<p className="text-2xl uppercase">plástico</p>
					</div>
					<div className="flex h-40 w-full flex-col items-center justify-center gap-3 rounded   bg-yellow-500">
						<MdRecycling size={42} />
						<p className="text-2xl uppercase">Metal</p>
					</div>
				</div>
			</section>
			<footer className="w-full bg-zinc-950 px-2 py-4 text-center text-white">
				<p>todos direitos reservado.</p>
			</footer>
		</>
	)
}

export default App
