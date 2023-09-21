import React from 'react';

import type { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { muiLightTheme } from '@/global/ui/theme/mui';
import { GlobalReset } from '@/global/ui/theme/reset';
import { ThemeProvider } from '@mui/material';

//
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalReset />

      <ThemeProvider theme={muiLightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
