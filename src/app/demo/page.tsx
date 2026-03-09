'use client';

import { useState } from 'react';

import { useAuth } from '@clerk/nextjs';
import * as Sentry from '@sentry/nextjs';

import { Button } from '@/components/ui/button';

const DemoPage = () => {
  const { userId } = useAuth();

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

  // Handle client-side errors
  const handleClientError = () => {
    Sentry.logger.info('User attempting to click on client function', {
      userId,
    });
    throw new Error('Something went wrong in the browser!');
  };

  // Handle API errors
  const handleApiError = async () => {
    await fetch('/api/demo/error', { method: 'POST' });
  };

  // Handle Inngest errors
  const handleInngestError = async () => {
    await fetch('/api/demo/inngest-error', { method: 'POST' });
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

      <Button
        variant='destructive'
        onClick={handleClientError}
      >
        Client Error
      </Button>

      <Button
        variant='destructive'
        onClick={handleApiError}
      >
        API Error
      </Button>

      <Button
        variant='destructive'
        onClick={handleInngestError}
      >
        Inngest Error
      </Button>
    </div>
  );
};

export default DemoPage;
