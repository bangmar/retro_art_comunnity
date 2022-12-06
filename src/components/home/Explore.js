import axios from "axios";
import React, { useEffect, useState } from "react";
import WebsiteBtn from "./WebsiteBtn";
import Loading from "../Loading";

import FooterHome from "./FooterHome";
import { RxPinTop } from "react-icons/rx";

import { AppContext } from "../../context/AppContext";
import Comment from "./Comment";

const Explore = () => {
	const [datas, setDatas] = useState([]);
	const [isPending, setPending] = useState(true);
	const { isShowTopBtn } = AppContext();

	useEffect(() => {
		const fecthData = () => {
			axios
				.get(
					`https://www.rijksmuseum.nl/api/nl/collection?key=G1uOuCj6&involvedMaker=Rembrandt+van+Rijn`
				)

				.then((res) => {
					const arts = res.data.artObjects;
					setDatas({ arts });
					setInterval(() => {
						setPending(false);
					}, 2500);
				})
				.catch((err) => {
					console.log("Status:", err);
				});
		};
		return () => {
			fecthData();
		};
	}, []);

	if (!isPending) {
		const bg = datas.arts[0].headerImage.url;
		return (
			<div>
				<div className='relative mb-10'>
					<div
						className='bg-red-400 w-screen h-[300px]  bg-fixed grayscale-[100%]  '
						style={{ backgroundImage: `url(${bg})` }}></div>
					<div className='font-oswald font-bold absolute top-0 bottom-0 flex flex-col items-center justify-center left-0 right-0'>
						<h1 className=' text-[1.5em] text-costum-orange'>
							TODAY TRENDY ART
						</h1>
						<h1 className=' text-[2.2em] text-white underline -mt-2 hover:bg-orange-hover px-4 wipe-transition'>
							<a
								href='https://www.rijksmuseum.nl/'
								target='_blank'
								rel='noopener noreferrer'>
								RIJKSSTUDIO EDITION
							</a>
						</h1>
					</div>
				</div>

				<div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[50px] md:px-[80px] items-center gap-5'
					data-aos='fade-right'>
					{datas.arts.slice(0, 3).map((val, key) => {
						return (
							<div key={key}>
								<div className='h-[250px] flex gap-x-5 overflow-hidden mb-2'>
									<div
										className='w-[250px] h-full bg-cover bg-center'
										style={{
											backgroundImage: `url(${val.headerImage.url})`,
										}}></div>
									<div className='w-full  flex flex-col justify-between gap-y-5 '>
										<div
											className='w-full h-[200px] '
											style={{
												backgroundImage: `url(${val.webImage.url})`,
											}}></div>
										<WebsiteBtn url={val.links.web} />
									</div>
								</div>
								<h1 className='font-oswald text-[1em] font-medium'>
									{val.title}
								</h1>
								<p className='font-inter text-[0.8em] font-medium'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. In
									consequatur accusamus doloribus iusto explicabo enim!
								</p>
							</div>
						);
					})}
				</div>

				<div className='px-[50px] md:px-[80px] py-[50px]'>
					<h1 className='bg-costum-orange font-oswald font-bold md:text-[2.2em] text-[2em] w-fit px-2 mb-4'>
						ANOTHER GREAT WORKS BY THIS MUSEUM
					</h1>
					<ul className='flex flex-wrap gap-3'>
						{datas.arts.slice(3).map((val, key) => {
							return (
								<li
									key={key}
									className='font-inter text-[0.8em] md:text-[1em] rounded-md shadow-md text-white hover:text-costum-orange basic-transition cursor-pointer bg-dark-gray px-4 py-2'>
									<a
										href={val.links.web}
										target='_blank'
										rel='noopener noreferrer'>
										{val.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>

				<Comment />
				<FooterHome />
				{isShowTopBtn && (
					<button
						onClick={() => {
							window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
						}}
						className={` fixed bottom-5 right-10  p-5 bg-costum-orange animate-bounce`}>
						<RxPinTop color='white' size={"20px"} />
					</button>
				)}
			</div>
		);
	} else {
		return <Loading />;
	}
};

export default Explore;
