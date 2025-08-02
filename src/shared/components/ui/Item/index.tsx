import { type Control, useController } from "react-hook-form";
import styles from "./Item.module.css";
import {
	type ComponentProps,
	type PropsWithChildren,
	useId,
	useState,
} from "react";
import inputStyles from "../../ui/Input/Input.module.css";

const Container = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<div className={styles.container} style={{ ...props }}>
			{children}
		</div>
	);
};

const Row = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<div className={styles.row} style={props}>
			{children}
		</div>
	);
};

type ColProps = PropsWithChildren &
	React.CSSProperties & {
		children: React.ReactNode;
		hasScrollBar?: boolean;
	};

const Col = ({ children, hasScrollBar = false, ...props }: ColProps) => {
	return (
		<div
			className={`${styles.col} ${hasScrollBar && styles.scrollBar}`}
			style={props}
		>
			{children}
		</div>
	);
};

const Link = ({
	children,
	to,
	...props
}: PropsWithChildren & { to: string } & React.CSSProperties) => {
	return (
		<a href={to} className={styles.link} style={props}>
			{children}
		</a>
	);
};

const Title = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<h1 className={styles.title} style={props}>
			{children}
		</h1>
	);
};

const Subtitle = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<h2 className={styles.subtitle} style={props}>
			{children}
		</h2>
	);
};

const Text = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<p className={styles.text} style={props}>
			{children}
		</p>
	);
};

type colorT = "success" | "error" | "warning" | "info" | "default";

const Message = ({
	children,
	color = "default",
	...props
}: PropsWithChildren & React.CSSProperties & { color: colorT }) => {
	let colorClass = styles.default;

	if (color === "error") {
		colorClass = styles.error;
	} else if (color === "warning") {
		colorClass = styles.warning;
	} else if (color === "info") {
		colorClass = styles.info;
	} else if (color === "success") {
		colorClass = styles.success;
	}

	return (
		<p className={`${styles.message} ${colorClass}`} style={props}>
			{children}
		</p>
	);
};

const Table = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<table className={styles.table} style={{ ...props }}>
			{children}
		</table>
	);
};

const THead = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<thead className={styles.thead} style={{ ...props }}>
			{children}
		</thead>
	);
};

const TBody = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<tbody className={styles.tbody} style={{ ...props }}>
			{children}
		</tbody>
	);
};

const TH = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<th className={styles.th} style={{ ...props }}>
			{children}
		</th>
	);
};

const TD = ({
	children,
	colSpan,
	...props
}: PropsWithChildren & React.CSSProperties & { colSpan?: number }) => {
	return (
		<td className={styles.td} style={{ ...props }} colSpan={colSpan}>
			{children}
		</td>
	);
};

const TR = ({
	children,
	...props
}: PropsWithChildren & React.CSSProperties) => {
	return (
		<tr className={styles.tr} style={{ ...props }}>
			{children}
		</tr>
	);
};

const EditButton = ({
	children,
	isSubmitting,
	onClick,
	isDirty,
	...props
}: PropsWithChildren &
	React.CSSProperties & {
		isSubmitting?: boolean;
		isDirty?: boolean;
		onClick: () => void;
	}) => {
	const [isHover, setIsHover] = useState(false);
	return (
		<>
			{isDirty ? (
				<div
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
					style={{ ...props }}
				>
					<button
						type="submit"
						className={styles.button}
						onClick={onClick}
						disabled={isSubmitting}
					>
						{isHover ? (
							<>
								<span className={`material-symbols-outlined light sm`}>
									check
								</span>
							</>
						) : (
							<>
								<span className={`material-symbols-outlined editnew sm`}>
									check
								</span>
							</>
						)}
						{isSubmitting ? "Salvando..." : "Salvar"}
					</button>
				</div>
			) : (
				<div
					style={{ width: "100px" }}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
				>
					<button type="submit" className={styles.button} disabled>
						<>
							<span className={`material-symbols-outlined light sm`}>edit</span>
							{children}
						</>
					</button>
				</div>
			)}
		</>
	);
};

const Img = ({
	src,
	alt,
	...props
}: { src: string; alt: string } & React.CSSProperties) => {
	return <img className={styles.img} src={src} alt={alt} style={props} />;
};

type InputProps = ComponentProps<"input"> & {
	control: Control<any>;
	name: string;
	label?: string;
	width?: string;
};

const Input = ({ control, name, label, width, ...inputProps }: InputProps) => {
	const {
		formState: { errors },
	} = useController({ name, control });
	const inputId = useId();
	return (
		<div
			className={`${inputStyles.container} ${inputStyles.editInput}`}
			style={{ width: width }}
		>
			{label && (
				<label
					className={`${inputStyles.label} ${
						inputProps.required && inputStyles.required
					} ${inputStyles.editInput}`}
					htmlFor={inputId}
				>
					{label}
				</label>
			)}
			<input
				id={inputId}
				className={`${inputStyles.input} ${
					errors[name] ? inputStyles.error : ""
				} ${inputStyles.editInput}`}
				{...control.register(name)}
				{...inputProps}
			/>
			{errors[name] && (
				<span className={inputStyles.helper_text}>
					{errors[name].message?.toString()}
				</span>
			)}
		</div>
	);
};

const Item = {
	Container,
	Row,
	Col,
	Link,
	Img,
	Title,
	Subtitle,
	Text,
	Message,
	Table,
	THead,
	TBody,
	TH,
	TD,
	TR,
	EditButton,
	Input,
};

export default Item;
