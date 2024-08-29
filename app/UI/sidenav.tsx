import Link from "next/link";
import Image from "next/image";
import { monsterrat } from "./fonts";

export default function Header() {
    return(
        <header className="p-5">
            <div className="flex  justify-between item-center">
                <Link href="/">
                    <Image src="/smileclinic-logo.png" alt="Logo" width={150} height={50} />
                </Link>
                <nav className={`${monsterrat.className} flex gap-5 item-center`}>
                    <Link href="/">Home</Link>
                    <Link href="/appointment">Book Appointment</Link>
                    <Link href="/dashboard">Dashboard</Link>
                </nav>
            </div>
        </header>
    )
}