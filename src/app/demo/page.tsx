'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

const DemoPage = () => {
  const [blockingLoading, setBlockingLoading] = useState(false);
  const [backgroundLoading, setBackgroundLoading] = useState(false);

  const handleBlocking = async () => {
    setBlockingLoading(true);
    await fetch('/api/demo/blocking', { method: 'POST' });
    setBlockingLoading(false);
  };

  const handleBackground = async () => {
    setBackgroundLoading(true);
    await fetch('/api/demo/background', { method: 'POST' });
    setBackgroundLoading(false);
  };

  return (
    <div className='space-x-4 p-8'>
      <Button
        disabled={blockingLoading}
        onClick={handleBlocking}
      >
        {blockingLoading ? 'Loading...' : 'Blocking'}
      </Button>

      <Button
        disabled={backgroundLoading}
        onClick={handleBackground}
      >
        {backgroundLoading ? 'Loading...' : 'Background'}
      </Button>
    </div>
  );
};

export default DemoPage;
