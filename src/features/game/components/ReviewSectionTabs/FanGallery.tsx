type FanImage = {
	id: number;
	username: string;
	image: string;
};

export type FanGalleryProps = {
	fanImages: FanImage[];
};

export function FanGallery({ fanImages }: FanGalleryProps) {
	return (
		<div
			className="columns-1 sm:columns-3 gap-4 p-4 [column-fill:_balance]"
			style={{ maxWidth: 1200, margin: "0 auto" }}
		>
			{fanImages.map((item) => (
				<div
					key={item.id}
					className="mb-4 break-inside-avoid rounded-xl overflow-hidden bg-[#161625]"
					style={{ width: "100%" }}
				>
					<img
						src={item.image}
						alt={`Arte de ${item.username}`}
						className="w-full object-cover rounded-t-xl"
						style={{ display: "block" }}
					/>
					<div className="flex items-center gap-2 p-2">
						<div className="w-6 h-6 rounded-full bg-white" />
						<p className="text-sm text-white truncate">{item.username}</p>
					</div>
				</div>
			))}
		</div>
	);
}
