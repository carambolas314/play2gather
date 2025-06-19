import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
	it("renderiza com o texto correto", () => {
		render(<Button>Salvar</Button>);
		expect(screen.getByText("Salvar")).toBeInTheDocument();
	});

	it("chama o onClick quando clicado", async () => {
		const onClick = jest.fn();

		render(<Button onClick={onClick}>Clique aqui</Button>);

		await userEvent.click(screen.getByText("Clique aqui"));

		expect(onClick).toHaveBeenCalled();
	});
});
