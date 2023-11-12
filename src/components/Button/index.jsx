function Button({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className="rounded bg-zinc-400 p-4 text-lg font-bold duration-300 hover:bg-green-500"
		>
			{children}
		</button>
	)
}

export default Button
