"use client";

import AddToCartButton from "./AddToCartButton";
import ImageMagnifier from "./ImageMagnifier";
import { FaStar, FaHeart } from "react-icons/fa";
import { useCart } from "@/contexts/CartContext";
import { useMessage } from "@/contexts/MessageContext";
import { Products } from "@/static.json"; // Assuming it's default export
import Link from "next/link";

export default function SecondSection() {
  const { addToCart } = useCart();
  const { showMessage } = useMessage();

  const handleAdd = (product) => {
    addToCart(product);
    showMessage(`${product.name} added to cart`);
  };

  return (
    <section className="flex bg-white pb-10 flex-col items-center text-black justify-center px-0">
      <h1 className="text-6xl text-center font-bold text-black mb-2 pt-10">FEATURED <span className="text-blue-500">PRODUCTS</span> </h1>
      <p className="text-black mb-6 pb-10">The heritage behind our designs</p>
      
      <div className="flex flex-wrap flex-row justify-center gap-2 lg:gap-10 ">
        {Products.filter(product => product.gender === "Male").map((product) => (
          <div
            key={product.id}
            className="flex group  flex-col bg-white border-2 border-gray-300 hover:border-blue-500 rounded-lg shadow-md p-1 lg:p-10"
          >
            <div className="pb-10 relative group-hover:scale-110 group-hover:scale-x-130 lg:scale-110">
              <ImageMagnifier src={product.imurl} width={195} height={400}   />
              <span className="absolute top-5 left-1 bg-blue-500 rounded-4xl px-5 w-auto">{product.label}</span>
              <span className="absolute top-5 right-4">< FaHeart className="text-white" size={20}/></span>
            </div>
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>

            <div className="flex  justify-between items-center mt-2">
              <p className="text-md font-medium">Tsh {product.price.toLocaleString()}</p>

              <span className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </span>
            </div>

            <div className="mt-4 self-center">
              <AddToCartButton onAdd={() => handleAdd(product)}  />
            </div>
          </div>
        ))}
      </div>
      <button className="p-5 mt-5 border-2 rounded-2xl hover:bg-blue-500 hover:text-white hover:font-bold border-blue-500 text-blue-500"><Link href="/men">VIEW ALL PRODUCTS</Link></button>
    </section>
  );
}
