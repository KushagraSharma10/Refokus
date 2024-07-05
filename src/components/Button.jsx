
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Start a Project"}) => {
  return (
    <div className='w-[10vw] p-2 text-md rounded-full bg-zinc-100 text-black flex items-center gap-2'>
        <span>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button