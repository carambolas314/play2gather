import { Link } from "react-router-dom";

export type Friend = {
	id: string;
	name: string;
	profilePic: string;
	link: string;
	status?: string;
	isPremium?: boolean;
};

export const FriendsPill = ({ friend }: { friend: Friend }) => {
	const statusColor =
		friend.status === "online" ? "bg-green-500" : "bg-gray-500";

	const borderColor = friend.isPremium
		? "bg-[conic-gradient(from_180deg_at_80%_37%,_#E96745,_#CBE220,_#E96745)]"
		: "bg-[conic-gradient(from_180deg_at_80%_37%,_#201659,_#644BBF,_#201659)]";

	return (
		<Link
			to={friend.link}
			key={friend.id}
			className="flex items-center space-x-1 bg-[#644BBF]/30 rounded-lg p-2 hover:bg-[#644BBF]/40 transition-colors duration-200"
		>
			<div className={`relative w-6 h-6 p-[1px] ${borderColor} rounded-full `}>
				<img
					src={friend.profilePic}
					alt="Foto de Perfil"
					className="w-6 rounded-full mr-[6px]"
				/>
				<div
					className={`rounded-full w-[10px] h-[10px] absolute z-2 bottom-[-1px] right-0 ${statusColor}`}
				></div>
			</div>
			<p className="text-white">{friend.name}</p>
		</Link>
	);
};
