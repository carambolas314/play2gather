import { RelatedContent } from ".";

type Live = {
	id: string | number;
	title: string;
	channel: string;
	viewers: string;
	image?: string;
};

type Video = {
	id: string | number;
	title: string;
	channel: string;
	image?: string;
};

type Notice = {
	id: string | number;
	title: string;
	reporter: string;
	image?: string;
};

export type RelatedContentProps = {
	lives: Live[];
	videos: Video[];
	notices: Notice[];
};

export function CompoundRelatedContent({
	lives,
	videos,
	notices,
}: RelatedContentProps) {
	return (
		<RelatedContent>
			{/* Seção de LIVES */}
			{lives && lives.length > 0 && (
				<RelatedContent.Section title="Lives">
					<RelatedContent.Grid>
						{lives.map((live) => (
							<RelatedContent.Item
								key={live.id}
								image={live.image}
								imageAlt="Live"
								title={live.title}
								badgeText="AO VIVO"
							>
								<div className="flex justify-between w-full">
									<span>{live.channel}</span>
									<span>{live.viewers}</span>
								</div>
							</RelatedContent.Item>
						))}
					</RelatedContent.Grid>
				</RelatedContent.Section>
			)}

			{videos && videos.length > 0 && (
				<RelatedContent.Section title="Vídeos">
					<RelatedContent.Grid>
						{videos.map((video) => (
							<RelatedContent.Item
								key={video.id}
								image={video.image}
								imageAlt="Vídeo"
								title={video.title}
							>
								<span>{video.channel}</span>
							</RelatedContent.Item>
						))}
					</RelatedContent.Grid>
				</RelatedContent.Section>
			)}

			{notices && notices.length > 0 && (
				<RelatedContent.Section title="Notícias">
					<RelatedContent.Grid>
						{notices.map((notice) => (
							<RelatedContent.Item
								key={notice.id}
								image={notice.image}
								imageAlt="Notícia"
								title={notice.title}
							>
								<span>{notice.reporter}</span>
							</RelatedContent.Item>
						))}
					</RelatedContent.Grid>
				</RelatedContent.Section>
			)}
		</RelatedContent>
	);
}
