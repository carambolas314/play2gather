import { TagItem, TagList, type TagItemType } from "./index";
import { render, screen } from "@testing-library/react";

describe("TagItem", () => {
	it("renders the label", () => {
		render(<TagItem label="Test" color="purple" />);
		expect(screen.getByText("Test")).toBeInTheDocument();
	});

	it("applies the correct color classes for purple", () => {
		render(<TagItem label="Purple" color="purple" />);
		const tag = screen.getByText("Purple");
		expect(tag.className).toMatch(/border-purple-500/);
		expect(tag.className).toMatch(/text-purple-500/);
	});

	it("applies the correct color classes for yellow", () => {
		render(<TagItem label="Yellow" color="yellow" />);
		const tag = screen.getByText("Yellow");
		expect(tag.className).toMatch(/border-yellow-400/);
		expect(tag.className).toMatch(/text-yellow-400/);
	});

	it("applies the correct color classes for red", () => {
		render(<TagItem label="Red" color="red" />);
		const tag = screen.getByText("Red");
		expect(tag.className).toMatch(/border-red-500/);
		expect(tag.className).toMatch(/text-red-500/);
	});

	it("renders custom className if provided", () => {
		render(
			<TagItem label="Custom" color="purple" className="my-custom-class" />,
		);
		const tag = screen.getByText("Custom");
		expect(tag.className).toMatch(/my-custom-class/);
	});

	it("renders with default color if color is not provided", () => {
		// @ts-expect-error testing missing color
		render(<TagItem label="NoColor" />);
		const tag = screen.getByText("NoColor");
		expect(tag.className).toMatch(/border|text/);
	});

	it("renders with additional props", () => {
		render(<TagItem label="WithTitle" color="purple" title="Tag Title" />);
		const tag = screen.getByTitle("Tag Title");
		expect(tag).toBeInTheDocument();
	});
});

describe("TagList", () => {
	const tags: TagItemType[] = [
		{ label: "Tag1", color: "purple" },
		{ label: "Tag2", color: "yellow" },
		{ label: "Tag3", color: "red" },
	];

	it("renders all tags", () => {
		render(<TagList tags={tags} />);
		tags.forEach((tag) => {
			expect(screen.getByText(tag.label)).toBeInTheDocument();
		});
	});

	it("renders with correct classes for each tag", () => {
		render(<TagList tags={tags} />);
		expect(screen.getByText("Tag1").className).toMatch(/border-purple-500/);
		expect(screen.getByText("Tag2").className).toMatch(/border-yellow-400/);
		expect(screen.getByText("Tag3").className).toMatch(/border-red-500/);
	});

	it("renders an empty container if tags is empty", () => {
		const { container } = render(<TagList tags={[]} />);
		expect(
			container.querySelector('[role="presentation"]'),
		).toBeInTheDocument();
	});

	it("renders correctly with a single tag", () => {
		const singleTag: TagItemType[] = [{ label: "OnlyTag", color: "purple" }];
		render(<TagList tags={singleTag} />);
		const tag = screen.getByText("OnlyTag");
		expect(tag).toBeInTheDocument();
		expect(tag.className).toMatch(/border-purple-500/);
	});

	it("renders correctly when tags prop is undefined", () => {
		// @ts-expect-error testing undefined tags
		const { container } = render(<TagList />);
		expect(
			container.querySelector('[role="presentation"]'),
		).toBeInTheDocument();
	});

	it("renders custom className if provided", () => {
		const { container } = render(
			<TagList tags={tags} className="custom-list" />,
		);
		expect(container.querySelector(".custom-list")).toBeInTheDocument();
	});
});
