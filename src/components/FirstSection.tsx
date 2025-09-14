import Link from "next/link";

export default function FirstSection(){
    return (
        <div className="relative transparent overflow-hidden sm:h-200 md:h-200 lg:h-dvh h-100 w-dvw  self-center-safe align-middle flex flex-col justify-center items-center ">
            <div className="relative z-10 p-10 text-center">
                <h1 className="tracking-tight text-[5vw] leading-none font-extrabold uppercase text-5xl text-white ">brandMAINA <span className="text-blue-500 text-shadow-2xs shadow-2xs text-shadow-blue-900 shadow-blue-900">WORLDWIDE</span></h1>
                <p className="font-extralight text-3xl pb-10">Premium Clothing Line. Straight From the Trenches Styling.</p>
                <button className="rounded-2xl font-bold hover:bg-blue-700 bg-blue-500 p-4 mx-5"><Link href="/men">SHOP MEN</Link></button>
                <button className="rounded-2xl font-bold bg-gray-400 hover:bg-gray-700 p-4 mx-5"><Link href="/women">SHOP WOMEN</Link></button>
            </div>
            <div  className="absolute inset-0 z-0 bg-[url('/cover.png')] bg-cover bg-center opacity-30"></div>
        </div>
    )
}