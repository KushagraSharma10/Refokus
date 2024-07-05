import Button from './Button'

const Navbar = () => {
  return (
    <div className='w-full px-[4vw] py-4  flex items-center justify-between '>
      <div className='flex items-center justify-center'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='links flex items-center gap-14 ml-32'>
          {["Home", "Work", "About", "News", "Careers"].map((elem, index) => <a key={index} className='text-sm flex items-center gap-1 ' href='#'>
            {index === 1 && (<span style={{ boxShadow: "0 0 0.45em #00FF19" }} className='inline-block w-[.3vw] h-[.3vw] rounded-full bg-[#00FF19]'></span>)}
            {elem}</a>)
          }
        </div>
      </div>
      <Button />
    </div>
  )
}

export default Navbar