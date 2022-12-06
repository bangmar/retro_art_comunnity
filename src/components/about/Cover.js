import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import NavAbout from "../../components/about/NavAbout";

// img
import bg from "../../assets/img/bg.png";

import Sidebar from "./Sidebar";
import LoginModal from "../LoginModal";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Cover = () => {
	const [isFocus, setFocus] = useState(false);
	const [isLoginModal, setLoginModal] = useState(false);

	const navigate = useNavigate();
	const { user } = AppContext();

	return (
		<div
			id='top-about'
			className='min-h-[100vh] md:min-h-screen  w-full overflow-hidden bg-cover px-[50px] md:px-[80px]  font-oswald '
			style={{ backgroundImage: `url(${bg})` }}>
			<Sidebar />
			<NavAbout />
			<LoginModal isLoginModal={isLoginModal} setLoginModal={setLoginModal} />

			<div
				className='flex flex-col md:items-center justify-center text-costum-orange font-bold pb-20 h-screen pt-14'
				data-aos='zoom-in'>
				<h1 className='text-[35px] md:text-[55px]'>MANIAC</h1>
				<h1 className='text-[55px] md:text-[75px] leading-[1em] md:leading-none md:-mt-2 mb-2'>
					RETRO ART COMMUNITY
				</h1>
				<p className='font-inter text-[18px] md:text-[24px] text-white font-medium mb-4'>
					Share Every Classic Things
				</p>
				<div className='flex gap-x-4 items-center'>
					<div
						className={`${
							isFocus ? " gap-4" : ""
						} bg-costum-gray basic-transition px-6 py-2 flex items-center  hover:bg-costum-orange wipe-transition`}
						onMouseEnter={() => setFocus(true)}
						onMouseLeave={() => setFocus(false)}>
						<button
							onClick={(e) => {
								e.preventDefault();
								if (user) {
									navigate("/home");
								} else {
									setLoginModal(true);
								}
							}}
							className='text-[16px] md:text-[20px] flex items-center  justify-center rounded-sm shadow-sm font-inter text-white font-medium wipe-transition '>
							Explore
							<AiOutlineArrowRight
								className={`${
									isFocus ? "w-fit left-0 ml-2 " : "w-0 -left-5"
								} text-white wipe-transition relative`}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cover;
