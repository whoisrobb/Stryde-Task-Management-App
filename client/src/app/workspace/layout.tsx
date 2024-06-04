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
            <div className="">

                {children}
            </div>
    </body>
  );
}
