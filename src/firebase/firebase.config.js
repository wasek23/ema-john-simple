import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBUNaSPFzeHMoy7JN1HF_qLY8zdFn_QY5M',
	authDomain: 'wasek-emajohn.firebaseapp.com',
	projectId: 'wasek-emajohn',
	storageBucket: 'wasek-emajohn.appspot.com',
	messagingSenderId: '572778436965',
	appId: '1:572778436965:web:ac7542c61fc33f4f24a98c'
};

const firebaseInit = initializeApp(firebaseConfig);
export default firebaseInit;