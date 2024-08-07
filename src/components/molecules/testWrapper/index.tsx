import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { RootState } from 'store';
import { theme } from 'theme';

import { ThemeProvider } from '@mui/material/styles';

import rootReducer from 'store/reducers/rootReducer';

type Props = {
  children: React.ReactNode;
  preloadedState?: Partial<RootState>;
};

const getStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export const TestWrapper: FC<Props> = ({ children, preloadedState }) => {
  const store = getStore(preloadedState);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};
