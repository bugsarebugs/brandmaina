import { FaSpinner,  } from "react-icons/fa"
export default function Loading(){
    return (
        <div className="bg-blue-100 animate-pulse w-dvw h-dvh flex flex-col items-center align-middle self-center-safe ">
            <FaSpinner className="animate-spin" size={100}/>
        </div>
    )
}