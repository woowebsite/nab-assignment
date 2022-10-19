import LoadingContainer from 'containers/LoadingContainer';
import GlobalStyle from 'globalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'store/store';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/defaultTheme.styles';
import App from './App';

const store = configureStore;
const MOUNT_NODE = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(MOUNT_NODE);

const render = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <LoadingContainer>
              <App />
            </LoadingContainer>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

render();
