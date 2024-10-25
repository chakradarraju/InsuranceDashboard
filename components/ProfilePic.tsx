import Image from "next/image";

const ProfilePic: React.FC<{src: string}> = ({src}) => (<Image alt="profile pic" height={20} width={20} src={src} className="w-10 h-10 rounded-full" />);

export default ProfilePic;