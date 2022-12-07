import React from "react";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";

const ReplyBy = ({ path }) => {
	const { submitReply } = AppContext();

	const [reply, setReply] = useState("");

	const replySubmit = async (e) => {
		e.preventDefault();
		try {
			await submitReply(reply, path);
		} catch (err) {
			console.error(err);
		}
		setReply("");
	};

	return (
		<div className='mt-2 mb-2'>
			<form onSubmit={replySubmit}>
				<label htmlFor='reply'></label>
				<input
					type='text'
					id='reply'
					className='border-2 p-1 text-[0.8em]'
					value={reply}
					onChange={(e) => setReply(e.target.value)}
				/>
				<button
					type='submit'
					className='font-inter text-[0.7em] flex justify-end w-full  hover:text-costum-orange'>
					reply
				</button>
			</form>
		</div>
	);
};

export default ReplyBy;
