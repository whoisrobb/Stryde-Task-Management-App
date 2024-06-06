import AvatarButton from '@/components/elements/avatar-button';
import NavHeader from '@/components/elements/nav-header';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/store/user-store';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react'

const LandingHeader = () => {
    const user = useUserStore((state) => state.userData);

  return (
    <div className='h-16 w-full border-b flex gap-2 items-center justify-between px-2'>
        <NavHeader />
      
        <div className="space-x-2">
            <SignedIn>
                <AvatarButton />
                <Link href={`/workspace/${user?.userId}`}>
                    <Button variant={"expandIcon"} Icon={ArrowRightIcon} iconPlacement={'right'}>
                        Workspace
                    </Button>
                </Link>
            </SignedIn>

            {/* <MobileNav /> */}

            <SignedOut>
                <Link href={'/sign-in'}>
                    <Button>Sign in</Button>
                </Link>
            </SignedOut>
        </div>
    </div>
  )
}

export default LandingHeader;