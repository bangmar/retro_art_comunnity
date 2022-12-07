import React from "react";
import logo from "../../assets/img/logo.png";
import { Link as ScrollTo } from "react-scroll";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const FooterHome = () => {
	const { logout } = AppContext();

	const logOutHandler = () => {
		try {
			logout();
		} catch (err) {}
	};

	return (
		<div className='bg-dark-gray text-white px-[50px] md:px-[80px] py-10 font-oswald'>
			<div className='flex items-center gap-4 mb-8'>
				<img src={logo} alt='logo' />
				<h1 className=' text-[1.8em] md:text-[2em]'>RETRO ART COM</h1>
			</div>
			<div className='flex gap-10 flex-wrap items-start mb-10'>
				<div>
					<h1 className='text-[1.2em] mb-3'>SITE MAP</h1>
					<div className='text-[1em] md:text-[0.8em] flex gap-2 flex-col font-inter'>
						<Link
							to='/'
							className='hover:text-costum-orange cursor-pointer basic-transition'>
							ABOUT
						</Link>
						<h1
							className='hover:text-costum-orange cursor-pointer basic-transition'
							onClick={logOutHandler}>
							LOGOUT
						</h1>
						<ScrollTo
							to='askSomething'
							className='hover:text-costum-orange cursor-pointer basic-transition'>
							REPORT
						</ScrollTo>
					</div>
				</div>
				<div>
					<h1 className='text-[1.2em] mb-3'>TECH USED</h1>
					<div className='flex gap-5 flex-wrap'>
						<div>
							<p className='hover:text-costum-orange basic-transition'>
								REACT JS
							</p>
							<p className='font-inter text-[0.8em] w-32 font-normal'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus, at.
							</p>
						</div>
						<div>
							<p className='hover:text-costum-orange basic-transition'>
								TAILWIND CSS
							</p>
							<p className='font-inter text-[0.8em] w-32 font-normal'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus, at.
							</p>
						</div>
						<div>
							<p className='hover:text-costum-orange basic-transition'>
								FIREBASE
							</p>
							<p className='font-inter text-[0.8em] w-32 font-normal'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus, at.
							</p>
						</div>
					</div>
				</div>
				<div className='text-[1.2em] overflow-hidden'>
					<h1 className='text-[1.2em] mb-3'>STAY CONNECTED</h1>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.270756540587!2d109.2465123092041!3d-7.4352630925445755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655ea49d9f9885%3A0x62be0b6159700ec9!2sTelkom%20Institute%20of%20Technology%20Purwokerto!5e0!3m2!1sen!2sid!4v1669882258068!5m2!1sen!2sid'
						height='200'
						width='700'
						frameBorder='0'
						style={{ border: 0 }}
						aria-hidden='false'
						tabIndex='0'
						title='location'
					/>
				</div>
			</div>

			<div>
				<div className='flex items-end border-t-2  border-white/90'>
					<h1 className='text-[1em] py-2 font-medium '>
						Bulid wiith Love by{" "}
						<span className='text-costum-orange font-bold'>Mario Rudy S</span>,
						ITTP PURWOKERTO 2022
					</h1>
				</div>
			</div>
		</div>
	);
};

export default FooterHome;
