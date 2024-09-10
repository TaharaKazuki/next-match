'use client';

import { NextUIProvider } from '@nextui-org/react';
import { type ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
