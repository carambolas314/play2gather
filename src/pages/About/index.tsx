import React from "react";

const About: React.FC = () => {
	return (
		<main style={{ maxWidth: 800, margin: "40px auto", padding: 24 }}>
			<h1>Sobre o Play2Gather</h1>
			<p>
				O <strong>Play2Gather</strong> é uma plataforma dedicada a conectar
				pessoas através de jogos e atividades em grupo. Nosso objetivo é
				facilitar a organização de encontros, promover novas amizades e tornar a
				experiência de jogar ainda mais divertida.
			</p>
			<h2>Missão</h2>
			<p>
				Unir pessoas com interesses em comum, proporcionando um ambiente seguro
				e acolhedor para todos.
			</p>
			<h2>Valores</h2>
			<ul>
				<li>Inclusão</li>
				<li>Respeito</li>
				<li>Diversão</li>
				<li>Colaboração</li>
			</ul>
			<h2>Entre em contato</h2>
			<p>
				Tem dúvidas ou sugestões? Envie um e-mail para{" "}
				<a href="mailto:contato@play2gather.com">contato@play2gather.com</a>.
			</p>
		</main>
	);
};

export default About;
