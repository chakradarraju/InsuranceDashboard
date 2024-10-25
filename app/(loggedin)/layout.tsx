import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex container h-full bg-white dark:bg-black flex-col mx-auto divide-y">
    <Header />
    <div className="flex flex-row flex-grow">
      <Sidebar />
      <main className="flex flex-1 p-2 flex-col overflow-y-scroll bg-slate-100 dark:bg-slate-900">{children}</main>
    </div>
  </div>
);

export default Layout;