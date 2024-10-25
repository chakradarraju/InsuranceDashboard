import ProfilePic from "./ProfilePic";
import { ColorModeButton } from "@/components/ui/color-mode"

const Header: React.FC = () => (
  <div className="flex text-center h-16">
    <div className="text-2xl font-bold p-4">DashStack</div>
    <input type="text" placeholder="Search..." className="flex flex-1 p-1 border-gray-300 border-2 rounded-md mx-5 my-2 " />
    <div className="my-auto mx-2">
      <ColorModeButton />
    </div>
    <div className="my-auto mr-3">
      
      <ProfilePic src="/user.png" />
    </div>
  </div>
);

export default Header;