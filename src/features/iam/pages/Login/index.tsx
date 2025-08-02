import { LoginBackgroundImage } from "@assets/index";
import styles from "./Login.module.css";
import { z } from "zod";
import { useAuth } from "@features/iam/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "@components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Item from "@components/ui/Item";

type FormProps = z.infer<typeof loginSchema>;

const loginSchema = z.object({
	email: z.email("Formato de email inválido"),
	password: z.string().min(5, "Senha deve ter no mínimo 5 caracteres"),
});

const Login = () => {
	const { login, error, isAuthenticated } = useAuth();
	const navigate = useNavigate();
	const [loginSuccessResponse, setLoginSuccessResponse] = useState<string>();

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/home");
		}
	}, [isAuthenticated, navigate]);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormProps>({
		resolver: zodResolver(loginSchema),
	});

	const handleLogin = async (data: FormProps) => {
		try {
			const response = await login(data);
			if (response) {
				setLoginSuccessResponse("Login realizado com sucesso!");
				setTimeout(() => {
					navigate("/home");
				}, 2000);
			}
		} catch (err) {
			console.error("Erro ao realizar login:", err);
			setLoginSuccessResponse("Erro ao realizar login. Tente novamente.");
		}
	};
	return (
		<>
			<div
				className={`min-h-screen bg-[#1C1C2E] relative overflow-hidden ${styles.loginContainer}`}
			>
				<LoginBackgroundImage className="absolute object-cover" />
				<div className="w-[100%] flex justify-center self-center">
					<div className="flex w-full self-center justify-around">
						{/* Left side */}
						<div className="flex w-[35%] max-w-[610px] flex-col justify-center">
							<h1 className="text-white text-4xl font-bold mb-4">
								Acompanhe seus jogos e comunidades com seus amigos, tudo em um
								só lugar!
							</h1>
							<p className="text-white text-opacity-70 text-lg">
								Descubra e discuta jogos, organize sua coleção, visite
								comunidades e gerencie suas listas junto com milhares de
								jogadores!
							</p>
						</div>
						{/* Right side - Login form */}
						<form
							className=" bg-[rgba(100,75,191,0.15)]  w-[25%] flex flex-col justify-center rounded-xl shadow-xl p-8 my-36 mx-16  min-w-[400px] wrap"
							onSubmit={handleSubmit(handleLogin)}
						>
							<h2 className="text-white text-2xl font-semibold mb-6">
								Acesse sua conta!
							</h2>
							<Input
								type="email"
								label="Login"
								placeholder="Insira o seu login"
								helperText={errors.email?.message}
								className="mb-6 px-4 py-3 rounded-md bg-white w-full text-black-400 focus:outline-blue-500 focus:outline-b"
								labelClassName="text-white mb-2"
								{...register("email")}
							/>
							<Input
								type="password"
								label="Senha"
								placeholder="Insira o sua senha"
								helperText={errors.password?.message}
								className="mb-6 px-4 py-3 rounded-md bg-white w-full text-black-400 focus:outline-blue-500 focus:outline-b"
								labelClassName="text-white mb-2"
								{...register("password")}
							/>
							{!isSubmitting && (
								<Input
									type="submit"
									value="Entrar"
									className="bg-[#6b40e3] hover:bg-[#5734b7] text-white py-3 mx-26 rounded-xl font-medium"
								/>
							)}
							{isSubmitting && (
								<Input
									type="submit"
									value="Entrando..."
									disabled
									className="bg-[#6b40e3] hover:bg-[#5734b7] text-white py-3 mx-26 rounded-xl font-medium"
								/>
							)}
							{error && (
								<Item.Message color="error">
									{error?.response?.data?.message}
								</Item.Message>
							)}{" "}
							{loginSuccessResponse && (
								<Item.Message color="success">
									{loginSuccessResponse}
								</Item.Message>
							)}{" "}
							<p className="text-white text-sm mt-4 text-center">
								Esqueceu sua senha?{" "}
								<a href="#" className="underline font-semibold">
									Recupere aqui!
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
