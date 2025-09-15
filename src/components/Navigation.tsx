import Image from "next/image";
import { FaSearch, FaUser, FaHeart, FaCartPlus } from "react-icons/fa"
import { TfiThumbDown, TfiThumbUp } from "react-icons/tfi"
import Link from "next/link";

const navigaz = [
    {
        "name" : "HOME",
        "link" :"/"
    },
    {
        "name" : "MEN",
        "link" :"/men"
    },
    {
        "name" : "WOMEN",
        "link" :"/women"
    },
    {
        "name" : "LOOKBOOK",
        "link" :"/lookbook"
    },
    {
        "name" : "ABOUT",
        "link" :"/about"
    },
    {
        "name" : "CULTURE",
        "link" :"/culture"
    }
]
export default function Navigation(){
    return (
        
        <nav className="flex flex-row text-white align-middle bg-black justify-center gap-10">
            <span className="bg-[url('https://brandmaina.com/mainalogo.png')] w-20 h-15 bg-center bg-cover">                
            </span>
            <ul className="lg:flex flex-row gap-5 hidden sm:hidden font-bold align-middle self-center-safe">
                {navigaz.map((navi) => (
                    <li className="hover:text-blue-500" key={navi.name} ><Link href={navi.link}>{navi.name}</Link></li>
                ))}
            </ul>
            <ul className="flex flex-row gap-5 self-center-safe">
                <li className="relative flex flex-row gap-2 align-middle self-center-safe items-center">
                    <FaSearch className="hover:text-blue-500"/>
                    <input type="search" placeholder="Search For Product" name="" className="rounded-full text-black placeholder:text-gray-500 bg-white p-3 hidden" id="" />
                    <div className="absolute hidden" id="products"></div>
                </li>
                <li className="hover:text-blue-500"><Link href="/registration"><FaUser/></Link></li>
                <li className="hover:text-blue-500"><Link href="/favourites"><FaHeart/></Link></li>
                <li className="relative">
                    <Link href="/cart"><FaCartPlus className="hover:text-blue-500"/></Link>
                    <span className="rounded-full px-2 absolute top-[-10] right-[-20] text-sm size-5 bg-blue-500">3</span>
                </li>
            </ul>
            <span className="visible ml-10 lg:hidden self-center-safe  sm:visible">
                <TfiThumbDown className="hover:text-blue-500" size={20}/>
                <TfiThumbUp className="hidden text-blue-500" size={20}/>
            </span>
        </nav>

    )
}