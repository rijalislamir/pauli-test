import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const num1 = useSelector(state => state.data.num1)
    const num2 = useSelector(state => state.data.num2)

    return (
        <div className='bg-black text-white w-80 p-2 m-1 text-center rounded-md text-4xl'>
            {num1} + {num2}
        </div>
    )
}

export default Display