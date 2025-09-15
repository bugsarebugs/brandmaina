import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    return (
        <div className="flex flex-col items-center-safe p-5 justify-center-safe align-middle self-center-safe">
        <div className="flex  p-10 lg:flex-row sm:flex-col flex-col justify-center gap-10 lg:gap-50 text-white bg-black">
            <div className="flex flex-col">
                <span className="pt-25 bg-[url('https://brandmaina.com/mainalogo.png')] px-50 bg-center bg-cover"></span>
                <p className="w-100">Shop with us and become part of our Family Worldwide. Its A House of More than Fashion Because We Love what we doing</p>  
            </div>
            <div className="flex flex-col">
                <h1>QUICK LINKS</h1>
                <ul className="flex flex-col">
                    <li className="hover:text-blue-500"><Link href="/men">Men</Link></li>
                    <li className="hover:text-blue-500"><Link href="/women">Women</Link></li>
                    <li className="hover:text-blue-500"><Link href="/lookbook">Lookbook</Link></li>
                    <li className="hover:text-blue-500"><Link href="/about">About</Link></li>
                </ul>
            </div>
            <div className="flex flex-col ">
                <h1>SUPPORT</h1>
                <ul className="flex flex-col">
                    <li className="hover:text-blue-500"><Link href="/men">Contact</Link></li>
                    <li className="hover:text-blue-500"><Link href="/men">FAQ</Link></li>
                    <li className="hover:text-blue-500"><Link href="/men">Shipping</Link></li>
                    <li className="hover:text-blue-500"><Link href="/men">Returns</Link></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-row items-center pt-5 gap-1 lg:gap-130">
            <p className=" text-sm">&copy;2025 <span className="text-blue-500">MAINA BRAND</span> . Street ANd Western Culture Fashion. </p>
            <p className="flex flex-row"><span className="text-blue-500 font-bold">JOMAFA</span> done <span className="text-blue-500">!!</span></p>
        </div>
            </div>
    )
}