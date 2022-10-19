import { ReactElement } from 'react';
import { render as baseRender, RenderOptions, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import store from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'globalStyle';
import LoadingContainer from 'containers/LoadingContainer';
import { defaultTheme } from 'styles/defaultTheme.styles';

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => baseRender(ui, { ...options }) as RenderResult;

const renderWithProvider = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  const element = (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <LoadingContainer>{ui}</LoadingContainer>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
  return baseRender(element, { ...options }) as RenderResult;
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render, renderWithProvider };
