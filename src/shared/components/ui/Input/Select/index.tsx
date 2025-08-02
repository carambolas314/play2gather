import {
	forwardRef,
	type PropsWithChildren,
	type SelectHTMLAttributes,
	useId,
} from "react";
import styles from "../Input.module.css";

type InputProps = SelectHTMLAttributes<HTMLSelectElement> & {
	label?: string;
	error?: string;
	helperText?: string;
	fileType?: string;
	editInput?: boolean;
	width?: string;
};

export const Select = forwardRef<
	HTMLSelectElement,
	InputProps & PropsWithChildren
>(
	(
		{
			children,
			name = "",
			label = "",
			helperText = "",
			editInput,
			width,
			...props
		},
		ref,
	) => {
		const inputId = useId();
		const hasError = helperText.length > 0;
		return (
			<div
				className={`${styles.container} ${editInput ? styles.editInput : ""}`}
				style={{ width: width }}
			>
				<label
					className={`${styles.label} ${props.required && styles.required} ${
						editInput ? styles.editInput : ""
					}`}
					htmlFor={inputId}
				>
					{label}
				</label>
				<select
					defaultChecked={props.defaultChecked}
					id={inputId}
					className={`${styles.input} ${styles.select} ${
						hasError ? styles.error : ""
					} ${editInput ? styles.editInput : ""}`}
					name={name}
					ref={ref}
					{...props}
				>
					<option value="" hidden defaultChecked>
						Selecione uma opção
					</option>
					{children}
				</select>
				{hasError && <span className={styles.helper_text}>{helperText}</span>}
			</div>
		);
	},
);
