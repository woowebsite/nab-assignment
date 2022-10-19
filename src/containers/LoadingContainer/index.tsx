import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import get from 'lodash/get';
import { loadingSliceName, reducer as loadingReducer, initialState } from './slices';
import NProgress from 'nprogress';
import { useInjectReducer } from 'store/hooks';

interface LoadingContainerProps {
  children: React.ReactElement<any>;
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({ children }) => {
  useInjectReducer({
    key: loadingSliceName,
    reducer: loadingReducer
  });

  const isLoading = useSelector((state) => get(state, [loadingSliceName, 'isLoading'], initialState.isLoading));

  useEffect(() => {
    isLoading ? NProgress.start() : NProgress.done();
  }, [isLoading]);

  return <>{children}</>;
};

export default LoadingContainer;
