"use client";

import { useParams } from 'next/navigation';
import React from 'react';

const Workspace = () => {
    const params = useParams();
  return (
    <div>
        Wsgood
        {JSON.stringify(params.userId)}
    </div>
  )
}

export default Workspace
