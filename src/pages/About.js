import React from "react";

import FooterAbout from "../components/about/FooterAbout";
import Ask from "../components/about/Ask";
import Founder from "../components/about/Founder";
import WeDo from "../components/about/WeDo";
import Rate from "../components/about/Rate";
import Cover from "../components/about/Cover";

import { RxPinTop } from "react-icons/rx";

import { AppContext } from "../context/AppContext";

const About = () => {
	const { isShowTopBtn } = AppContext();

	return (
		<React.Fragment>
			<Cover />
			<WeDo />
			<Rate />
			<Founder />
			<Ask />
			<FooterAbout />
			{isShowTopBtn && (
				<button
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
					}}
					className={` fixed bottom-5 right-10  p-5 bg-costum-orange animate-bounce`}>
					<RxPinTop color='white' size={"20px"} />
				</button>
			)}
		</React.Fragment>
	);
};

export default About;
