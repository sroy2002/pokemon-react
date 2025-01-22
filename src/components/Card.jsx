import React from 'react'
function Card({key,name,image,alt_name}) {
  return (
    <div className='mx-8 my-4 flex flex-col items-center justify-center bg-[#c0f9ff] rounded-xl p-6  hover:cursor-pointer transition-transform duration-100 ease-in-out hover:scale-105 hover:bg-[#8be9f6] hover:shadow-lg '>
       <img src={image} alt={alt_name} className='w-[10rem] h-[10rem]'/>
        <p className='font-bold text-xl mb-4 poppins-semibold '>{name}</p>
    </div>
  )
}

export default Card
