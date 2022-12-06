import React from "react";

// icons
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

// img
import mario1 from "../../assets/img/mario.jpg";
import mario2 from "../../assets/img/mario2.jpg";
import mario3 from "../../assets/img/mario3.jpg";

const FounderCard = ({ url }) => {
	return (
		<div className='shadow-md' data-aos='fade-down-right'>
			<div className='w-[350px] h-[440px]  grayscale-[80%] hover:grayscale-[40%] wipe-transition overflow-hidden  group'>
				<div
					style={{
						backgroundImage: `url(${
							url === 1 ? mario1 : url === 2 ? mario2 : mario3
						})`,
					}}
					className='w-full h-full bg-cover group-hover:scale-110 wipe-transition'></div>
			</div>
			<div className='bg-costum-orange  py-4 w-[350px] flex justify-around'>
				<div className='flex items-center gap-1'>
					<a
						href='https://www.instagram.com/mariorudyss/'
						target='_blank'
						rel='noopener noreferrer'>
						<AiFillInstagram color='white' size={"24px"} />
					</a>
					<a
						href='https://github.com/bangmar'
						target='_blank'
						rel='noopener noreferrer'>
						<AiFillGithub color='white' size={"24px"} />
					</a>
					<a
						href='https://www.linkedin.com/in/mario-rudy-silalahi-7bb657248/'
						target='_blank'
						rel='noopener noreferrer'>
						<AiFillLinkedin color='white' size={"24px"} />
					</a>
				</div>
				<h1 className='font-oswald text-black font-medium text-[1.2em]'>
					MARIO RUDY SILALAHI
				</h1>
			</div>
		</div>
	);
};

export default FounderCard;
