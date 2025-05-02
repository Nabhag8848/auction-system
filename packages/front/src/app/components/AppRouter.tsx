import { RouterProvider } from 'react-router-dom';
import { useCreateRouter } from '../hooks/useCreateRouter';

export const AppRouter = () => {
  return <RouterProvider router={useCreateRouter()} />;
};
