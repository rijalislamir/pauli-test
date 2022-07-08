import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { numpadPressed } from '../store/dataSlice'

const Numpad = () => {
    const dispatch = useDispatch()
    const buttonClass = "w-1/4 p-2 m-1 bg-blue-600 rounded-md text-white grow"

    return (
        <div className='flex flex-wrap justify-center'>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 7}))}>7</button>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 8}))}>8</button>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 9}))}>9</button>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 4}))}>4</button>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 5}))}>5</button>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 6}))}>6</button>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 1}))}>1</button>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 2}))}>2</button>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 3}))}>3</button>
            <button className={buttonClass} onClick={() => dispatch(numpadPressed({ value: 0}))}>0</button>
        </div>
  )
}

export default Numpad