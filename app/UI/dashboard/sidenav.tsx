import Link from "next/link";
import Image from "next/image";
import { monsterrat } from "../fonts";

export default function DashHeader() {
    return(
        <header className={`${monsterrat.className} p-5`}>
            <div className="flex  justify-between flex-col">
                <div className="flex flex-col">
                    <Link legacyBehavior href="/">
                        <Image src="/smileclinic-logo.png" alt="Logo" width={150} height={50} />
                    </Link>
                    <nav className={`${monsterrat.className} flex gap-5 item-center flex-col mt-10`}>
                    <Link legacyBehavior href="/dashboard">Dashboard</Link>
                    <Link legacyBehavior href="/dashboard/appointments">Appointments</Link>
                    <Link legacyBehavior href="/dashboard/services">Services</Link>
                    <Link legacyBehavior href="/dashboard/doctors">Doctors</Link>
                    </nav>
                </div>
                
            </div>
        </header>
    )
}