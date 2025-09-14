import Link from "next/link";
import Image from "next/image";

export default function ThirdSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row text-black justify-center px-20 lg:px-80 items-center-safe align-middle place-self-center self-center-safe  bg-gray-200 gap-10 lg:gap-50 p-10">
      
      {/* Text Content */}
      <div className="flex flex-col lg:w-1/2 px-4 lg:px-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          OUR <span className="text-blue-500">STORY</span>
        </h1>

        <p className="text-justify text-lg lg:text-xl mb-4">
          MAINA BRAND — together we call it House of more than Fashion. It is a Next Gen Fashion Game Changer.
          Starting with selling Tailored Cloth, we will then launch our own Brands and even Technological Empowered
          clothing like Self Colour Changing wear. Coming Soon!
        </p>    

        <p className="text-lg lg:text-xl">
          We are based in Dodoma (Nkuhungu Street) and Arusha (Olacity Street). 
          We mix traditional culture with Western culture to make just the right blend.
        </p>

        <Link href="/" passHref>
          <button className="bg-blue-500 w-max px-6 py-3 text-lg mt-6 hover:bg-blue-800 rounded-xl font-bold text-white">
            LEARN MORE
          </button>
        </Link>
      </div>

      {/* Image */}
      <div className="lg:w-1/2">
        <Image
          src="/stupid4.jpg"
          alt="Pisi Kali Here"
          width={500}
          height={500}
          className="rounded-2xl "
        />
      </div>
    </div>
  );
}
