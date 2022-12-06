import React from "react";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";

const Ask = () => {
	const [askText, setAskText] = useState();

	const { ask } = AppContext();

	const sumbitAskHandler = async () => {
		try {
			await ask(askText);
			setAskText("");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div
			data-aos='fade-down-right'
			id='ask-something'
			className='min-h-[100vh] px-[50px] md:px-[80px] py-[50px] mb-[80px]'>
			<div className='px-2 py-1 bg-costum-orange w-fit mb-8 shadow-md'>
				<h1 className='font-oswald  text-[1.8em] md:text-[2.2em] font-bold'>
					FREQUENLY ASKED QUESTIONS
				</h1>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-5'>
				<div className='font-inter px-10 py-5 bg-costum-gray text-white mb-5 shadow-md'>
					<h1 className='font-bold  text-[1em] md:text-[1.3em]'>
						WHAT THIS COMMUNITY DO ?
					</h1>
					<p className='text-[0.8em] md:text-[0.9em]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
						turpis quis urna tempus scelerisque. Etiam posuere, tellus quis
						ullamcorper facilisis, tellus felis convallis libero, eu euismod
						libero n
					</p>
				</div>
				<div className='font-inter px-10 py-5 bg-costum-orange text-white mb-5 shadow-md'>
					<h1 className='font-bold text-[1em] md:text-[1.3em]'>
						WHAT THIS COMMUNITY DO ?
					</h1>
					<p className='text-[0.8em] md:text-[0.9em]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
						turpis quis urna tempus scelerisque. Etiam posuere, tellus quis
						ullamcorper facilisis, tellus felis convallis libero, eu euismod
						libero n
					</p>
				</div>
				<div className='font-inter px-10 py-5 bg-costum-orange text-white mb-5 shadow-md'>
					<h1 className='font-bold text-[1em] md:text-[1.3em]'>
						WHAT THIS COMMUNITY DO ?
					</h1>
					<p className='text-[0.8em] md:text-[0.9em]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
						turpis quis urna tempus scelerisque. Etiam posuere, tellus quis
						ullamcorper facilisis, tellus felis convallis libero, eu euismod
						libero n
					</p>
				</div>
				<div className='font-inter px-10 py-5 bg-costum-gray text-white mb-5 shadow-md'>
					<h1 className='font-bold text-[1em] md:text-[1.3em]'>
						IS OUR DATA SECURE HERE ?
					</h1>
					<p className='text-[0.8em] md:text-[0.9em]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
						turpis quis urna tempus scelerisque. Etiam posuere, tellus quis
						ullamcorper facilisis, tellus felis convallis libero, eu euismod
						libero n
					</p>
				</div>
				{/* form */}
				<form
					onSubmit={(e) => {
						e.preventDefault();

						sumbitAskHandler();
					}}>
					<textarea
						name='ask'
						id='ask'
						rows='6'
						value={askText}
						onChange={(e) => {
							setAskText(e.target.value);
						}}
						className='border-2 outline-dashed outline-costum-gray w-full px-5 py-2'
						placeholder='ask us something that make u confuse ..'></textarea>
					<button
						type='submit'
						className='font-inter bg-costum-orange hover:bg-orange-hover text-white tetx-[1em] px-6 py-2 mt-3 shadow-md'>
						ASK!
					</button>
				</form>
				{/* end form */}
			</div>
		</div>
	);
};

export default Ask;
