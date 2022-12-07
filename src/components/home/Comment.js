import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { db } from "../../lib/firebase-config";
import ReplyList from "./ReplyList";

const Comment = () => {
	const [comment, setComment] = useState("");
	const [listComments, setListComment] = useState([]);
	const { user, submitComment } = AppContext();

	const commentSubmit = async (e) => {
		e.preventDefault();
		try {
			await submitComment(comment);
		} catch (err) {}
		setComment("");
	};

	useEffect(() => {
		const ress = query(
			collection(db, "comment"),
			orderBy("commentedAt", "desc")
		);
		const dataLoad = onSnapshot(ress, (snapshot) => {
			setListComment(
				snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
			);
		});

		return () => {
			dataLoad();
		};
	}, []);

	return (
		<div className=' w-screen mb-16 px-[50px] md:px-[80px]'>
			<h1 className='font-oswald font-bold mb-5'>Comments</h1>
			<div>
				<form onSubmit={commentSubmit}>
					<textarea
						name='ask'
						id='ask'
						rows='5'
						value={comment}
						onChange={(e) => {
							setComment(e.target.value);
						}}
						className='border-2 outline-dashed outline-costum-gray w-full px-5 py-2'
						placeholder='place your opinion ..'></textarea>
					<button
						type='submit'
						className='font-inter mb-8  bg-dark-gray basic-transition  hover:bg-costum-gray text-white tetx-[1em] px-6 py-1.5 mt-3 shadow-md'>
						submit
					</button>
				</form>
			</div>
			<div className='w-screen md:w-1/2'>
				<div className='bg-gray-50/50 px-5 py-5'>
					{listComments.map((item) => {
						let commentedAt = new Date(item.data.commentedAt.seconds * 1000);
						return (
							<div className='flex gap-3 items-start mb-3 w-fit' key={item.id}>
								<FaRegUserCircle size={"24px"} />
								<div className='font-inter mb-2'>
									<h1 className='font-medium mb-1 text-[1em]'>
										{item.data.by === user.email ? "You" : item.data.by}
									</h1>
									<p className=' text-[0.8em]  bg-orange-hover/70 text-white py-3 px-5 rounded-lg rounded-tl-none'>
										{item.data.comment}
									</p>
									<p className='text-[0.7em] text-end'>
										{`${commentedAt.toLocaleDateString("en-ZA")} at ${
											commentedAt.getHours() + " : " + commentedAt.getMinutes()
										} WIB`}
									</p>
									<ReplyList path={`comment/${item.id}/replyBy`} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Comment;
