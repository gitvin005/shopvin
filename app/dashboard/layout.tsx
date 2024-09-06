import DashHeader from "../UI/dashboard/sidenav";
import { monsterrat } from "../UI/fonts";
import Image from "next/image";


 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 border-r-2 border-r-gray-200">
      <DashHeader />
      </div>
      <div className={`${monsterrat.className} flex-grow p-6 md:overflow-y-auto md:p-12`}>
                <div>
                    <div className="flex gap-5 items-center justify-end">
                        <h3>Hello Dr.Smith</h3>
                        <Image src='/profile.png' alt="profile" width={60} height={60} />
                    </div>
                </div>
                {children}</div>
    </div>
  );
}