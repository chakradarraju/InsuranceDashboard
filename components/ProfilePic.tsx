import Image from "next/image";

const ProfilePic: React.FC<{src: string}> = ({src, ...props}) => (<Image alt="profile pic" height={40} width={40} src={src} className="rounded-full" {...props} />);

export default ProfilePic;