"use client"
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

const queryClient = new QueryClient();

const QueryProviderData: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default QueryProviderData;