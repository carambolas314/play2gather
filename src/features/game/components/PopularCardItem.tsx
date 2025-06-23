export interface PopularCardItemProps {
	images: string[];
	title: string;
	creator: string;
}

export function PopularCardItem({
	images,
	title,
	creator,
}: PopularCardItemProps) {
	return (
		<div className="max-w-[400px] w-[30%]">
			<div className="flex gap-10 relative h-[180px] w-full overflow-hidden rounded-xl">
				<div
					className="pointer-events-none absolute inset-0 z-10"
					style={{
						background:
							"radial-gradient(circle at 35% 50%, rgba(168,85,247,0.55) 0%, rgba(168,85,247,0.28) 40%, transparent 70%)",
						WebkitBackdropFilter: "blur(30px)",
					}}
				/>
				{images.map((img, i) => (
					<img
						key={i}
						src={img}
						alt={`Capa ${i}`}
						className={`absolute h-full w-full object-cover rounded-xl transition duration-300`}
						style={{
							left: `${i * 45}px`,
							zIndex: i,
							opacity: i === images.length - 1 ? 1 : 0.7,
						}}
					/>
				))}
			</div>
			<h3 className="text-white text-lg font-semibold mt-3"> {title} </h3>
			<p className="text-white/60 text-sm">Criado por {creator}</p>
		</div>
	);
}
