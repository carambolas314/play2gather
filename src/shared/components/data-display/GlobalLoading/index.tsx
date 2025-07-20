import styles from "./GlobalLoading.module.css";

const GlobalLoading = () => {
	return (
		<>
			<div
				className="min-h-screen bg-[#1C1C2E] relative
    overflow-hidden"
			>
				<div className="flex items-center justify-center h-screen">
					<div className="bg-[#2B2156] p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
						<div className="flex items-center justify-center">
							<div className={styles.loader}></div>
						</div>
						<p className="text-white text-center text-opacity-70 text-base mt-8">
							Por favor, aguarde enquanto carregamos os dados.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default GlobalLoading;
