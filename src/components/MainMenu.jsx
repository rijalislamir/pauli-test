import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTimer } from '../store/dataSlice'

const MainMenu = props => {
    const { onClose } = props

    const [minutes, setMinutes] = useState(0)

    const dispatch = useDispatch()

    const onSubmitMainMenu = e => {
        e.preventDefault()
        dispatch(setTimer({ minutes: minutes}))
        onClose()
    }

    const onChangeMinutes = e => {
        setMinutes(parseInt(e.target.value) || 0)
    }

    return (
        <div className='fixed bg-blue-200 top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center'>
            <h1 className="mb-8 text-6xl">Pauli Test</h1>
            <form onSubmit={onSubmitMainMenu} className="flex flex-col justify-center items-center">
                <label htmlFor="minutes">How long in minute</label>
                <input type="text" id="minutes" className='rounded-xl text-center' value={minutes} onChange={onChangeMinutes} />

                <button type='submit' className='bg-blue-600 py-1 px-4 m-4 rounded-md text-white'>Start</button>
            </form>
        </div>
  )
}

export default MainMenu