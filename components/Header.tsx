const Header: React.FC = () => (
  <div className="flex text-center h-16">
    <div className="text-2xl font-bold p-4">DashStack</div>
    <input type="text" placeholder="Search..." className="flex flex-1 p-1 border-gray-300 border-2 rounded-md mx-5 my-2 " />
    <div className="p-4">User Profile</div>
  </div>
);

export default Header;