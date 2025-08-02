import { forwardRef, type InputHTMLAttributes, useId } from "react";
import styles from "./Radio.module.css";
import inputs from "../Input.module.css";
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	first: boolean;
	firstLabel?: string;
	label?: string;
	error?: string;
	helperText?: string;
};

export const Radio = forwardRef<HTMLInputElement, InputProps>(
	({ first, firstLabel, label = "", helperText = "", ...props }, ref) => {
		const inputId = useId();
		const hasError = helperText.length > 0;
		return (
			<div className={inputs.container}>
				{first && (
					<label
						className={`${inputs.label} ${props.required && inputs.required}`}
					>
						{firstLabel}
					</label>
				)}
				<label
					className={`${styles.radio_container} ${styles.radio_label}`}
					htmlFor={inputId}
				>
					<input
						id={inputId}
						className={`${styles.radio_input} ${hasError ? styles.error : ""}`}
						type="radio"
						ref={ref}
						{...props}
					/>
					{label}
				</label>
				{hasError && <span className={styles.helper_text}>{helperText}</span>}
			</div>
		);
	},
);
