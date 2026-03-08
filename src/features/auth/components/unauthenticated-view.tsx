import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { ShieldAlertIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';

const UnauthenticatedView = () => {
  return (
    <div className='bg-background flex h-screen items-center justify-center'>
      <div className='bg-muted w-full max-w-lg'>
        <Item variant='outline'>
          <ItemMedia variant='icon'>
            <ShieldAlertIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Unauthorized Access</ItemTitle>
            <ItemDescription>
              You are not authorized to access this resource. Please sign in to
              continue.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <SignInButton>
              <Button
                variant='outline'
                size='sm'
              >
                Sign In
              </Button>
            </SignInButton>
          </ItemActions>
        </Item>
      </div>
    </div>
  );
};

export default UnauthenticatedView;
