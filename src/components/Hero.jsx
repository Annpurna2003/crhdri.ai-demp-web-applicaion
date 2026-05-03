import React from 'react'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <>
    <div className='lg p-6 rounded-2xl shadow-xl animated-gradient'>
        <motion.div
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.3}}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center"
       >
    <h1 className="text-6xl font-bold leading-tight">
Build AI-Powered <br/> Digital Products
</h1>
<p className='mt-4 text-lg text-white-700'>
  Crhdri.ai delivers intelligent solutions for modern businesses.
</p>
 </motion.div>
<div className='mt-6 flex gap-4 justify-center'>
    <button className='bg-white text-black px-6 py-3 rounded-xl border'>
Get Started
    </button>
    <button className='border px-6 py-3 rounded-xl'>
        View Services

    </button>

</div>
    </div>

    </>

  )
}

export default Hero


