import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetData } from '../store/dataSlice'

import { FaUndoAlt } from "react-icons/fa"

const Result = props => {
    const {
        onCloseResult,
        onOpenMainMenu
    } = props
    
    const startTime = useSelector(state => state.data.startTime)
    const history = useSelector(state => state.data.history)

    const dispatch = useDispatch()

    const operands = []
    const values = []
    const times = []
    let total = 0
    let correct = 0
    let wrong = 0

    history.forEach((item, i) => {
        operands.push([item.num1, item.num2])
        values.push([item.value, item.isCorrect])
        if (i === 0) {
            times.push((item.time - startTime) / 1000)
        } else if (i < history.length) {
            times.push((item.time - history[i-1].time) / 1000)
        }
        total++
        item.isCorrect ? correct++ : wrong++
    })

    const onClickTryAgain = () => {
        onCloseResult()
        dispatch(resetData())
        onOpenMainMenu()
    }

    return (
        <div className='fixed bg-blue-200 top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center'>
            <h1 className="mb-8 text-6xl">Times Up!</h1>
            <p className='mb-3'>Total: {total} | Correct: {correct} | Wrong: {wrong}</p>
            <div className='overflow-x-auto scroll-smooth w-4/5'>
                <table className='border-separate border-spacing-0 border-y-2 border-black mx-auto'>
                    <thead>
                        <tr>
                            <th className="sticky border-x-2 border-black left-0 w-32 h-12 bg-white px-4 py-2">No.</th>
                            {history.map((item, i) => <td colSpan={2} className="border-2 border-black h-12 text-center">{i+1}</td>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="sticky border-x-2 border-black left-0 w-32 h-12 bg-white px-4 py-2">Operand</th>
                            {operands.map(item => {
                                return (
                                    <>
                                        <td className="border-2 border-black h-12 bg-white px-4 py-2">{item[0]}</td>
                                        <td className="border-2 border-black h-12 bg-white px-4 py-2">{item[1]}</td>
                                    </>
                                )}
                            )}
                        </tr>
                        <tr>
                            <th className="sticky border-x-2 border-black left-0 w-32 h-12 bg-white px-4 py-2">Answer</th>
                            {values.map(item => 
                                <td colSpan={2} 
                                    className={"border-2 border-black h-12 text-center text-white " + (item[1] ? "bg-green-600" : "bg-red-600")}>
                                    {item[0]}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <th className="sticky border-x-2 border-black left-0 w-32 h-12 bg-white px-4 py-2">Time (s)</th>
                            {times.map(item => <td colSpan={2} className="border-2 border-black h-12 text-center">{item}</td>)}
                        </tr>
                    </tbody>

                </table>
            </div>
            <button
                className='flex items-center bg-blue-900 px-6 py-2 rounded-lg text-white mt-3'
                onClick={onClickTryAgain}
            >
                <FaUndoAlt /><span className='ml-3 text-xs'>Try Again</span>
            </button>
        </div>
    )
}

export default Result