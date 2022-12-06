import { useContext, createContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { db, auth } from "../lib/firebase-config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { Timestamp } from "firebase/firestore";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
	const navigate = useNavigate();

	const [isShowTopBtn, setShowTopBtn] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	const [user, setUser] = useState({});
	const [pending, setPending] = useState(true);

	const [date, setDate] = useState();
	const [time, setTime] = useState();

	useEffect(() => {
		const timeInterval = setInterval(() => {
			setDate(new Date().toLocaleDateString("en-ZA"));
			setTime(new Date().getHours() + " : " + new Date().getMinutes());
		}, 10);
		return () => {
			clearInterval(timeInterval);
		};
	}, []);

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
			.then(async (cred) => {
				await setDoc(doc(db, "reguser", cred.user.uid), {
					name: cred.user.email,
				});
				navigate("/home");
			})
			.catch((err) => {
				if (err.code === "auth/invalid-email") {
					setErrMsg("Invlid Email");
				}
				if (err.code === "auth/email-already-in-use") {
					setErrMsg("Email was used");
				}
			});
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
			.then(async (cred) => {
				navigate("/home");
			})
			.catch((err) => {
				if (err.code === "auth/invalid-email") {
					setErrMsg("Invlid Email");
				}
				if (err.code === "auth/email-already-in-use") {
					setErrMsg("Email was used");
				}
				if (err.code === "auth/wrong-password") {
					setErrMsg("Wrong email/password");
				}
			});
	};

	const logout = () => {
		return signOut(auth);
	};

	const ask = (question) => {
		return addDoc(collection(db, "question"), {
			question: question,
		});
	};

	const submitComment = (comment) => {
		return addDoc(collection(db, "comment"), {
			comment: comment,
			by: user.email,
			commentedAt: Timestamp.fromDate(new Date()),
		});
	};

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	useEffect(() => {
		const currUser = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setPending(false);
		});
		// unmount
		return () => {
			currUser();
		};
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	return (
		<GeneralContext.Provider
			value={{
				isShowTopBtn,
				signup,
				login,
				user,
				errMsg,
				pending,
				logout,
				ask,
				submitComment,
			}}>
			{children}
		</GeneralContext.Provider>
	);
};

export const AppContext = () => {
	return useContext(GeneralContext);
};
