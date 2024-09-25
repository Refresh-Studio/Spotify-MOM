'use client';

import React, { PropsWithChildren, useState } from 'react';

import { LoadingPage } from './LoadingPage';

export const LoadingManager = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);

  const handleAnimationComplete = () => {
    setLoading(false);
  };

  return <>{loading ? <LoadingPage onComplete={handleAnimationComplete} /> : children}</>;
};
