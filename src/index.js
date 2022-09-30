import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient} from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './root';
import './index.css';

const query = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <QueryClientProvider client={query}>
        <BrowserRouter>
          <Root/>
        </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>
);

