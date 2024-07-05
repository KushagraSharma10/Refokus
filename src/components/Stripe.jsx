import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-4 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px]  border-zinc-600 flex items-center justify-between '>
        <img className='' src={val.url} alt="" />
        <span className='text-sm' >{val.number}</span>
    </div>
  )
}

export default Stripe;