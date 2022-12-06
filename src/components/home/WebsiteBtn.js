import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const WebsiteBtn = ({ url }) => {
	return (
		<a href={url} target='_blank' rel='noopener noreferrer'>
			<div className='font-oswald bg-costum-orange px-4 py-1 order-0 hover:bg-orange-hover basic-transition flex items-center gap-x-4 w-full'>
				<h1 className='text-[1.3em] text-white'>WEBSITE</h1>
				<AiOutlineArrowRight color='white' className='animate-pulse' />
			</div>
		</a>
	);
};

export default WebsiteBtn;
