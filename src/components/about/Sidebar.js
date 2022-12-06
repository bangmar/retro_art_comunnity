import React, { useState } from "react";
// icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import { Link as ScrollTo } from "react-scroll";

const Sidebar = () => {
	const [isToggle, setToggle] = useState(false);

	return (
		<div className='pt-[50px] absolute z-10 md:hidden'>
			<HiOutlineMenuAlt1
				className='text-[2em] text-white'
				onClick={() => setToggle(!isToggle)}
			/>
			<div
				className={`${
					isToggle ? "px-5 p-3 w-fit h-fit" : "px-0 py-0 w-0 h-0"
				} flex flex-col gap-y-2 bg-white  rounded-sm shadow-md overflow-hidden basic-transition relative left-2 top-2`}>
				<ScrollTo
					to='what-we-do'
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					className='hover:text-costum-orange cursor-pointer basic-transition'>
					WHAT WE DO
				</ScrollTo>
				<ScrollTo
					to='about-founder'
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					className='hover:text-costum-orange cursor-pointer basic-transition'>
					ABOUT FOUNDER
				</ScrollTo>
				<ScrollTo
					to='ask-something'
					spy={true}
					smooth={true}
					offset={100}
					duration={500}
					className='hover:text-costum-orange cursor-pointer basic-transition'>
					ASK SOMETHING
				</ScrollTo>

				<h1 className='hover:text-costum-orange cursor-pointer basic-transition'>
					REPORT
				</h1>
			</div>
		</div>
	);
};

export default Sidebar;
