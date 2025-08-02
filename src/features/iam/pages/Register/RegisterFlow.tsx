// src/features/iam/pages/Register/RegisterFlow.tsx
import React, { useState } from "react";

// Importe seus componentes de etapa, garantindo que os nomes e caminhos estejam corretos
import RegisterStep1 from "./RegisterStep1"; // Ajuste o caminho conforme sua estrutura
import RegisterStep2 from "./RegisterStep2"; // Ajuste o caminho conforme sua estrutura
import RegisterStep3 from "./RegisterStep3"; // Ajuste o caminho conforme sua estrutura
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const RegisterUserFormSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório"),
	email: z.email("Email inválido"),
	password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
	gender: z.enum(["male", "female", "other"], "Gênero inválido"),
	birthdate: z.date().min(new Date(1900, 0, 1), "Data de nascimento inválida"),
	favoriteGames: z
		.array(z.string())
		.min(1, "Selecione pelo menos um jogo favorito"),
});

export type RegisterUserFormValues = z.infer<typeof RegisterUserFormSchema>;

const RegisterFlow: React.FC = () => {
	const [currentStep, setCurrentStep] = useState(1);
	// O ideal seria tipar 'formData' de forma mais específica, mas 'any' serve para começar
	const [formData, setFormData] = useState<any>({});

	// A função handleNextStep recebe um objeto 'data' com as informações da etapa
	const handleNextStep = (data: any) => {
		setFormData((prevData: any) => ({ ...prevData, ...data }));
		setCurrentStep((prevStep) => prevStep + 1);
	};

	const handlePreviousStep = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	// A função handleSubmit recebe um objeto 'data' para a última etapa
	const handleRegister = (data: any) => {
		setFormData((prevData: any) => ({ ...prevData, ...data }));
		console.log("Dados completos do registro:", { ...formData, ...data });
	};

	const {
		control,
		getValues,
		// handleSubmit,
		// formState: { isSubmitting },
	} = useForm<RegisterUserFormValues>({
		resolver: zodResolver(RegisterUserFormSchema),
	});

	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<RegisterStep1
						onNext={handleNextStep}
						control={control}
						getValues={getValues}
					/>
				);
			case 2:
				return (
					<RegisterStep2
						onNext={handleNextStep}
						onPrevious={handlePreviousStep}
						control={control}
						getValues={getValues}
					/>
				);
			case 3:
				return (
					<RegisterStep3
						onSubmit={handleRegister}
						onPrevious={handlePreviousStep}
						control={control}
						getValues={getValues}
					/>
				);
			default:
				return (
					<RegisterStep1
						onNext={handleNextStep}
						control={control}
						getValues={getValues}
					/>
				);
		}
	};

	return (
		<div className="min-h-screen bg-[#1C1C2E] flex items-center justify-center font-jost">
			{renderStep()}
		</div>
	);
};

export default RegisterFlow;
