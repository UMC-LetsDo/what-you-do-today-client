import { useNavigate } from 'react-router-dom';
import React from 'react';

const ErrorFallback = ({ resetErrorBoundary }) => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>There was an error!</h1>
      <div>
        <button onClick={() => resetErrorBoundary()}>
          Try again
        </button>
        <button
          onClick={() => {
            navigate('/', { replace: true });
            window.location.reload();
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
