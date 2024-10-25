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
import { Button } from "@chakra-ui/react";

const Header: React.FC = () => {
  const { data: session, status } = useSession();
  if (status !== 'loading' && !session) {
    console.log('Not logged in, redirecting to login');
    redirect('/login');
  }
  return (<div className="flex text-center h-16">
    <div className="text-2xl font-bold p-4">DashStack</div>
    <input type="text" placeholder="Search..." className="flex flex-1 p-1 border-gray-300 border-2 rounded-md mx-5 my-2 " />
    <div className="my-auto mx-2">
      <ColorModeButton />
    </div>
    <div className="my-auto mr-3">
      <MenuRoot>
        <MenuTrigger asChild>
          <ProfilePic src="/user.png" />
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="signOut" onClick={() => signOut()}>Logout</MenuItem>
        </MenuContent>
      </MenuRoot>
    </div>
    

  </div>);
}

export default Header;