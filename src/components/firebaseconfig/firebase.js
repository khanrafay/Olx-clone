import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDzUtRNxEqEQazRa4Ts1_VKA9-tCw_tk7k',
	authDomain: 'olx-clone-2ef0b.firebaseapp.com',
	databaseURL: 'https://olx-clone-2ef0b.firebaseio.com',
	projectId: 'olx-clone-2ef0b',
	storageBucket: 'olx-clone-2ef0b.appspot.com',
	messagingSenderId: '865171152802',
	appId: '1:865171152802:web:afa9b0a90b29d0a8695cfb'
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
