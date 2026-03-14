import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
