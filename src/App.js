import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Deixa o store da app disponível para todos os componentes
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    // Colocamos o BrowserRouter aqui em vez de nas rotas porque o Header também vai precisar de aceder às rotas para navegação
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
