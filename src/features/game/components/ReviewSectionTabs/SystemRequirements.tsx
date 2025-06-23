type SystemRequirement = {
	label: string;
	value: string;
};

export type SystemRequirementsProps = {
	requirements: SystemRequirement[];
	note?: string;
};

export function SystemRequirements({
	requirements,
	note,
}: SystemRequirementsProps) {
	return (
		<div className="pl-4 pr-4 pb-4 text-sm leading-relaxed text-white/90 mb-3">
			{note && <p className="mt-1">{note}</p>}
			<ul className="list-disc list-inside space-y-1 px-6">
				{requirements.map((req, idx) => (
					<li key={idx}>
						{req.label}: {req.value}
					</li>
				))}
			</ul>
		</div>
	);
}
