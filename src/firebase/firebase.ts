import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDOyadP0pHCVJuZHBc5zs_FFPwZ-f-LfzQ',
  authDomain: 'reactreminder-f5e3b.firebaseapp.com',
  projectId: 'reactreminder-f5e3b',
  storageBucket: 'reactreminder-f5e3b.appspot.com',
  messagingSenderId: '744711489053',
  appId: '1:744711489053:web:6dbf6d6aa2c5f3f9ab68f4',
  measurementId: 'G-JLBY57EY7V',
};

// inicializa o Firebase
const app = initializeApp(firebaseConfig);

// cria a instância de autenticação
const auth = getAuth(app);
export default auth;