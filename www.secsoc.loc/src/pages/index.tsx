import React from 'react';
import useAuth from '@/hooks/auth';

export default function Home() {
  const { user } = useAuth({ middleware: 'guest' });

  return (
    <div>index</div>
  );
}
