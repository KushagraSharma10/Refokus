import React from 'react'

const Footer = () => {
    return (
        <div className='w-full '>
            <div className='w-full py-10 px-[5vw] flex items-center gap-[7vh]'>
                <div className='basis-1/2'>
                    <h1 className='text-[11rem] tracking-tight'>refokus.</h1>
                </div>
                <div className='basis-1/2 flex gap-1'>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                        {["instagram", "twitter (X?)", "Linkedin"].map((item, index) => <a Key={index} className='block mt-2 capitalize text-zinc-700' >{item}</a>)}
                    </div>
                    <div className='basis-1/3'>
                        <h4 className='mb-10 text-zinc-500 capitalize'>Socials</h4>
                        {["instagram", "twitter (X?)", "Linkedin"].map((item, index) => <a Key={index} className='block mt-2 capitalize text-zinc-700' >{item}</a>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer