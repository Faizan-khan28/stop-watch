import { IoReloadSharp } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";

export default function StopWatch () {
    return (
        <div className="flex justify-center items-center h-[100vh]">
          <div>
            <h1 className="text-center font-medium text-[30px] bg-black text-white">Stop Watch</h1>
          <div className="bg-blue-100 text-white w-96 h-[420px] pt-5 pb-5 ">
             <span className="text-black text-[25px] flex justify-end pr-5 cursor-pointer">
             <IoReloadSharp />
             </span>
             <div className="flex justify-center h-16 p-[40%] text-[30px] bg-red-600 w-16  rounded-full m-auto">
              <h1 className="flex items-center">00.05.12</h1>
             </div>
             <div className="text-black flex justify-center text-[50px] pt-2 cursor-pointer">
             <IoPlayCircle />
             </div>
           </div>
          </div> 
        </div>
    )
}