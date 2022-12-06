import React from "react";
import FounderCard from "./FounderCard";

const Founder = () => {
	return (
		<div
			id='about-founder'
			className='min-h-[100vh] px-[50px] md:px-[80px] py-[50px]'>
			<div className='flex justify-around  flex-wrap gap-y-5 items-center mb-[55px]'>
				<FounderCard url={1} />
				<FounderCard url={2} />
				<FounderCard url={3} />
			</div>
			<div
				className='flex lg:flex-col lg:items-center items-end gap-x-5'
				data-aos='fade-down-left'>
				<h1 className='font-oswald text-[2.2em] font-bold'>
					MEET OUR <span className='text-costum-orange'>FOUNDER</span>
				</h1>
				<p className='lg:text-center text-left text[1em] font-medium'>
					Get closer to our comunnity founder,
					<br /> our founder was a collage student that love retro thing like us
					!
				</p>
			</div>
		</div>
	);
};

export default Founder;
