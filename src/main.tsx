import { StrictMode } from 'react'; // importa o componente StrictMode do pacote react
import ReactDOM from 'react-dom/client'; // importa o ReactDOM do pacote react-dom/client
import './index.css'; // importa o arquivo de estilo index.css
import App from './App'; // importa o componente App do arquivo App.js
import firebase from 'firebase/app'; // importa o firebase do pacote firebase/app
import 'firebase/firestore'; // importa o módulo firestore do pacote firebase

const firebaseConfig = {
  //coloque aqui as suas configurações do firebase
}; // define as configurações do Firebase

firebase.initializeApp(firebaseConfig); // inicializa o Firebase com as configurações definidas

const db = firebase.firestore(); // obtém uma instância do Firestore do Firebase

const rootElement = document.getElementById('root') as HTMLElement; // obtém o elemento com id 'root' do DOM
const root = ReactDOM.createRoot(rootElement); // cria uma raiz do React no elemento 'root' usando ReactDOM

root.render(
  <StrictMode>
    <App db={db} />
  </StrictMode>,
); // renderiza o componente App dentro do StrictMode, passando a instância do Firestore como prop 'db'
