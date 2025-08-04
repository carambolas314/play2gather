import GenericPrimaryButton from "@components/ui/Button/GenericPrimaryButton";
import { FriendsPill, type Friend } from "./FriendsPill";
import { Link } from "react-router-dom";

export const FriendsList = ({ friends }: { friends: Friend[] }) => {
	return (
		<div className="lg:col-span-1">
			<div className="bg-[#644BBF]/20 p-2 pb-10 rounded-xl relative">
				<h2 className="text-2xl font-semibold mb-4 text-center">
					Amigos ({friends.length})
				</h2>
				<div className="space-y-2 ">
					{friends.map((friend) => (
						<FriendsPill key={friend.id} friend={friend} />
					))}
				</div>
				<GenericPrimaryButton
					text="Mostrar mais"
					as={Link}
					to="/friends/add"
					className="absolute bottom-[-20px] justify-self-center"
				/>
			</div>
		</div>
	);
};
