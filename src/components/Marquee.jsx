import { motion } from "framer-motion"

const Marquee = ({ imageurls ,direction}) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div initial = {{x: direction === "left" ? "0" : "-100%"}} animate = {{x: direction === "left" ? "-100%" : "0"}} transition={{ease:"linear", duration:20, repeat:Infinity}} className="flex flex-shrink-0 gap-36 py-5 pr-40">
        {imageurls.map((url, index) => <img key={index} src={url} className="w-32 flex-shrink-0" />)}
      </motion.div>
      <motion.div initial = {{x: direction === "left" ? "0" : "-100%"}} animate = {{x: direction === "left" ? "-100%" : "0"}} transition={{ease:"linear", duration:20, repeat:Infinity}} className="flex flex-shrink-0 gap-36 py-5 pr-40">
        {imageurls.map((url, index) => <img key={index} src={url} className="w-32 flex-shrink-0" />)}
      </motion.div>
    


    </div>
  )
}

export default Marquee