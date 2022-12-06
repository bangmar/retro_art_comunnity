import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdPeople, MdOutlineSupport } from "react-icons/md";

const Rate = () => {
	return (
		<div className='px-10 font-oswald md:text-[30px] font-medium flex justify-center items-center py-[25px] md:py-[58px] gap-5 text-[18px]'>
			<div className='flex gap-2 items-center justify-center w-fit'>
				<AiFillStar size={"40px"} className='text-costum-orange ' />
				<h1 className='text-[0.7em]'>4.7 / 5 RATE</h1>
			</div>
			<div className='flex gap-2 items-center  w-fit'>
				<MdPeople size={"40px"} className='text-costum-orange ' />
				<h1 className='text-[0.7em]'>298 MEMBERS</h1>
			</div>
			<div className='flex gap-2 items-center  w-fit'>
				<MdOutlineSupport size={"40px"} className='text-costum-orange ' />
				<h1 className='text-[0.7em]'>100+ SPONSORS</h1>
			</div>
		</div>
	);
};

export default Rate;
