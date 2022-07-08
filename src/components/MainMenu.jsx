import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startTest } from '../store/dataSlice'
import { ToastContainer, toast } from 'react-toastify';

const MainMenu = props => {
    const { onCloseMainMenu } = props

    const [minutes, setMinutes] = useState("")

    const dispatch = useDispatch()

    const onSubmitMainMenu = e => {
        e.preventDefault()
        if (minutes >= 1) {
            dispatch(startTest({ minutes: minutes}))
            onCloseMainMenu()
        } else {
            toast.error("Should be greater than 0!")
        }
    }

    const onChangeMinutes = e => {
        setMinutes(parseInt(e.target.value) || 0)
    }

    return (
        <div className='fixed bg-blue-200 top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center'>
            <h1 className="mb-8 text-6xl">Pauli Test</h1>
            <form onSubmit={onSubmitMainMenu} className="flex flex-col justify-center items-center" autoComplete='off'>
                <label htmlFor="minutes">How long in minute</label>
                <input 
                    type="text"
                    id="minutes"
                    className='rounded-xl text-center'
                    value={minutes}
                    onChange={onChangeMinutes}
                    placeholder="Minimal 1 minute"
                />

                <button type='submit' className='bg-blue-900 px-6 py-2 rounded-lg text-white mt-3'>Start</button>
            </form>
            <ToastContainer position='bottom-left' />
        </div>
  )
}

export default MainMenu