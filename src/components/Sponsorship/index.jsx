function InfoPatrocinio({ img, name, description, onClick }) {
	return (
		<div
			onClick={onClick}
			className="flex h-28 w-full max-w-sm cursor-pointer gap-3 rounded bg-zinc-700 p-3 duration-300 hover:bg-zinc-800"
		>
			<img src={img} alt="logo" className=" h-full rounded" />
			<div>
				<p className="text-lg font-bold capitalize">{name}</p>
				<p className="font-light leading-tight">{description}</p>
			</div>
		</div>
	)
}

export default InfoPatrocinio
