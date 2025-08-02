import type { ComponentProps } from "react";
import { useController, type Control } from "react-hook-form";

type TestInputProps = ComponentProps<"input"> & {
	control: Control<any>;
	label?: string;
	labelClassName?: string;
	name: string;
	wrapperClass?: string;
};

const TextInput = ({
	control,
	name,
	label,
	labelClassName,
	wrapperClass,
	...inputProps
}: TestInputProps) => {
	const {
		formState: { errors },
	} = useController({ control, name });
	return (
		<div className={`flex flex-col gap-1 ${wrapperClass}`}>
			{label && (
				<label className={`font-semibold ${labelClassName}`}>{label}</label>
			)}
			<input type="text" {...inputProps} {...control.register(name)} />
			{errors[name] && (
				<span className="text-red-500">
					{errors[name]?.message?.toString()}
				</span>
			)}
		</div>
	);
};

export default TextInput;
