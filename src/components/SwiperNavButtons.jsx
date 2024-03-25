import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = ({ config }) => {
	//Es el nombre del color en las variables de tailwind.config.js
	const {
		borderColor,
		arrowColor,
		backgroundColor,
		borderColorHover,
		arrowColorHover,
		backgroundColorHover,
		borderColorPressed,
		arrowColorPressed,
		backgroundColorPressed
	} = config;
	const buttonClassName = `h-[44px] w-[44px] rounded-full border flex justify-center items-center bg-${backgroundColor} fill-${arrowColor} border-${borderColor} hover:bg-${backgroundColorHover} hover:border-${borderColorHover} hover:fill-${arrowColorHover} active:bg-${backgroundColorPressed} active:border-${borderColorPressed} active:fill-${arrowColorPressed}`
	const swiper = useSwiper();

	return (
		<div className="flex gap-[8px] justify-center">
			<button
				className={buttonClassName}
				onClick={() => swiper.slidePrev()}
			>
				<svg
					width="23"
					height="8"
					viewBox="0 0 23 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-inherit"
				>
					<path
						d="M0.646446 3.66305C0.451185 3.85831 0.451185 4.17489 0.646446 4.37015L3.82843 7.55213C4.02369 7.7474 4.34027 7.7474 4.53553 7.55213C4.7308 7.35687 4.7308 7.04029 4.53553 6.84503L1.70711 4.0166L4.53553 1.18817C4.7308 0.992911 4.7308 0.676328 4.53553 0.481066C4.34027 0.285804 4.02369 0.285804 3.82843 0.481066L0.646446 3.66305ZM23 3.5166L1 3.5166L1 4.5166L23 4.5166L23 3.5166Z"
						className="fill-inherit"
					/>
				</svg>
			</button>
			<button
				className={buttonClassName}
				onClick={() => swiper.slideNext()}
			>
				<svg
					width="23"
					height="8"
					viewBox="0 0 23 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="fill-inherit"
				>
					<path
						d="M22.3536 4.37016C22.5488 4.1749 22.5488 3.85831 22.3536 3.66305L19.1716 0.481071C18.9763 0.285809 18.6597 0.285809 18.4645 0.481071C18.2692 0.676333 18.2692 0.992915 18.4645 1.18818L21.2929 4.01661L18.4645 6.84503C18.2692 7.04029 18.2692 7.35688 18.4645 7.55214C18.6597 7.7474 18.9763 7.7474 19.1716 7.55214L22.3536 4.37016ZM-8.74228e-08 4.5166L22 4.51661L22 3.51661L8.74228e-08 3.5166L-8.74228e-08 4.5166Z"
						className="fill-inherit"
					/>
				</svg>
			</button>
		</div>
	);
};
