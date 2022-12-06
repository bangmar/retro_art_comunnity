import React, { useState } from "react";
import WebsiteBtn from "./WebsiteBtn";
import Loading from "../Loading";

import FooterHome from "./FooterHome";
import { RxPinTop } from "react-icons/rx";

import { AppContext } from "../../context/AppContext";
import Comment from "./Comment";

import banner from "../../assets/img/show/banner.jpg";
import { useEffect } from "react";

const Explore = () => {
	const [isPending, setPending] = useState(true);
	const { isShowTopBtn } = AppContext();

	useEffect(() => {
		setInterval(() => {
			setPending(false);
		}, 2500);
	}, []);

	const datas = [
		{
			title: "Portret van een vrouw, mogelijk Maria Trip",
			webUrl: "http://www.rijksmuseum.nl/nl/collectie/SK-C-597",
			imgUrl:
				"https://lh3.googleusercontent.com/AyiKhdEWJ7XmtPXQbRg_kWqKn6mCV07bsuUB01hJHjVVP-ZQFmzjTWt7JIWiQFZbb9l5tKFhVOspmco4lMwqwWImfgg=s0",
		},
		{
			title: "Isaak en Rebekka, bekend als ‘Het Joodse bruidje’",
			webUrl: "http://www.rijksmuseum.nl/nl/collectie/SK-C-216",
			imgUrl:
				"https://lh3.googleusercontent.com/mAyAjvYjIeAIlByhJx1Huctgeb58y7519XYP38oL1FXarhVlcXW7kxuwayOCFdnwtOp6B6F0HJmmws-Ceo5b_pNSSQs=s0",
		},
		{
			title: "Zelfportret als de apostel Paulus",
			webUrl: "http://www.rijksmuseum.nl/nl/collectie/SK-A-4050",
			imgUrl:
				"https://lh3.googleusercontent.com/koQbNAoqV857feer4wJRVF-lbFzyNdvSsjgnXTTF3P3Dmgm2s_7noCVyqsxr1466YiIccueR0DpaU9-wPchhM0bIiQ=s0",
		},
	];

	const anothers = [
		{
			title:
				"De waardijns van het Amsterdamse lakenbereidersgilde, bekend als ‘De Staalmeesters’",
			webUrl: "http://www.rijksmuseum.nl/nl/collectie/SK-C-6",
		},
		{
			title: "Zelfportret",
			webUrl: "http://www.rijksmuseum.nl/nl/collectie/SK-A-4691",
		},
		{
			title: "Rembrandt van Rijn",
			webUrl: "http://www.rijksmuseum.nl/nl/collectie/SK-A-5033",
		},
		{
			title: "Oopjen Coppit, Rembrandt van Rijn, 1634",
			webUrl: "http://www.rijksmuseum.nl/nl/collectie/SK-C-1768",
		},
		{
			title: "Zittende naakte vrouw",
			webUrl: "http://www.rijksmuseum.nl/nl/collectie/RP-P-1962-77",
		},
		{
			title: "Het bruggetje van Six, Rembrandt van Rijn, 1645",
			webUrl: "http://www.rijksmuseum.nl/nl/collectie/RP-P-OB-268",
		},
	];

	if (!isPending) {
		return (
			<div>
				<div className='relative mb-10'>
					<div
						className='bg-red-400 w-screen h-[300px]  bg-fixed grayscale-[100%]  '
						style={{ backgroundImage: `url(${banner})` }}></div>
					<div className='font-oswald font-bold absolute top-0 bottom-0 flex flex-col items-center justify-center left-0 right-0'>
						<h1 className=' text-[1.5em] text-costum-orange'>
							TODAY ART SHOWCASE
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
					{datas.map((item) => {
						return (
							<div>
								<div className='h-[250px] flex gap-x-5 overflow-hidden mb-2'>
									<div
										className='w-[250px] h-full bg-cover bg-center'
										style={{
											backgroundImage: `url(${item.imgUrl})`,
										}}></div>
									<div className='w-full  flex flex-col justify-between gap-y-5 '>
										<div
											className='w-full h-[200px] '
											style={{
												backgroundImage: `url(${item.imgUrl})`,
											}}></div>
										<WebsiteBtn url={item.webUrl} />
									</div>
								</div>
								<h1 className='font-oswald text-[1em] font-medium'>
									{item.title}
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
						{anothers.map((val, key) => {
							return (
								<li
									key={key}
									className='font-inter text-[0.8em] md:text-[1em] rounded-md shadow-md text-white hover:text-costum-orange basic-transition cursor-pointer bg-dark-gray px-4 py-2'>
									<a
										href={val.webUrl}
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
