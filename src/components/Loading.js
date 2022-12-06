import React from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
	return (
		<div className='absolute top-0 bottom-0 left-0 right-0 z-10 bg-dark-gray flex gap-x-4 items-center justify-center'>
			<AiOutlineLoading3Quarters
				className='animate-spin text-costum-orange'
				size={"45px"}
			/>
			<h1 className='font-bold md:text-[2.2em] text-[1.8em] text-costum-orange font-oswald animate-bounce'>
				WELCOME ARTIST !
			</h1>
		</div>
	);
};

export default Loading;
