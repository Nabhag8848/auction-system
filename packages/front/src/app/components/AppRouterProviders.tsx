import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';

export const AppRouterProviders = () => {
  return (
    <StrictMode>
      <Outlet />
    </StrictMode>
  );
};
