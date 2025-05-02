import { StrictMode } from 'react';
import { Outlet } from 'react-router';

export const AppRouterProviders = () => {
  return (
    <StrictMode>
      <Outlet />
    </StrictMode>
  );
};
