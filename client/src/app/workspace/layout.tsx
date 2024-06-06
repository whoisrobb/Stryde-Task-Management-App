import Header from '@/components/layouts/header';
import Sidebar from '@/components/layouts/sidebar';
import React from 'react';

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="flex h-screen max-w-screen">
      <Sidebar />
      <div className="px-2 lg:w-[calc(100vw-17.5rem)] w-screen">
        <Header />
        {children}
      </div>
    </body>
  );
}
