'use client';

import { SparkleIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import { Kbd } from '@/components/ui/kbd';
import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ProjectsView = () => {
  return (
    <div className='bg-sidebar flex min-h-screen flex-col items-center justify-center p-6 md:p-16'>
      <div className='mx-auto flex w-full max-w-sm flex-col items-center gap-4'>
        <div className='flex w-full items-center justify-between gap-4'>
          {/* Logo */}
          <div className='group/logo flex w-full items-center gap-2'>
            <Image
              src='/assets/images/logo.svg'
              alt='Novix'
              width={32}
              height={32}
              className='size-8 md:size-11.5'
            />
            <h1
              className={cn(
                'text-4xl font-semibold md:text-5xl',
                font.className
              )}
            >
              Novix
            </h1>
          </div>
        </div>
        {/*  */}
        <div className='flex w-full flex-col gap-4'>
          <div className='grid grid-cols-2 gap-2'>
            <Button
              variant='outline'
              onClick={() => {}}
              className='bg-background flex h-full flex-col items-start justify-start gap-6 rounded-none border p-4'
            >
              <div className='flex w-full items-center justify-between'>
                <SparkleIcon className='size-4' />
                <Kbd className='bg-accent border'>ctrl+j</Kbd>
              </div>
              <div>
                <span className='text-sm'>New</span>
              </div>
            </Button>

            <Button
              variant='outline'
              onClick={() => {}}
              className='bg-background flex h-full flex-col items-start justify-start gap-6 rounded-none border p-4'
            >
              <div className='flex w-full items-center justify-between'>
                <FaGithub className='size-4' />
                <Kbd className='bg-accent border'>ctrl+i</Kbd>
              </div>
              <div>
                <span className='text-sm'>Import</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
