import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container h-full bg-white flex-col mx-auto">
    <Header />
    <div className="flex flex-row">
      <Sidebar />
      <main className="flex flex-1 p-2 flex-col overflow-y-scroll bg-slate-100">{children}</main>
    </div>
  </div>
);

export default Layout;