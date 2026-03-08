import { Spinner } from '@/components/ui/spinner';

const AuthLoadingView = () => {
  return (
    <div className='bg-background flex h-screen items-center justify-center'>
      <Spinner className='text-ring size-6' />
    </div>
  );
};

export default AuthLoadingView;
