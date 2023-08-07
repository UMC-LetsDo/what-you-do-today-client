import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/queries/queryClient';
import './App.css';


import DynamicRoutes from './DynamicRoutes';
const App = () => {
  return (
    <div>
      <BrowserRouter>

        <QueryClientProvider client={queryClient}>
          <DynamicRoutes />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;