import firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyANZi6Xc7B1_14-RfEJ7KV9b9nkcZL2DqY",
//     authDomain: "quizdom-70da5.firebaseapp.com",
//     projectId: "quizdom-70da5",
//     storageBucket: "quizdom-70da5.appspot.com",
//     messagingSenderId: "706147557425",
//     appId: "1:706147557425:web:40f7062e5aee9a84743510",
//     measurementId: "G-RE88729T4B"
//   };

var firebaseConfig = {
	apiKey: 'AIzaSyB6VOERY1xyL_k5SS2AUHQUZLSLojcDJXg',
	authDomain: 'quiz-app-24224.firebaseapp.com',
	databaseURL: 'https://quiz-app-24224-default-rtdb.firebaseio.com',
	projectId: 'quiz-app-24224',
	storageBucket: 'quiz-app-24224.appspot.com',
	messagingSenderId: '889190981123',
	appId: '1:889190981123:web:fdf35e2f02bf3143eef836',
	measurementId: 'G-RZXM7206EW',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

export default firebase;
