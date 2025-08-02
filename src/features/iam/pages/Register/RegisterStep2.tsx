// src/components/RegisterStep2.tsx
import type { Control, UseFormGetValues } from "react-hook-form";
import type { RegisterUserFormValues } from "./RegisterFlow";
import TextInput from "@components/ui/Input/Text/TextInput";

// Componente ProgressBar (pode ser movido para um arquivo separado para reutilização)
const ProgressBar: React.FC<{ current: number; total: number }> = ({
	current,
	total,
}) => {
	const progressWidth = (current / total) * 100;
	return (
		<div className="w-1/2 h-2 bg-gray-600 rounded-full self-center">
			<div
				className="h-full bg-[#CBE220] rounded-full transition-all duration-500"
				style={{ width: `${progressWidth}%` }}
			></div>
		</div>
	);
};

// Interface para as props deste componente
interface RegisterStep2Props {
	onNext: (data: { gender: string; birthDate: string }) => void;
	onPrevious: () => void;
	control: Control<RegisterUserFormValues>;
	getValues: UseFormGetValues<RegisterUserFormValues>;
}

const RegisterStep2: React.FC<RegisterStep2Props> = ({
	onNext,
	onPrevious,
	control,
	getValues,
}) => {
	return (
		<div className="bg-[#2B2156] mt-16 mb-32 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
			{/* Top section: Arrow back and progress bar - CONSISTENTE EM TODAS AS TELAS */}
			<div className="flex mb-6 flex-col">
				<ProgressBar current={2} total={3} /> {/* Etapa 2 de 3 */}
				<button
					onClick={onPrevious}
					className="text-white text-3xl self-baseline"
				>
					&larr; {/* Seta para voltar */}
				</button>
			</div>

			{/* Title and Description */}
			<h1 className="text-white text-3xl font-bold mb-2">
				Queremos saber mais sobre você!
			</h1>
			<p className="text-white text-opacity-70 text-base mb-8">
				Isso nos ajuda a te conhecer melhor!
			</p>

			{/* Gender selection */}
			<div className="mb-6">
				<label className="block text-white text-lg mb-2">
					Qual o gênero você se identifica?
				</label>
				<div className="flex flex-col space-y-3">
					<TextInput
						type="radio"
						name="gender"
						value="male"
						wrapperClass="flex-row-reverse justify-end"
						label="Masculino"
						labelClassName="inline-flex items-center text-white ml-2"
						className="form-radio h-5 w-5 text-[#6B40E3] bg-[#42397B] border-gray-400 focus:ring-[#6B40E3]"
						style={{ accentColor: "#6B40E3" }}
						control={control}
					/>
					<TextInput
						type="radio"
						name="gender"
						value="female"
						wrapperClass="flex-row-reverse justify-end"
						label="Feminino"
						labelClassName="inline-flex items-center text-white ml-2"
						className="form-radio h-5 w-5 text-[#6B40E3] bg-[#42397B] border-gray-400 focus:ring-[#6B40E3]"
						style={{ accentColor: "#6B40E3" }}
						control={control}
					/>
					<TextInput
						type="radio"
						name="gender"
						value="other"
						wrapperClass="flex-row-reverse justify-end"
						label="Outro"
						labelClassName="inline-flex items-center text-white ml-2"
						className="form-radio h-5 w-5 text-[#6B40E3] bg-[#42397B] border-gray-400 focus:ring-[#6B40E3]"
						style={{ accentColor: "#6B40E3" }}
						control={control}
					/>
				</div>
			</div>

			{/* Date of Birth */}
			<div className="mb-8">
				<TextInput
					type="date"
					name="birthDate"
					label="Qual sua data de nascimento?"
					labelClassName="block text-white text-lg mb-2"
					className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
					style={{ accentColor: "#6B40E3" }}
					control={control}
				/>
			</div>

			{/* Continue Button */}
			<button
				onClick={() =>
					onNext({
						gender: getValues("gender"),
						birthDate: getValues("birthdate").toString(),
					})
				}
				className="w-full bg-[#6B40E3] hover:bg-[#5734B7] text-white font-semibold py-4 rounded-xl transition duration-200"
			>
				Continuar
			</button>
		</div>
	);
};

export default RegisterStep2;
