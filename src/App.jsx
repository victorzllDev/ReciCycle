import { MdRecycling } from 'react-icons/md'
import { BiLogoInstagramAlt } from 'react-icons/bi'

import Button from './components/Button'
import ImagePoster from './components/ImagePoster'
import Footer from './components/Footer'

import { posters } from './services/path.js'
const {
	poster1,
	poster2,
	poster3,
	poster4,
	poster5,
	sponsorship1,
	sponsorship2,
} = posters

import logoImg from '/src/assets/logoImg.png'

import {
	urlInstagram,
	urlGoogleMaps,
	urlRotaGoogleMaps,
} from './services/urls.js'
import Sponsorship from './components/Sponsorship'

function App() {
	return (
		<>
			<main>
				{/* section 1 */}
				<section className="relative z-10 flex h-screen flex-col items-start justify-center gap-1 bg-[url('/src/assets/fundo.jpg')] bg-cover bg-center px-7 py-3 sm:items-center">
					<header className="absolute left-1/2 top-0 flex w-full max-w-screen-sm -translate-x-1/2 items-center justify-between px-7 py-1 duration-200 sm:top-3 sm:rounded-full sm:bg-[rgba(200,200,200,.18)] sm:backdrop-blur-sm">
						<MdRecycling
							size={24}
							className="cursor-pointer text-white duration-300 hover:text-green-500"
						/>
						<img src={logoImg} alt="logo" className="m-1 h-12" />
						<BiLogoInstagramAlt
							size={24}
							onClick={() => redirectToURL(urlInstagram)}
							className="cursor-pointer text-white duration-300 hover:text-green-500"
						/>
					</header>
					<div className="bg-gradient-radial pointer-events-none absolute left-0 top-0 -z-10 h-full w-full from-transparent to-black" />
					<h1 className="text-start text-3xl font-light sm:text-center sm:text-4xl md:text-6xl">
						Seja bem-vindo à ReciCycle!
					</h1>
					<p className="mb-12 text-start text-sm font-light sm:text-center md:text-lg">
						Onde o compromisso ambiental encontra a inovação. Cuidado
						excepcional para um futuro sustentável.
					</p>
					<Button onClick={() => scrollToDiv('section-2')}>
						Conheça-nos Agora
					</Button>
				</section>
				{/* section 2 */}
				<section
					id="section-2"
					className="flex min-h-screen flex-col justify-center px-7 py-24 md:items-center"
				>
					<span className="mb-7 flex flex-col items-center gap-4 before:h-12 before:w-0.5 before:bg-zinc-500">
						<MdRecycling className="text-5xl" />
					</span>
					<h1 className="font-regular text-start text-3xl sm:text-center sm:text-4xl lg:text-5xl">
						Bem-vindo à nossa Empresa
					</h1>
					<p className="mb-9 max-w-4xl text-start text-sm font-light sm:text-center">
						A ReciCycle tem sido uma força na preservação ambiental. Utilizamos
						materiais recicláveis para criar lixeiras e vendemos os materiais
						reciclados, doando integralmente os lucros. Nossa missão é
						transformar o lixo em recursos valiosos para um planeta mais
						sustentável.
					</p>
					<div className="grid h-auto w-full max-w-4xl grid-cols-3 grid-rows-2 gap-1 rounded bg-zinc-800 p-2">
						<div className="row-span-2">
							<ImagePoster img={poster1} />
						</div>
						<div>
							<ImagePoster img={poster2} />
						</div>
						<div>
							<ImagePoster img={poster3} />
						</div>
						<div>
							<ImagePoster img={poster4} />
						</div>
						<div>
							<ImagePoster img={poster5} />
						</div>
					</div>
				</section>
				{/* Section 3 */}
				<section className="px-7 py-12 pt-16">
					<h2 className="mb-6 text-center text-2xl">Tá esperando o que?</h2>
					<iframe
						src={urlGoogleMaps}
						style={{ border: '0' }}
						loading="lazy"
						className="mx-auto h-96 w-full max-w-4xl rounded"
					></iframe>
					<div className="mx-auto mt-6 flex max-w-4xl flex-col gap-12 md:flex-row">
						<div className="flex flex-1 flex-col items-start justify-start gap-2">
							<p className="text-xl">Contato</p>
							<Button onClick={() => redirectToURL(urlInstagram)}>
								Instagram
							</Button>

							<ul className="font-light">
								<li>@recicycle</li>
							</ul>
						</div>
						<div className="flex flex-1 flex-col items-start justify-start gap-2">
							<p className="text-xl">Endereço</p>
							<Button onClick={() => redirectToURL(urlRotaGoogleMaps)}>
								Ver Rotas
							</Button>
							<p className="max-w-sm font-light">
								Av. Dr. João Luís de Almeida, 60 - Vila Guilhermina, Montes
								Claros - MG, 39400-466
							</p>
						</div>
						<div className="flex flex-1 flex-col items-start justify-start gap-2">
							<p className="text-xl">Data</p>
							<ul className="font-light">
								<li>28, de Novembro</li>
							</ul>
						</div>
					</div>
				</section>
				{/* Section 4 */}
				<section className="flex min-h-screen flex-col items-center justify-center px-7 py-24">
					<h2 className="font-regular w-full text-start text-3xl min-[440px]:text-center sm:text-4xl lg:text-5xl">
						Patrocinadores
					</h2>
					<p className="mb-9 max-w-5xl text-start text-sm font-light min-[440px]:text-center">
						Apresentando o panfleto, você terá direito a um desconto que pode
						ser utilizado em qualquer um dos estabelecimentos dos nossos
						patrocinadores.
					</p>
					<div className="flex flex-wrap gap-3">
						<div className="flex w-full flex-wrap items-center justify-center gap-3">
							<Sponsorship
								onClick={() =>
									redirectToURL('https://instagram.com/planetchurross')
								}
								img={sponsorship1}
								name="Planet churros"
								description="Churros quentinho, doce sabor, felicidade em cada mordida."
							/>
						</div>
						<div className="flex w-full flex-wrap items-center justify-center gap-3">
							<Sponsorship
								onClick={() =>
									redirectToURL('https://instagram.com/genios_gourmet')
								}
								img={sponsorship2}
								name="Genios Gourmet"
								description="Geladinho gourmet, frescor congelante, explosão de sabores."
							/>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

function scrollToDiv(divId) {
	let div = document.getElementById(divId)
	div.scrollIntoView({ behavior: 'smooth' })
}

function redirectToURL(url) {
	window.open(url, '_blank')
}

export default App
