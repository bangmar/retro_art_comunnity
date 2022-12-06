import React from "react";
import { Link as ScrollTo } from "react-scroll";

const NavAbout = () => {
	return (
		<div className='hidden text-slate-50 md:flex justify-center items-center  pt-[35px]'>
			<div className='text-[1em] md:text-[1.2em] flex gap-x-4 items-center'>
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

export default NavAbout;
