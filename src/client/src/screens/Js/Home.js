import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from '../../firebase/firebase';
import LoadingScreen from './LoadingScreen';
import logo from './brand.png';

const Home = ({ setUser }) => {
	const [loading, setLoading] = useState(true);
	var uiConfig = {
		signInflow: 'popup',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccessWithAuthResult: () => false,
		},
	};
	useEffect(() => {
		let isMounted = true;
		firebase.auth().onAuthStateChanged((user) => {
			// setIsLoggedIn(!!user)
			if (user && isMounted) {
				setUser({
					uid: firebase.auth().currentUser.uid,
					name: firebase.auth().currentUser.displayName,
					email: firebase.auth().currentUser.email,
				});
				console.log('User Logged In');
			} else {
				console.log('User Signed Out');
				setUser({});
			}
			console.log('auth change');
			if (isMounted) setLoading(false);
		});
		return () => (isMounted = false);
	}, [setUser]);
	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<div id="Home">
					<div id="logo">
						<div id="logo-name">
							<b>GetSetQuiz</b>
						</div>
						{/* <img src={logo} alt="" /> */}
						<div id="description">
							A webapp where you can host and give contest
						</div>
					</div>

					<div id="login-card">
						<label className="login-label">
							<b>
								<img src={logo} alt="" />
							</b>
						</label>
						<StyledFirebaseAuth
							borderRadius="20px"
							uiConfig={uiConfig}
							firebaseAuth={firebase.auth()}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default Home;
