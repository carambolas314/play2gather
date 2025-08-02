// src/components/RegisterStep1.tsx
import React from "react";
import type { Control, UseFormGetValues } from "react-hook-form";
import type { RegisterUserFormValues } from "./RegisterFlow";
import TextInput from "@components/ui/Input/Text/TextInput";

// Interface para as props do RegisterStep1
interface RegisterStep1Props {
	onNext: (data: { username: string; password: string; email: string }) => void;
	control: Control<RegisterUserFormValues>;
	getValues: UseFormGetValues<RegisterUserFormValues>;
}

// Componente ProgressBar (reutilizável)
const ProgressBar: React.FC<{ current: number; total: number }> = ({
	current,
	total,
}) => {
	const progressWidth = (current / total) * 100;
	return (
		<div className="w-1/2 h-2 bg-gray-600 rounded-full self-center">
			{" "}
			{/* self-center para centralizar na coluna flex */}
			<div
				className="h-full bg-[#CBE220] rounded-full transition-all duration-500"
				style={{ width: `${progressWidth}%` }}
			></div>
		</div>
	);
};

// Componente RegisterStep1 tipado
const RegisterStep1: React.FC<RegisterStep1Props> = ({
	onNext,
	control,
	getValues,
}) => {
	return (
		<div className="bg-[#2B2156] mt-16 mb-32 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
			{/* Top section: Arrow back and progress bar */}
			<div className="flex mb-6 flex-col">
				{/* Barra de progresso - movida para cima da seta para seguir a ordem do seu código */}
				<ProgressBar current={1} total={3} />{" "}
				{/* Barra de progresso para a etapa 1 de 3 */}
				{/* Seta para voltar - na primeira etapa ela deve estar invisível ou desabilitada */}
				<button className="text-white text-3xl self-baseline cursor-default">
					&larr; {/* Flecha para a esquerda */}
				</button>
			</div>

			{/* Title and Description */}
			<h1 className="text-white text-3xl font-bold mb-2">
				Crie uma nova conta!
			</h1>
			<p className="text-white text-opacity-70 text-base mb-8">
				Organize a coleção e visite a comunidade de seus jogos!
			</p>

			{/* Form Fields */}
			<div className="mb-3">
				<TextInput
					type="text"
					id="name"
					name="name"
					label="Nome de Usuário"
					labelClassName="block text-white text-lg mb-2"
					placeholder="Seu nome de Usuário"
					className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
					control={control}
				/>
			</div>

			<div className="mb-3">
				<TextInput
					type="password"
					id="password"
					name="password"
					placeholder="Mínimo 8 caracteres"
					label="Senha"
					labelClassName="block text-white text-lg mb-2"
					className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
					control={control}
				/>
			</div>

			<div className="mb-6">
				<TextInput
					type="email"
					id="email"
					name="email"
					placeholder="Seu email"
					label="Email"
					labelClassName="block text-white text-lg mb-2"
					className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
					control={control}
				/>
			</div>

			{/* Continue with Email Button */}
			<button
				onClick={() =>
					onNext({
						username: getValues("name"),
						email: getValues("email"),
						password: getValues("password"),
					})
				}
				className="w-full bg-[#6B40E3] hover:bg-[#5734B7] text-white font-semibold py-4 rounded-xl mb-6 transition duration-200"
			>
				Continuar com Email
			</button>

			{/* Or register with section */}
			<p className="text-white text-opacity-70 text-center mb-4">
				Ou se registre com
			</p>

			{/* Social Media Icons */}
			<div className="flex justify-center gap-4">
				<button className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg hover:scale-105 transition duration-200">
					<img
						src="https://img.icons8.com/color/48/000000/google-logo.png"
						alt="Google"
						className="h-6 w-6"
					/>
				</button>
				<button className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg hover:scale-105 transition duration-200">
					<img
						src="https://img.icons8.com/color/48/000000/facebook-new.png"
						alt="Facebook"
						className="h-6 w-6"
					/>
				</button>
				<button className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg hover:scale-105 transition duration-200">
					<img
						src="https://img.icons8.com/ios-filled/50/000000/twitterx--v1.png"
						alt="Twitter X"
						className="h-6 w-6"
					/>
				</button>
			</div>
		</div>
	);
};

export default RegisterStep1;
