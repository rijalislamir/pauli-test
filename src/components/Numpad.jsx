import React from 'react'

const Numpad = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>7</button>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>8</button>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>9</button>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>4</button>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>5</button>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>6</button>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>1</button>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>2</button>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>3</button>
        <button className='w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow'>0</button>
    </div>
  )
}

export default Numpad