import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    const history = useSelector(state => state.data.history)

    return (
        <div className='fixed bg-blue-200 top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center'>
            <h1 className="mb-8 text-6xl">Times Up!</h1>
            <div>
                {history.map((item, i) => {
                    return (
                        <div key={i}>[{item.time}] {item.num1} + {item.num2} = {item.value} {item.isCorrect ? "" : "X"}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Result