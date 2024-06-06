import Header from '@/components/layouts/header';
import Sidebar from '@/components/layouts/sidebar';
import React from 'react';

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="flex h-screen">
      <Sidebar />
      <div className="px-2 w-full">
        <Header />
        {children}
      </div>
    </body>
  );
}
