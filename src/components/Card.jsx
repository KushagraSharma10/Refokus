import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width,start,para,hover="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && '#7443ff', padding: "25px"}} className={`${width} bg-zinc-800 hover:${hover} rounded-xl p-5 min-h-[55vh] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>Up Next: News</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-2xl mt-5 capitalize">insights and behind <br /> the scenes</h1>
      </div>
      <div className="down w-full">
        {
          start && (
            <>
              <h1 className="text-[8vw] font-medium tracking-tight leading-none">Start a Project</h1>
              <button className="rounded-full mt-5 py-2 px-5 border-[.1vw] border-zinc-300">Contact Us</button>
            </>
          )
        }
        {
          para && (
            <p className="text-sm text-[#B6B6BE]">Explore what drives our team</p>
          )
        }
         
      </div>
    </motion.div>
  ) 
}

export default Card;