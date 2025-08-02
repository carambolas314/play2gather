import { forwardRef, type InputHTMLAttributes, useId } from "react";
import styles from "./TextArea.module.css";
import input from "../Input.module.css";
type InputProps = InputHTMLAttributes<HTMLTextAreaElement> & {
	label?: string;
	error?: string;
	helperText?: string;
	editInput?: boolean;
};

export const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
	(
		{
			name = "",
			label = "",
			helperText = "",
			editInput = false,
			width,
			...props
		},
		ref,
	) => {
		const inputId = useId();
		const hasError = helperText.length > 0;
		return (
			<div className={input.container} style={{ width: width }}>
				<label
					className={`${input.label} ${props.required && input.required} ${
						editInput ? input.editInput : ""
					}`}
					htmlFor={inputId}
				>
					{label}
				</label>
				<textarea
					id={inputId}
					className={`${styles.textarea} ${hasError ? styles.error : ""} ${
						editInput ? input.editInput : ""
					}`}
					name={name}
					ref={ref}
					{...props}
				/>
				{hasError && <span className={input.helper_text}>{helperText}</span>}
			</div>
		);
	},
);
