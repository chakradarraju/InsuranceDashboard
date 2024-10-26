'use client';

import ProfilePic from "./ProfilePic";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from 'next/navigation';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import { Input, Separator, Stack } from "@chakra-ui/react";

const Header: React.FC = () => {
  const { data: session, status } = useSession();
  if (status !== 'loading' && !session) {
    console.log('Not logged in, redirecting to login');
    redirect('/login');
  }
  return (<div className="flex text-center h-16">
    <div className="text-2xl font-bold p-4">DashStack</div>
    <Input variant="subtle" placeholder="Search..." className="flex-1 my-auto m-10 p-1"></Input>
    <div className="my-auto mx-2">
      <ColorModeButton />
    </div>
    <div className="my-auto mr-3">
      <MenuRoot>
        <MenuTrigger asChild>
          <ProfilePic src="/user.png" />
        </MenuTrigger>
        <MenuContent>
          <Stack>
            <MenuItem value="user" disabled>Welcome {session?.user?.name}</MenuItem>
            <Separator variant="solid" />
            <MenuItem value="signOut" onClick={() => signOut()}>Logout</MenuItem>
          </Stack>
        </MenuContent>
      </MenuRoot>
    </div>
    

  </div>);
}

export default Header;