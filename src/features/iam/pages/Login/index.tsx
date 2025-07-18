

const Login = () => {
	return <div className="min-h-screen bg-[#1C1C2E] flex items-center justify-center
    min-h-screen bg-left bg-no-repeat bg-scroll"
      style={{ 
        backgroundImage: "url('./src/assets/icons/img-login.svg')",
        backgroundColor: '#1C1C2E',
      }}>
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8 "
      >
        {/* Left side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            Acompanhe seus jogos e comunidades com seus amigos, tudo em um só lugar!
          </h1>
          <p className="text-white text-opacity-70 text-lg">
            Descubra e discuta jogos, organize sua coleção, visite comunidades e gerencie suas listas junto com milhares de jogadores!
          </p>
          
        </div>

        {/* Right side - Login form */}
          <div className=" bg-[rgba(100,75,191,0.15)] flex flex-col justify-center rounded-xl shadow-xl p-8 my-36 mx-16">
            <h2 className="text-white text-2xl font-semibold mb-6">Acesse sua conta!</h2>
            <input
              type="text"
              placeholder="Usuário"
              className="mb-4 px-4 py-3 rounded-md bg-white text-gray-400 w-full focus:outline-none"
            />
            <input
              type="password"
              placeholder="Senha"
              className="mb-6 px-4 py-3 rounded-md bg-white w-full text-gray-400 focus:outline-none"
            />
            <button className="bg-[#6b40e3] hover:bg-[#5734b7] text-white py-3 mx-26 rounded-xl font-medium">
              Entrar
            </button>
            <p className="text-white text-sm mt-4 text-center">
              Esqueceu sua senha?{' '}
              <a href="#" className="underline font-semibold">
                Recupere aqui!
              </a>
            </p>
          </div>
        </div>
    </div>;
};
export default Login;
