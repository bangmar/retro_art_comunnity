import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { db } from "../../lib/firebase-config";
import ReplyBy from "./ReplyBy";

const ReplyList = ({ path }) => {
	const [replyList, setReplyList] = useState([]);
	const { user } = AppContext();

	useEffect(() => {
		const ress = query(collection(db, path));
		const dataLoad = onSnapshot(ress, (snapshot) => {
			setReplyList(
				snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
			);
		});

		return () => {
			dataLoad();
		};
	}, [path]);

	return (
		<div>
			<ReplyBy path={path} />
			<ul className='flex justify-end flex-col items-end gap-3'>
				{replyList.map((item) => {
					return (
						<li className='bg-dark-gray rounded-md shadow-md text-white text-[0.7em] w-fit text-end px-2 py-2'>
							{`${item.data.reply} by`}{" "}
							<span className='font-bold'>
								{user.email === item.data.by ? "you" : item.data.by}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ReplyList;
