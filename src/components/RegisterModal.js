import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../assets/img/logo.png";
import { AppContext } from "../context/AppContext";
import { Link as ScrollTo } from "react-scroll";

const Regiter = ({ isRegisterModal, setRegisterModal }) => {
	const { signup, errMsg } = AppContext();

	const [registerEmail, setResgiterEmail] = useState(false);
	const [registerPass, setRegisterPass] = useState(false);

	const registerHandler = async (e) => {
		e.preventDefault();
		try {
			await signup(registerEmail, registerPass);
		} catch (err) {
			setRegisterPass("");
			setResgiterEmail("");
		}
	};

	return (
		<div
			className={`${
				isRegisterModal ? "flex" : "hidden"
			} w-screen h-screen bg-dark-gray/40 bottom-0 fixed top-0 left-0  items-center justify-center z-10`}>
			<div className='w-[420px] md:w-[500px] h-fit bg-costum-orange px-10 py-10 rounded-md shadow-md relative'>
				<AiFillCloseCircle
					className='absolute right-10 top-5 text-white text-[1.5em] cursor-pointer'
					onClick={() => setRegisterModal(false)}
				/>
				<div className='flex items-center bg-dark-gray text-white py-2 mt-8 px-4 gap-6 mb-3'>
					<img src={logo} alt='logo' />
					<h1 className='font-oswald text-[1.3em]'>BECOME OUR MEMBER</h1>
				</div>
				<form onSubmit={registerHandler} className='text-white'>
					{errMsg !== "" && (
						<div className='bg-red-600 shadow-md rounded-md py-2 flex justify-center items-center mb-3 text-white font-semibold'>
							{errMsg}
						</div>
					)}
					<div className='flex flex-col gap-1 mb-3'>
						<label htmlFor='registerEmail'>Email</label>
						<input
							type='email'
							id='registerEmail'
							onChange={(e) => setResgiterEmail(e.target.value)}
							required
							className='border-2 outline-none px-2 py-1 text-dark-gray'
						/>
					</div>
					<div className='flex flex-col gap-1 mb-4'>
						<label htmlFor='registerPassword'>Password</label>
						<input
							type='password'
							id='registerPassword'
							onChange={(e) => setRegisterPass(e.target.value)}
							className='border-2 outline-none px-2 py-1 text-dark-gray'
						/>
					</div>
					<button
						type='submit'
						className='w-full py-2 flex items-center justify-center bg-costum-gray hover:bg-dark-gray mb-3'>
						Register
					</button>
				</form>
				<h1 className='font-inter text-[0.8em] font-white flex items-center justify-center gap-1'>
					already have an account ?
					<span className='underline'>
						<ScrollTo
							to='top-about'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={() => setRegisterModal(false)}>
							login here
						</ScrollTo>
					</span>
				</h1>
			</div>
		</div>
	);
};

export default Regiter;
