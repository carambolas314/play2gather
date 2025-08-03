// src/components/CustomRangeSlider.tsx
import React, { useState, useRef, useEffect, useCallback } from "react";

interface CustomRangeSliderProps {
	min: number;
	max: number;
	value: [number, number];
	onChange: (value: [number, number]) => void;
	minLabel?: string;
	maxLabel?: string;
}

const CustomRangeSlider: React.FC<CustomRangeSliderProps> = ({
	min,
	max,
	value,
	onChange,
	minLabel,
	maxLabel,
}) => {
	const [localValue, setLocalValue] = useState(value);
	const trackRef = useRef<HTMLDivElement>(null);
	const activeThumbRef = useRef<0 | 1 | null>(null);

	const latestValueRef = useRef(localValue);

	const trackDimensionsRef = useRef({ left: 0, width: 0 });

	useEffect(() => {
		setLocalValue((currentLocalValue) => {
			if (
				value[0] !== currentLocalValue[0] ||
				value[1] !== currentLocalValue[1]
			) {
				return value;
			}
			return currentLocalValue;
		});
		latestValueRef.current = value;
	}, [value]);

	const getPercentage = useCallback(
		(val: number) => {
			if (max === min) return 0;
			return ((val - min) / (max - min)) * 100;
		},
		[min, max],
	);

	const getValueFromClientX = useCallback(
		(clientX: number) => {
			const { left, width } = trackDimensionsRef.current;
			if (width === 0) return min;

			const x = clientX - left;
			let percentage = x / width;
			percentage = Math.max(0, Math.min(1, percentage));

			return Math.round(min + percentage * (max - min));
		},
		[min, max],
	);

	const handleMove = useCallback(
		(clientX: number) => {
			if (activeThumbRef.current === null) return;

			const newValue = getValueFromClientX(clientX);

			setLocalValue((prev) => {
				const newArr: [number, number] = [...prev];
				if (activeThumbRef.current === 0) {
					newArr[0] = Math.max(min, Math.min(newValue, prev[1]));
				} else {
					newArr[1] = Math.min(max, Math.max(newValue, prev[0]));
				}
				latestValueRef.current = newArr; // Atualiza o ref com o valor mais recente
				return newArr;
			});
		},
		[getValueFromClientX, min, max],
	);

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			handleMove(e.clientX);
		},
		[handleMove],
	);

	const handleTouchMove = useCallback(
		(e: TouchEvent) => {
			handleMove(e.touches[0].clientX);
		},
		[handleMove],
	);

	const handleEnd = useCallback(() => {
		if (activeThumbRef.current !== null) {
			onChange(latestValueRef.current);
			activeThumbRef.current = null;
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleEnd);
			document.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("touchend", handleEnd);
		}
	}, [handleMouseMove, handleTouchMove, onChange]);

	const handleStart =
		(thumbIndex: 0 | 1) => (e: React.MouseEvent | React.TouchEvent) => {
			e.preventDefault();

			if (trackRef.current) {
				trackDimensionsRef.current = trackRef.current.getBoundingClientRect();
			}

			activeThumbRef.current = thumbIndex;

			if (e.type === "mousedown") {
				document.addEventListener("mousemove", handleMouseMove);
				document.addEventListener("mouseup", handleEnd);
			} else {
				// touchstart
				document.addEventListener("touchmove", handleTouchMove);
				document.addEventListener("touchend", handleEnd);
			}
		};

	const thumb1Pos = getPercentage(localValue[0]);
	const thumb2Pos = getPercentage(localValue[1]);

	return (
		<div className="w-full relative py-4">
			<div
				ref={trackRef}
				className="w-full h-2 bg-gray-600 rounded-full relative cursor-pointer"
			>
				<div
					className="h-full bg-[#CBE220] rounded-full absolute"
					style={{
						left: `${thumb1Pos}%`,
						width: `${thumb2Pos - thumb1Pos}%`,
					}}
				></div>

				{/* Thumb Esquerdo */}
				<div
					className="h-5 w-5 rounded-full bg-white absolute cursor-grab active:cursor-grabbing shadow-md -top-1.5 transform -translate-x-1/2"
					style={{ left: `${thumb1Pos}%` }}
					onMouseDown={handleStart(0)}
					onTouchStart={handleStart(0)}
				></div>

				{/* Thumb Direito */}
				<div
					className="h-5 w-5 rounded-full bg-white absolute cursor-grab active:cursor-grabbing shadow-md -top-1.5 transform -translate-x-1/2"
					style={{ left: `${thumb2Pos}%` }}
					onMouseDown={handleStart(1)}
					onTouchStart={handleStart(1)}
				></div>
			</div>
			<div className="flex justify-between text-gray-400 text-sm mt-2">
				<span>{minLabel || localValue[0]}</span>
				<span>{maxLabel || localValue[1]}</span>
			</div>
		</div>
	);
};

export default CustomRangeSlider;
