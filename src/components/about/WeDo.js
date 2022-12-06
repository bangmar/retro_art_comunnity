import React, { useState } from "react";

// img
import retrocd from "../../assets/img/retrocd.png";
import retrotv from "../../assets/img/retrotv.png";
import retrocam from "../../assets/img/retrocam.png";
import retrocar from "../../assets/img/retrocar.png";

import RegisterModal from "../RegisterModal";

const WeDo = () => {
	const [isRegisterModal, setRegisterModal] = useState(false);

	return (
		<div
			data-aos='fade-down-right'
			id='what-we-do'
			className='min-h-[100vh] grid grid-cols-1 md:grid-cols-2 '
			s>
			<div className='w-full  h-[380px] bg-gray-50 flex flex-col  justify-center px-[50px] md:px-[80px]'>
				<h1 className='font-oswald text-[2.2em] font-bold mb-2 relative'>
					WHAT WE DO{" "}
					<span className='text-costum-orange text-[3em] rotate-[20deg] inline-block relative  right-15 lg:static'>
						?
					</span>
				</h1>
				<p className='font-inter text-[1em] md:w-96 pr-10 -mt-3'>
					join with other colleagues and get the benefits that come when joining
					our community.
				</p>
			</div>
			<div className='card-container'>
				<div className='the-card'>
					<div
						className='front-card text-costum-orange'
						style={{ backgroundImage: `url(${retrocd})` }}>
						<h1 className='text-[2.4em] font-bold font-oswald '>
							MEMBER SHARING
						</h1>
					</div>
					<div
						className='back-card text-costum-orange'
						style={{ backgroundImage: `url(${retrocam})` }}>
						<h1 className='text-[2.4em] font-bold font-oswald '>
							RARE ART INFO
						</h1>
					</div>
				</div>
			</div>
			<div className='card-container order-7 md:order-1'>
				<div className='the-card'>
					<div
						className='front-card text-costum-orange'
						style={{ backgroundImage: `url(${retrotv})` }}>
						<h1 className='text-[2.4em] font-bold font-oswald '>
							WIDE CONNECTION
						</h1>
					</div>
					<div
						className='back-card text-costum-orange'
						style={{ backgroundImage: `url(${retrocar})` }}>
						<h1 className='text-[2.4em] font-bold font-oswald '>SAME ENERGY</h1>
					</div>
				</div>
			</div>
			<RegisterModal
				isRegisterModal={isRegisterModal}
				setRegisterModal={setRegisterModal}
			/>
			<div
				className='w-full h-[380px] bg-costum-orange flex items-center justify-center group hover:bg-gray-hover wipe-transition cursor-pointer order-2 md:order-1'
				onClick={(e) => {
					e.preventDefault();
					setRegisterModal(true);
				}}>
				<h1 className='text-[2.2em] font-bold font-oswald group-hover:text-costum-orange wipe-transition'>
					JOIN AND FEEL IT NOW !
				</h1>
			</div>
		</div>
	);
};

export default WeDo;
