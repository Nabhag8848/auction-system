import { Route } from 'react-router';
import { createBrowserRouter, createRoutesFromElements } from 'react-router';
import { AppRouterProviders } from '../components/AppRouterProviders';

export const useCreateRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppRouterProviders />}>
        <Route path="/" element={<></>} />
      </Route>
    )
  );
};
