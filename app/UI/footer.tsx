import Link from "next/link";
import { monsterrat } from "./fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer(){
    return(
        <footer className={`${monsterrat.className} p-10 bg-black`}>
            <div className="flex gap-10">
                <div className="flex-1">
                    <h3 className="text-white text-xl font-bold">Quick Links</h3>
                    <ul className="text-white mt-5 text-base">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/appointment">Book Appontment</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="#Contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h3 className="text-white text-xl font-bold">Follow Us</h3>
                    <div className="flex gap-5 text-white mt-5 text-base">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" flex h-10 text-blue-600 hover:text-blue-700 transition">
                        <FontAwesomeIcon icon={faFacebookF} size="sm" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-10 text-blue-400 hover:text-blue-500 transition">
                        <FontAwesomeIcon icon={faTwitter} size="sm" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 text-pink-600 hover:text-pink-700 transition">
                        <FontAwesomeIcon icon={faInstagram} size="sm" />
                        </a>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-white text-xl font-bold">Contact Us</h3>
                    <ul className="text-white mt-5 text-base">
                        <li><Link href="tel:1234567890">+123 456 7890</Link></li>
                        <li><Link href="mailto:contact@smileclinic.com">contact@smileclinic.com</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}